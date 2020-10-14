module.exports = (req, res, next) => {
    console.log("MEHTOD" + req.method);
    if(req.method == 'GET' || req.method != 'GET' && req.headers.authorization == 'pix') {
        next();
    }
    else {
        res.json({ erro: 'Token não encontrado.'});
    }
}