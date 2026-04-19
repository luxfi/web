FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm build

FROM ghcr.io/hanzoai/spa
COPY --from=build /app/out /public

