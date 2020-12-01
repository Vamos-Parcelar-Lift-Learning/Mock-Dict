// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authMiddleware = (req, res, next) => {
  console.log(`Nova requisição recebida: ${req.method}`);
  const token = process.env.TOKEN;
  if (token && req.headers.authorization === token) {
    next();
  } else {
    res.status(401).json({ error: 'Token não encontrado!' });
  }
};

export default authMiddleware;
