# Stage 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app
COPY app.js ./

# Stage 2: Production Image
FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app/app.js ./

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

EXPOSE 3000

CMD ["node", "app.js"]