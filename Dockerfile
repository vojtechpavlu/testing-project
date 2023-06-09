FROM node:16

# Create App directory
WORKDIR /usr/src/app

# Copy and Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]