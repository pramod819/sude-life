FROM node:18-alpine3.21
LABEL maintainer="muhammed.naushad@ekino.com"

ARG UID=1002
ENV UV_THREADPOOL_SIZE=64


RUN echo "@edge-main https://nl.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
    && echo "@edge-community https://nl.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
    && apk add --update alpine-sdk bash curl python3 make g++ \
    && deluser node \
    && adduser -D -g 'node user' -s /bin/false -u $UID node

RUN apk add nginx

RUN mkdir -p /nextjs && \
	chown node:node /nextjs && \
  chmod 777 /nextjs && \
	mkdir -p /etc/nginx/ssl && \
	chown node:node /etc/nginx/ssl

COPY nginx/* /etc/nginx/
COPY common/nginx/* /etc/nginx/
COPY ssl/* /etc/nginx/ssl/


WORKDIR /nextjs
COPY --chown=node nextjs/ /nextjs

COPY --chown=node start.sh /nextjs/start.sh
RUN chmod +x /nextjs/start.sh

ENTRYPOINT ["./start.sh"]
