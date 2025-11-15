FROM node:20-alpine
WORKDIR /app
# Install dependencies first for better caching (if lockfile present)
COPY package.json package-lock.json* ./
RUN npm install || true
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]