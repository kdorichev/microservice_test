FROM node:18-alpine

# Create app directory
WORKDIR /app
COPY . /app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8088
RUN node index.js

