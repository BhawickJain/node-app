FROM node:16
WORKDIR /app
COPY ./app/package.json .
RUN npm install --no-cache
CMD ["npm", "run", "dev"]
