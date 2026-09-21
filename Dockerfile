# Stage 1: Build & Install Dependencies
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Production Run
FROM node:22-alpine
WORKDIR /app

# Copy node_modules & source code dengan izin milik user 'node'
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

# Gunakan user biasa (bukan root) untuk keamanan
USER node

EXPOSE 3000

# Docker Healthcheck Native
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "app.js"]