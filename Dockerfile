FROM node:18

WORKDIR /app

COPY package.json .
EXPOSE 5000
RUN npm install

COPY . .

CMD ["npm", "start"]
