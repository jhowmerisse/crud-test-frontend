FROM node:alpine

WORKDIR /usr/backend

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]