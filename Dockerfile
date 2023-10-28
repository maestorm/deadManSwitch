FROM node:18-alpine

RUN mkdir -p /home/node/dms/node_modules && chown -R node:node /home/node/dms

RUN npm install -g pnpm

WORKDIR /home/node/dms

COPY package*.json ./

USER node

RUN pnpm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "pnpm", "start" ]