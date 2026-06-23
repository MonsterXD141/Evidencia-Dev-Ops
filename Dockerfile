FROM node:20

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de Metro Bundler
EXPOSE 8081

# Comando por defecto para iniciar Expo apuntando a la LAN
CMD ["npx", "expo", "start", "--go", "--host", "lan"]