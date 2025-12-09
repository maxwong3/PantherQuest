## Build stage
FROM node:18-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

## Production stage
FROM nginx:stable-alpine

# Copy built app
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Add nginx config to proxy API calls to backend
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
