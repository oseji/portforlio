FROM node:20-alpine

WORKDIR /app

COPY .env .

#cfrontend setup
WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm ci

COPY ./frontend/index.html ./frontend/postcss.config.js ./frontend/tailwind.config.js ./frontend/vercel.json ./frontend/vite.config.js ./

COPY ./frontend/public ./public

COPY ./frontend/src ./src

RUN npm run build

#backend setup
WORKDIR /app/backend 

COPY ./backend ./

EXPOSE 4000

WORKDIR /app/frontend

CMD [ "npm","run","dev" ]