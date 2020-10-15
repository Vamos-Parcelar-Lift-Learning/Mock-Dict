const middlewareToken = (req, res, next) => {
  console.log(`METHOD ${req.method}`);
  if (
    req.method === 'GET' ||
    (req.method !== 'GET' &&
      req.headers.authorization === '74ac2054-c623-44a9-89c7-0a91c0b56bc3')
  ) {
    console.log(req);
    next();
  } else {
    res.json({ erro: 'Token não encontrado.' });
  }
};

export default middlewareToken;
