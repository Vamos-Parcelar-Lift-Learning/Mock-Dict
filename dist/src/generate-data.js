"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_br_1 = __importDefault(require("faker-br"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db = __importStar(require("../db.json"));
const keyTypeParams = ['EMAIL', 'CPF', 'CNPJ', 'PHONE'];
function genData() {
    let id;
    for (id = 0; id < 10; id += 1) {
        const accountNumber = faker_br_1.default.random.number({ min: 10, max: 10 });
        const accountType = 'CACC';
        const branch = faker_br_1.default.random.number({ min: 5, max: 5 });
        const openingDate = faker_br_1.default.date
            .between('2018-01-01', '2018-07-31')
            .toISOString()
            .split('T')[0];
        const participant = faker_br_1.default.random.number(8);
        const keyType = keyTypeParams[Math.ceil(Math.random() * 4) - 1];
        let key;
        if (keyType === 'PHONE') {
            key = faker_br_1.default.phone.phoneNumber();
        }
        else if (keyType === 'CPF') {
            key = faker_br_1.default.br.cpf();
        }
        else if (keyType === 'CNPJ') {
            key = faker_br_1.default.br.cnpj();
        }
        else {
            key = faker_br_1.default.internet.email();
        }
        const name = faker_br_1.default.name.firstName() + faker_br_1.default.name.lastName();
        const taxIdNumber = faker_br_1.default.random.number(11);
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
    fs_1.default.writeFile(path_1.default.resolve(__dirname, '../db.json'), json, err => {
        if (err)
            throw err;
        console.log('Dados gerados com sucesso');
    });
}
genData();
