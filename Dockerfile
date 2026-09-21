# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY app.js ./

# Stage 2: Production Image (Ukuran Super Kecil)
FROM node:18-alpine
WORKDIR /app

# Menyalin file app.js dari Stage 1
COPY --from=builder /app/app.js ./

# Healthcheck bawaan Docker
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

EXPOSE 3000

CMD ["node", "app.js"]