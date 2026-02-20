FROM node:20-alpine3.21
LABEL maintainer="muhammed.naushad@ekino.com"

ARG UID=1002
ENV UV_THREADPOOL_SIZE=64


RUN echo "@edge-main https://nl.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
    && echo "@edge-community https://nl.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
    && apk add --update alpine-sdk bash curl python3 make g++ \
    && deluser node \
    && adduser -D -g 'node user' -s /bin/false -u $UID node

RUN apk add nginx

RUN mkdir -p /cms && \
	chown node:node /cms && \
  chmod 777 /cms && \
	mkdir -p /etc/nginx/ssl && \
	chown node:node /etc/nginx/ssl

COPY nginx/* /etc/nginx/
COPY common/nginx/* /etc/nginx/
COPY ssl/* /etc/nginx/ssl/


WORKDIR /cms
COPY --chown=node cms/ /cms

COPY --chown=node start.sh /cms/start.sh
RUN chmod +x /cms/start.sh

ENTRYPOINT ["./start.sh"]