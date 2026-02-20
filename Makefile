include .env
.PHONY: infra-shell-cms infra-shell-db infra-shell-front infra-shell-web-server infra-shell-adminer \
        infra-up infra-stop infra-down infra-show-logs infra-clean app-install \
        app-cms-install app-cms-build app-cms-run app-cms-config-export app-cms-config-import app-cms-data-setup ci-cms-data-setup \
        app-cms-static-analysis \
        app-next-install app-next-build app-next-run app-next-security-check app-next-static-analysis \
        app-next-cs-fix app-next-cs-check ci-next-data-setup \
        db\:dump db\:create db\:drop db\:import \
        release-new release-hotfix release-changelog release-finalize


yellow = \033[38;5;3m
bold = \033[1m
reset = \033[0m
message = @echo -p "${yellow}${bold}${1}${reset}"

EXTRA_PARAMS ?=
UID = $(shell id -u)

#
# Executes a command in a running container, mainly useful to fix the terminal size on opening a shell session
#
# $(1) the options
#
define infra-shell
	docker-compose exec -e COLUMNS=`tput cols` -e LINES=`tput lines` $(1)
endef

#
# Make sure to run the given command in a container identified by the given service.
#
# $(1) the user with which run the command
# $(2) the Docker Compose service
# $(3) the command to run
#
define run-in-container
	@if [ ! -f /.dockerenv -a "$$(docker-compose ps -q $(2) 2>/dev/null)" ]; then \
		docker-compose exec --user $(1) $(2) /bin/sh -c "$(3)"; \
	elif [ $$(env|grep -c "^CI=") -gt 0 -a $$(env|grep -cw "DOCKER_DRIVER") -eq 1 ]; then \
		docker-compose exec --user $(1) -T $(2) /bin/sh -c "$(3)"; \
	else \
		$(3); \
	fi
endef

########################################
#              INFRA                   #
########################################

infra-shell-cms: ## to open a shell session in the Strapi container
	$(call infra-shell,cms sh)

infra-shell-db: ## to open a shell session in the database container
	$(call infra-shell,database bash)

infra-shell-front: ## to open a shell session in the NextJs container
	$(call infra-shell,nodejs sh)

infra-shell-web-server: ## to open a shell session in the nginx container
	$(call infra-shell,nginx sh)

infra-shell-adminer: ## to open a shell session in the Adminer container
	$(call infra-shell,adminer sh)

infra-up: ## to start the containers
	$(call message,$(PROJECT_NAME): Starting Docker containers...)
	docker-compose up -d --remove-orphans

infra-stop: ## to stop the containers
	$(call message,$(PROJECT_NAME): Stopping Docker containers...)
	docker-compose stop

infra-down: ## to remove the containers
	$(call message,$(PROJECT_NAME): Removing Docker network & containers...)
	docker-compose down -v --remove-orphans

infra-show-logs: ## to show logs from containers, specify "EXTRA_PARAMS=service_name" to filter logs by container
	docker-compose logs -ft ${EXTRA_PARAMS}

infra-clean: ## to remove the docker image
	$(call message,$(PROJECT_NAME): Removing Docker containers & Images...)
	@$(MAKE) -s infra-down
	rm -Rvf dockerdb/*
	docker rmi ${PROJECT_NAME}_nginx ${PROJECT_NAME}_cms ${PROJECT_NAME}_nodejs ${PROJECT_NAME}_database

app-install: ## to install app
	$(MAKE) app-cms-install
	$(MAKE) app-next-install
	$(MAKE) app-cms-build
	$(MAKE) app-next-build

########################
# App Backend Strapi #
########################

app-cms-install: ## to install Strapi
	$(call message,$(PROJECT_NAME): Installing/updating Strapi dependencies...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn cache clean --all && yarn)
	$(call run-in-container,root,cms,cd cms/src/plugins/sudlife-custom-plugin && SHELL=/bin/bash yarn cache clean --all && yarn)
	$(call message,$(PROJECT_NAME): Strapi is ready!)

app-cms-config-export: ## to export strapi
	$(call message,$(PROJECT_NAME): Exporting CMS configuration...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn cs export)

app-cms-config-import: ## to import Strapi
	$(call message,$(PROJECT_NAME): Importing CMS configuration...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn cs import)

app-cms-build: ## to build Strapi
	$(call run-in-container,root,cms,cd cms/src/plugins/sudlife-custom-plugin && SHELL=/bin/bash yarn build)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn build $(EXTRA_PARAMS))

app-cms-static-analysis: ## to run eslint
	$(call message,$(PROJECT_NAME): Analysing the code...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn lint $(EXTRA_PARAMS))
	$(call message,$(PROJECT_NAME): Test Completed...)

app-cms-cs-fix: ## to format
	$(call message,$(PROJECT_NAME): Checking the code...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn format:fix $(EXTRA_PARAMS))
	$(call message,$(PROJECT_NAME): Format Completed...)

app-cms-cs-check: ## to format test
	$(call message,$(PROJECT_NAME): Testing the code...)
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn format $(EXTRA_PARAMS))
	$(call message,$(PROJECT_NAME): Test Completed...)

app-cms-data-setup: ## to setup strapi
	$(MAKE) db\:drop
	$(MAKE) db\:create
	$(MAKE) db\:import
	$(call run-in-container,root,cms,cd cms && cp -R /backup/uploads/* public/uploads)
	$(MAKE) app-cms-config-import

app-cms-run: ## to run Strapi
	$(call run-in-container,root,cms,cd cms && SHELL=/bin/bash yarn develop)

########################
# App Front end React js #
########################

app-next-install: ## to install NextJs
	$(call message,$(PROJECT_NAME): Installing/updating Next Js dependencies...)
	$(call run-in-container,root,nodejs, cd nextjs && SHELL=/bin/bash yarn cache clean --all && yarn)
	$(call message,$(PROJECT_NAME): NextJs is ready!)

app-next-build: ## to build Nextjs
	$(call run-in-container,root,nodejs, cd nextjs && SHELL=/bin/bash yarn build $(EXTRA_PARAMS))

app-next-run: ## to run NextJs
	$(call run-in-container,root,nodejs, cd nextjs && SHELL=/bin/bash yarn dev)

app-next-security-check: ## to check security issues in the node dependencies
	$(call message,$(PROJECT_NAME): Checking Next Js...)
	$(call run-in-container,root,nodejs,cd nextjs && SHELL=/bin/bash yarn audit)

app-next-static-analysis: ## to test the next js app
	$(call run-in-container,root,nodejs,cd nextjs && SHELL=/bin/bash yarn lint)

app-next-cs-fix: ## to test the next js app
	$(call run-in-container,root,nodejs,cd nextjs && SHELL=/bin/bash yarn format:fix)

app-next-cs-check: ## to test the next js app
	$(call run-in-container,root,nodejs,cd nextjs && SHELL=/bin/bash yarn format)

#######################
# CI #
#######################

ci-cms-data-setup: ## for ci only
	$(call message,$(PROJECT_NAME): Installing Strapi...)
	$(call run-in-container,root,cms,cd cms/src/plugins/sudlife-custom-plugin \
	 && SHELL=/bin/bash yarn cache clean --all && yarn \
	 && yarn build)
	$(call run-in-container,root,cms,cd cms \
	 && SHELL=/bin/bash yarn cache clean --all && yarn \
	 && yarn build-production)
	$(call message,$(PROJECT_NAME): Strapi is ready!)

ci-next-data-setup: ## for ci only
	$(call message,$(PROJECT_NAME): Installing NextJs...)
	$(call run-in-container,root,nodejs,cd nextjs \
	 && SHELL=/bin/bash yarn cache clean --all && yarn \
	 && yarn build-production)
	$(call message,$(PROJECT_NAME): Next Js is ready!)

#######################
# Database #
#######################

db\:dump: ## to dumb db
	$(call message,$(PROJECT_NAME): Creating DB dump...)
	mkdir -p $(BACKUP_DIR)/db
	@docker exec $(shell docker-compose ps -q database) mariadb-dump -u root strapi_db > $(BACKUP_DIR)/db/$(DB_DUMP_NAME).sql
	$(call message,$(PROJECT_NAME): Done!)

db\:create: ## to import db
	$(call message,$(PROJECT_NAME): Creating DB...)
	@docker exec $(shell docker-compose ps -q database) mariadb -u root  -e "CREATE DATABASE strapi_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
	$(call message,$(PROJECT_NAME): Done!)

db\:drop: ## to import db
	$(call message,$(PROJECT_NAME): Dropping DB...)
	@docker exec $(shell docker-compose ps -q database) mariadb -u root  -e "DROP DATABASE IF EXISTS strapi_db"
	$(call message,$(PROJECT_NAME): Done!)


db\:import: ## to import db
	$(call message,$(PROJECT_NAME): Importing DB...)
	$(call run-in-container,root,database,SHELL=/bin/bash mariadb -u root strapi_db < backup/db/strapi.sql)
	$(call message,$(PROJECT_NAME): Done!)

########################################
#              RELEASE                 #
########################################

release-new: ## to create a new release
	bash ./tools/scripts/git/create-release.sh

release-hotfix: ## to create a new hotfix
	bash ./tools/scripts/git/create-release.sh hotfix

release-changelog: ## to generate changelog
	php ./tools/changelog/scripts/changelog-updates.php

release-finalize: ## to create a new production release
	bash ./tools/scripts/git/prod-release.sh $(VERSION)