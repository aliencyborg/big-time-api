FROM node:erbium-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN cd /app && npm ci
COPY . /app/

EXPOSE 4040

CMD [ "npm", "start" ]
