FROM node:14.15.4

ENV PORT=3000

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

CMD [ "npm", "start" ]