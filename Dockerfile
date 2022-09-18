FROM node:16.16.0 as builder

RUN pwd
RUN whoami

RUN mkdir ./neond/neond-front
WORKDIR ./neond/neond-front
RUN npm install

COPY package.json ~/neond/neond-front/package.json
COPY . ~/neond/neond-front

EXPOSE 3000:3000

CMD ["npm start"]