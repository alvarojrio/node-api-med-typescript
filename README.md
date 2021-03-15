### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Node.js](https://nodejs.org/en/).  e  Docker 


### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/alvarojrio/node-api-med-typescript>

# Acesse a pasta do projeto no terminal/cmd
$ cd node-api-med-typescript

# Instale as dependências
$ npm install or yarn install

# descomente ormconfig.exemple.json e .env.exemple
$ configure os dados do seu banco de dados local ou com docker configurado no diretorio 

# rodar o projeto
 docker-compose up -d   && yarn dev 

 # buildar o projeto
 yarn build

 # rodar o builder
 node dist/shared/http/server.js


# O servidor inciará na porta:8080 - acesse <http://localhost:8080>