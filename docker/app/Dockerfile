FROM node:alpine

WORKDIR /usr/app

RUN npm install pm2 --global

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

USER node

CMD ["pm2-runtime", "start", "./build/src/main/app.js"]
