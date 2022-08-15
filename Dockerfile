FROM node:16-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
CMD ["npm", "start"]
