FROM node:16.16.0 as builder

RUN mkdir /home/neond/neond-front
WORKDIR /home/neond/neond-front
RUN npm install

COPY package.json /home/neond/neond-front/package.json
COPY . /home/neond/neond-front

EXPOSE 3000:3000

CMD ["npm start"]