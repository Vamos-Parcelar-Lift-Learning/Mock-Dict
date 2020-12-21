/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response } from 'express';
import * as yup from 'yup';

import KeysRepository from '../repositories/KeysRepository';

const keysRepository = new KeysRepository();

export default class KeyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const keys = await keysRepository.all();
    return response.json(keys);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { key } = request.params;
    const keys = await keysRepository.findByKey(key);
    return response.json(keys);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const schema = yup.object().shape({
      Account: yup.object().shape({
        AccountNumber: yup.number().required(),
        AccountType: yup.string().required(),
        Branch: yup.number().required(),
        OpeningDate: yup.date().required(),
        Participant: yup.number().required(),
      }),
      KeyType: yup
        .string()
        .matches(/^(cpf|CPF|email|EMAIL|celular|CELULAR)$/)
        .required(),
      Key: yup.string().required(),
      Owner: yup.object().shape({
        Name: yup.string().required(),
        TaxIdNumber: yup.number().required(),
        Type: yup.string().required(),
        tradeName: yup.string().required(),
      }),
    });

    const isValid = await schema.isValid(request.body);
    if (!isValid) {
      return response.status(400).json({ msg: 'Body inválido' });
    }

    const { Account, KeyType, Key, Owner } = request.body;

    const key = await keysRepository.create({
      Account,
      KeyType,
      Key,
      Owner,
    });

    return response.json(key);
  }
}
