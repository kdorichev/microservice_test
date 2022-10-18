FROM node:18-alpine
WORKDIR /app
COPY . /app/
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8088
CMD node index.js

