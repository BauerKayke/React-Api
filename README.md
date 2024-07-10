# React-Api
Desenvolvimento de um site em React na qual utilizo uma api para conexão com o banco de dados


## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Axios (para requisições HTTP)
  - React Router (para navegação)
  - Lodash (para requisições)
  - Styled Components (para estilização)
  - Redux-Saga,
  - ...
- **Backend:**
  - Node.js
  - Express
  - MySQL
  - Helmet
  - Sequelize
  - Nodemon
  - ...

## Pré-requisitos

Você precisará ter instalado em sua máquina:

- Node.js
- npm (ou yarn)

## Instalação

### Backend

1. Navegue até o diretório do backend:
    ```bash 
    cd backend
2. Instale as dependências:
    ```bash
   npm install
   ```
3. Inicie o servidor (Localmente):
    ```bash
    npm run dev
    ```
4. O servidor será iniciado em http://localhost:3001.

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
    cd frontend
      ```
2. Instale as dependências:
   ```bash
    npm install
3. Inicie a aplicação React:
    ```bash
    npm start
4. A aplicação será iniciada em http://localhost:3000.

## Configuração
### Backend
Certifique-se de configurar as variáveis de ambiente necessárias para o backend, como a URL do banco de dados e a porta do servidor. Você pode fazer isso criando um arquivo .env na raiz do diretório backend:

  ``` console

  APP_URL='http://localhost:3001'  
  APP_PORT=3001  
  DATABASE= seu database  
  DATABASE_HOST= seu host  
  DATABASE_PORT= sua port  
  DATABASE_USERNAME= seu username  
  DATABASE_PASSWORD= sua senha

  ```

### Frontend
Se necessário, configure a URL da API que será consumida pelo frontend. Você pode fazer isso modificando o arquivo axios.js dentro de src/services no diretório frontend

