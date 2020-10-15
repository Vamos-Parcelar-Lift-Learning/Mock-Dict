const cpfValidation = keystring => {
  const cpf = /^[0-9]{11}$/;
  return cpf.test(keystring);
};

const cnpjValidation = keystring => {
  const cnpj = /^[0-9]{14}$/;
  return cnpj.test(keystring);
};

const phoneValidation = keystring => {
  const phone = /^\+[1-9][0-9]\d{1,14}$/;
  return phone.test(keystring);
};

const emailValidation = keystring => {
  const email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return email.test(keystring);
};

const middlewareValidateDict = (req, res, next) => {
  const keystring = req.query.Key;

  console.log('validando chave DICT');

  if (req.method === 'GET' && keystring === 'undefined') {
    if (
      cpfValidation(keystring) ||
      cnpjValidation(keystring) ||
      phoneValidation(keystring) ||
      emailValidation(keystring)
    ) {
      console.log('DEU CERTOOOOOOOOO!');
      next();
    } else {
      res.json({ erro: 'Chave com formato inválido!' });
    }
  } else {
    next();
  }
};

export default middlewareValidateDict;
