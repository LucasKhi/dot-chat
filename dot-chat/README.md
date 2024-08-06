# Dot Chat

Este projeto é uma aplicação React criada com Vite e configurada para ser executada dentro de um contêiner Docker.

## Estrutura do Projeto
```
dot-chat/
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
├── public/
│ ├── favicon.svg
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
└── vite.config.js
```


## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18.x recomendado)
- [Docker](https://www.docker.com/)

## Instruções de Uso

### Executando Localmente

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/lucaskhi/dot-chat.git
   cd dot-chat
   ```

2. **Instale as dependências**:
    ```npm install```

3. **Inicie a aplicação**:
    ```npm run dev```

4. **Acesse a aplicação** no navegador através de http://localhost:5173.

### Executando com Docker
1. **Construa a imagem Docker**:
```docker build -t dot-chat .```

2. **Execute o contêiner Docker**:
```docker run -p 5173:5173 dot-chat```

## Dockerfile

O Dockerfile utilizado neste projeto:
```
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
```
### .dockerignore
O arquivo .dockerignore para evitar copiar arquivos desnecessários para o contêiner:
    
```
    node_modules
    npm-debug.log
    dist
```

### Contribuição
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

### Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.


