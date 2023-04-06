FROM node:18

WORKDIR /app

COPY . .

RUN npm ci

ENTRYPOINT ["npm", "run", "dev"]