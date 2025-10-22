FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Prisma : génération du client
RUN npx prisma generate

EXPOSE 3001
CMD ["node", "index.js"]
