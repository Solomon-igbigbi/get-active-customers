FROM node:alpine AS build

WORKDIR /app

COPY . /app

RUN npm install

#RUN npm run migrate

EXPOSE 4500

CMD ["npm", "run", "start"]