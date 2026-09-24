# =========================================================================
# Multi-stage Dockerfile: Automated Testing Gate + Production Web Server
# =========================================================================

# Stage 1: Build & Automated Test Verification Gate
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency specifications first for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy entire application source code
COPY . .

# Quality Gate 1: Run complete Vitest automated test suite inside Docker
RUN npm run test

# Quality Gate 2: Compile TypeScript and build production bundle
RUN npm run build

# Stage 2: Lightweight Production Nginx Runner
FROM nginx:1.27-alpine AS runner

# Remove default nginx configurations
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom security & SPA configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy verified production static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Healthcheck to verify container health
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
