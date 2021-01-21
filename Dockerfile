FROM node:14.15.4-alpine

ENV PORT=3000
ENV NODE_ENV=development

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

CMD [ "npm", "test" ]