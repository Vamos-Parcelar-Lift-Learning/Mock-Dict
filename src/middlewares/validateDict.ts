const middlewareValidateDict = (req, res, next) => {
  const keystring = req.query.Key;
  console.log('validando chave DICT');
  console.log(keystring);
  next();
};

export default middlewareValidateDict;
