# Usa la imagen base de Node.js
FROM node:16-alpine as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo de configuración de dependencias
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Copia los archivos del proyecto al contenedor
COPY . .
# Compila la aplicación de Angular
RUN npm run build --prod


# Segunda etapa del Dockerfile para el servidor web
FROM nginx:alpine

# Copia los archivos de compilación al directorio de publicación del servidor
COPY --from=build /app/dist/front-retail /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
