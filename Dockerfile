FROM node:16.16.0 as builder

RUN npm install

EXPOSE 3000:3000

CMD ["npm start"]