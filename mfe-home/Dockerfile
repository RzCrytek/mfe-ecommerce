# Etapa 1: build con Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Primero copiamos los paquetes comunes para que estén disponibles durante el build
COPY ./common/packages/common-styles /app/common/packages/common-styles
COPY ./common/packages/common-utils /app/common/packages/common-utils

# Copiamos archivos de configuración y código fuente
COPY ./mfe-home/bun.lock ./
COPY ./mfe-home/package.json ./
COPY ./mfe-home/tsconfig.json ./
COPY ./mfe-home/tsconfig.app.json ./
COPY ./mfe-home/tsconfig.node.json ./
COPY ./mfe-home/vite.config.ts ./
COPY ./mfe-home/index.html ./
COPY ./mfe-home/src ./src

# Registramos los paquetes comunes para linking
WORKDIR /app/common/packages/common-styles
RUN bun link

WORKDIR /app/common/packages/common-utils
RUN bun link

# Volvemos al directorio de la aplicación
WORKDIR /app

# Instalamos dependencias
RUN bun install

# Linkeamos los paquetes comunes con bun
RUN bun link common-styles
RUN bun link common-utils

# Build del MFE
RUN bun run build

# Etapa 2: contenedor para servir la app
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

EXPOSE 5001

CMD ["bun", "run", "preview"]
