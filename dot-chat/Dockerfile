# Usar a imagem base do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
