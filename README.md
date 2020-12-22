<h1 align="center">
  Mock Dict
</h1>

<p align="justify">
  API Rest responsável por mockar os dados do DICT, feita em typescript com o uso da biblioteca json-server para auxiliar no desenvolvimento da aplicação da</p>

[Vamos-Parcelar-Lift-Learning](https://vamosparcelar.com.br/blog/vamos-parcelar-e-escolhida-para-o-lift-learning/).

  <p>Este repositório contempla as seguintes funcinalidades:</p>

- Mockar os dados da API DICT
- Gerar chaves de contas para o pix
- Gerar chaves do tipo CPF
- Gerar chaves do tipo CNPJ
- Gerar chaves do tipo telefone
- Gerar chaves do tipo e-mail
- Gerar chaves do tipo EVP

Chave para acesso: mock-pix

## Status do Projeto:

**Em desenvolvimento**

## Acesso ao Deploy do Projeto

<p align="justify">
É possivel acessar a versão mais estavel da aplicação de forma rápida, simples e fácil. Basta acessar a demo da aplicação no Heroku clicando na imagem a baixo.
  <p align="center">
    <a href="https://mock-dict-heroku.herokuapp.com" target="_blank">
    <img alt="Demo on Heroku" src="./public/assets/imgs/demo_on_heroku.png"></a>
  </p>
</p>

## Pré requisitos para rodar a aplicação e os comandos para instalação

<p align="justify">Para clonar e utilizar está aplicação, você irá precisar de:

- [Git](https://git-scm.com)
- [Node.js v10.16][nodejs] ou maior (Recomendamos a versão estável - LTS) + [Yarn v1.13][yarn] ou maior instalada em sua máquina.</p>

<p align="justify">Digite no seu terminal:</p>

```bash
# Clone o repositório
$ git clone https://github.com/Vamos-Parcelar-Lift-Learning/Mock-Dict

# Navegue até o repositório
$ cd Mock-Dict

# Instale as dependencias
$ yarn install

```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/

## Como rodar a aplicação (Passo a Passo)

Para rodar a aplicação basta digitar no seu terminal:

```bash
# Rode a aplicação
$ yarn start
```

e acessar o endereço http://localhost:3000/

Para enviar payloads use um REST client como o insomnia ou postman.
Insira uma rota do tipo get para a porta http://localhost:3000/api/
Preencha o corpo JSON com um payload como o exemplificado nesse documento.

 <p align="center">
    <img alt="Exemplo insomnia" src="./public/assets/imgs/insomnia.png">
  </p>

## Licença do Repositório

...

## Configuração do ambiente

Nas requisições da api é necessário o envio de um token para autorização, que deve ser configurado em um arquivo .env.

```php
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
    "Participant": "number"
  },
  "Key": "string",
  "KeyType": "string",
  "Owner": {
    "Name": "string",
    "TaxIdNumber": "number",
    "Type": "string",
    "tradeName": "string"
  }
}
```
