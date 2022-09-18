FROM node:16.16.0 as builder

RUN pwd
RUN whoami

RUN mkdir /neond
WORKDIR /neond

COPY package.json /neond/package.json
COPY . /neond

RUN npm install

EXPOSE 3000:3000

CMD ["npm start"]