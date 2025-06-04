# Etapa 1: build con Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Primero copiamos los paquetes comunes para que estén disponibles durante el build
COPY ./common/packages/common-styles /app/common/packages/common-styles
COPY ./common/packages/common-utils /app/common/packages/common-utils

# Copiamos archivos de configuración y código fuente
COPY ./mfe-products/bun.lock ./
COPY ./mfe-products/package.json ./
COPY ./mfe-products/tsconfig.json ./
COPY ./mfe-products/tsconfig.app.json ./
COPY ./mfe-products/tsconfig.node.json ./
COPY ./mfe-products/vite.config.ts ./
COPY ./mfe-products/index.html ./
COPY ./mfe-products/src ./src

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

COPY --from=builder /app/dist ./dist

#RUN bun add serve

EXPOSE 4173

CMD ["bun", "run", "preview"]
