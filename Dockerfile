# Establecer la imagen base de Node.js para la construcción
FROM node:16 AS build
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación Angular
RUN npm run build --prod

# Establecer la imagen base de NGINX para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/dist/fes-aragon.angular.banca /usr/share/nginx/html

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]

#comandos
#docker build -t ng_fes_aragon_banca_web .