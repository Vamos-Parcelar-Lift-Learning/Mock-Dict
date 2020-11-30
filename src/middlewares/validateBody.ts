/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

const cpfValidation = keystring => {
  const cpf = /^[0-9]{11}$/;
  return cpf.test(keystring);
};

const phoneValidation = keystring => {
  const phone = /^\+[1-9][0-9]\d{1,14}$/;
  return phone.test(keystring);
};

const emailValidation = keystring => {
  const email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return email.test(keystring);
};

const validateBody = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.method === 'POST') {
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

    if (await schema.isValid(req.body)) {
      const { Key, KeyType } = req.body;

      const validators = {
        cpf: cpfValidation,
        celular: phoneValidation,
        email: emailValidation,
      };

      const validator = validators[KeyType.toLowerCase()];
      if (!validator(Key)) {
        return res.status(400).json({ err: 'Chave inválida' });
      }
    } else {
      return res.status(400).json({ err: 'Body inválido' });
    }
  }
  next();
};

export default validateBody;
