FROM node:22-alpine AS build
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM ghcr.io/hanzoai/spa
COPY --from=build /app/out /public
