# Usa una imagen base ligera de Node.js
FROM node:14

WORKDIR /app

COPY package*.json ./


RUN npm install
RUN npm install -g webpack webpack-cli
RUN npm install react-router-dom

COPY . .


# Expone el puerto 8002
EXPOSE 8002

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "run", "dev"]




#Para correr

# Construir la imagen:
#   docker build -t nombre-de-tu-imagen .

# Ejecutar el contenedor:
#   docker run -p 8002:8002 nombre-de-tu-imagen
