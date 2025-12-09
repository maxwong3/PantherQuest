FROM node:18-alpine

WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Add entrypoint that waits for DB and runs seed if requested
COPY docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh
RUN chmod +x /usr/src/app/docker-entrypoint.sh

EXPOSE 3000

ENV NODE_ENV=production

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
CMD ["node", "server.js"]
