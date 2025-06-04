# Etapa 1: build con Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Primero copiamos los paquetes comunes para que estén disponibles durante el build
COPY ./common/packages/common-styles /app/common/packages/common-styles
COPY ./common/packages/common-utils /app/common/packages/common-utils

# Copiamos archivos de config y dependencias
COPY ./host-app/bun.lock ./
COPY ./host-app/package.json ./
COPY ./host-app/tsconfig.json ./
COPY ./host-app/tsconfig.app.json ./
COPY ./host-app/tsconfig.node.json ./
COPY ./host-app/vite.config.ts ./
COPY ./host-app/index.html ./
COPY ./host-app/src ./src

# Registramos los paquetes comunes para linking
WORKDIR /app/common/packages/common-styles
RUN bun link

WORKDIR /app/common/packages/common-utils
RUN bun link

# Volvemos al directorio de la aplicación
WORKDIR /app

# Instalamos dependencias
RUN bun install

# Vinculamos los paquetes comunes
RUN bun link common-styles
RUN bun link common-utils

# Build de la aplicación
RUN bun run build

# Etapa 2: contenedor final para servir la app
FROM oven/bun:1

WORKDIR /app

# Copiamos archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bun.lock ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/vite.config.ts ./

# Instalamos vite (si no está incluido en deps de tu package.json)
RUN bun add -d vite

# Instalamos dependencias
RUN bun install

EXPOSE 5000

CMD ["bun", "run", "preview"]
