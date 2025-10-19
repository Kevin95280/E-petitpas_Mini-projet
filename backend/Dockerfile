FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Prisma : génération du client
RUN npx prisma generate
ENV PORT=3001
EXPOSE 3001
CMD ["node", "index.js"]
