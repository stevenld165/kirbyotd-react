FROM node:20-alpine

# define build args for vite env variables
ARG VITE_API_URL

# set env variables during build
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /frontend

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]