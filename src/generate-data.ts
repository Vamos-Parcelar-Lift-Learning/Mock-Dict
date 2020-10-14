var faker = require('faker-br');
var keyTypeParams = ['EMAIL', 'CPF', 'CNPJ', 'PHONE'];
var db = require('./db.json');
var fs = require('fs');

function generateData () {
  for (var id = 0; id < 10; id++) {
    let accountNumber = faker.random.number({min: 10, max: 10});
    let accountType = 'CACC';
    let branch = faker.random.number({min: 5, max: 5})
    let openingDate = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
    let participant = faker.random.number(8);
    let keyType = keyTypeParams[Math.ceil(Math.random()*4)-1];
    let key
    if (keyType == 'PHONE') {
        key = faker.phone.phoneNumber();
    }
    else if (keyType == 'CPF') {
        key = faker.br.cpf();
    }
    else if (keyType == 'CNPJ') {
        key = faker.br.cnpj();
    }
    else {
        key = faker.internet.email();
    }
       
    let name = faker.name.firstName() + faker.name.lastName();
    let taxIdNumber = faker.random.number(11);
    let type = "NATURAL_PERSON";
    let tradeName = name;
 
    db.api.push(
        {
            "Account": {
              "AccountNumber": accountNumber,
              "AccountType": accountType,
              "Branch": branch,
              "OpeningDate": openingDate,
              "Participant": participant
            },
            "KeyType": keyType,
            "Key": key,
            "Owner": {
              "Name": name,
              "TaxIdNumber": taxIdNumber,
              "Type": type,
              "tradeName": tradeName
            }
        }
    );
  }
  // console.log(db)
  json = JSON.stringify(db); 
  fs.writeFile(__dirname + '/db.json', json, (err) => {
    if (err) throw err;
    console.log('Dados gerados com sucesso');
  });
  // return {db};
}

module.exports = generateData();