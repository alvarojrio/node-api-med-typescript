FROM node:12

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

# RUN npm ci --only=production

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]

# docker build -t <your username>/node-web-app .
# docker run -p 8001:8080 -d <your username>/node-web-app