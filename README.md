# Mock Dict

API Rest responsável por mockar os dados do DICT, feita em typescript com o uso da biblioteca json-server.

## Ambiente de desenvolvimento

https://vp-mock-dict.herokuapp.com/

Chave para acesso: mock-pix

## Comandos Básicos
### Instalar as dependências
``` bash
  npm install ou yarn
```
### Rodar o projeto
``` bash
  npm start ou yarn start
```

## Configuração do ambiente
Nas requisições da api é necessário o envio de um token para autorização, que deve ser configurado em um arquivo .env.
``` php
  #.env
  TOKEN=token_desejado
```
- O token configurado deve ser passado no header como Authorization para que a aplicação valide as requisições.

## Descrição da api
### Rotas
```
  GET /api -> Retorna os dados de todas as chaves registradas no sistema
  GET /api?Key=<chave_usuario> -> Retorna os dados da chave especificada
```

### Payload

```json
{
  "Account": {
    "AccountNumber": "number",
    "AccountType": "string",
    "Branch": "number",
    "OpeningDate": "string",
    "Participant": "number",
  },
  "Key": "string",
  "KeyType": "string",
  "Owner":{
    "Name": "string",
    "TaxIdNumber": "number",
    "Type": "string",
    "tradeName": "string",
  },
}
```
