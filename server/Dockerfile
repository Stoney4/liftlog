FROM node:20-alpine

WORKDIR /app

# install deps first (better caching)
COPY package*.json ./
RUN npm ci --omit=dev

# copy source
COPY . .

EXPOSE 5000

# change if your server start script differs
CMD ["npm", "start"]
