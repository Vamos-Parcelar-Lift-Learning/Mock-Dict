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
  let keystring = req.query.Key;

  console.log('validando chave DICT');

  if (req.method === 'GET' && keystring) {
    // a query string está trocando o + por " " na requisição
    // o replace desfaz essa alteração
    keystring = keystring.replace(' ', '+');
    req.query.Key = keystring;

    if (
      cpfValidation(keystring) ||
      cnpjValidation(keystring) ||
      phoneValidation(keystring) ||
      emailValidation(keystring)
    ) {
      next();
    } else {
      res.json({ erro: 'Chave com formato inválido!' });
    }
  } else {
    next();
  }
};

export default middlewareValidateDict;
