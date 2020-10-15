import faker from 'faker-br';
import fs from 'fs';
import path from 'path';

const db = require('../db.json');

const keyTypeParams = ['EMAIL', 'CPF', 'CNPJ', 'PHONE'];

function genData() {
  let id;
  for (id = 0; id < 10; id += 1) {
    const accountNumber = faker.random.number({ min: 10, max: 10 });
    const accountType = 'CACC';
    const branch = faker.random.number({ min: 5, max: 5 });
    const openingDate = faker.date
      .between('2018-01-01', '2018-07-31')
      .toISOString()
      .split('T')[0];
    const participant = faker.random.number(8);
    const keyType = keyTypeParams[Math.ceil(Math.random() * 4) - 1];
    let key;
    if (keyType === 'PHONE') {
      key = faker.phone.phoneNumber();
    } else if (keyType === 'CPF') {
      key = faker.br.cpf();
    } else if (keyType === 'CNPJ') {
      key = faker.br.cnpj();
    } else {
      key = faker.internet.email();
    }

    const name = faker.name.firstName() + faker.name.lastName();
    const taxIdNumber = faker.random.number(11);
    const type = 'NATURAL_PERSON';
    const tradeName = name;

    db.api.push({
      Account: {
        AccountNumber: accountNumber,
        AccountType: accountType,
        Branch: branch,
        OpeningDate: openingDate,
        Participant: participant,
      },
      KeyType: keyType,
      Key: key,
      Owner: {
        Name: name,
        TaxIdNumber: taxIdNumber,
        Type: type,
        tradeName,
      },
    });
  }
  const json = JSON.stringify(db);
  fs.writeFile(path.resolve(__dirname, '../db.json'), json, err => {
    if (err) throw err;
    console.log('Dados gerados com sucesso');
  });
}

genData();
