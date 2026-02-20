# Sudlife CMS :raised_hand:
# Getting started

### Requirements

- Nginx 1.23
- Strapi 4.x
- MariaDB 11.4.3
- NodeJs 20.x (Strapi)
- Node.js 18.x (NextJs)
- Next.js 14.x
- OpenSearch 2.11.0

## Points of Contact

- **Xavier Riviere** - _Business PoC_ - [xavier.riviere@ekino.com](mailto:xavier.riviere@ekino.com)
- **Muhammed Naushad** - _Tech Back End PoC_ - [muhammed.naushad@ekino.com](mailto:muhammed.naushad@ekino.com)

## External Links

- [Jira](https://jira.ekino.com/projects) - The backlog
- [Slack](https://ekino.slack.com/archives/C0774GHEZ32) - Dev team chatroom
- [Confluence](https://confluence.ekino.com/display/EKIN/Sudlife) - The Wiki
- [GitLab](https://gitlab.ekino.com/sudlife/sudlife-cms) - Repository

### Installation

- cd nextjs
- cp .env.dist  .env.dev
- cd ../
- cd cms
- cp .env.dist  .env
- cd ../
- cp .env.dist  .env
- make infra-up
- make app-install or (make infra-shell-front, cd nextjs, yarn , exit, make infra-shell-cms, cd cms, yarn , exit)
- make app-cms-data-setup

Domains like below should be setup by editing your /etc/hosts files:

- [http://sudlife.backend.local](http://sudife.backend.local/)
- [http://sudlife.frontend.local](http://sudlife.frontend.local/)
- [http://sudlife.intranet.local](http://sudlife.intranet.local)

Backend commands to run the application:

- make app-cms-build
- make app-cms-run

Frontend commands to run the application:

- make app-next-build
- make app-next-run

Switching the front end for sudlife and intranet

- Use SITE_ID=sudlife on env for sudlife
- Use SITE_ID=intranet on env for intranet website

`Note`: Please strictly follow https://confluence.ekino.com/display/EKIN/Git+Usage to use this repo.

More info please check [here](https://confluence.ekino.com/display/EKIN/Sudlife)