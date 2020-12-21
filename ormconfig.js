module.exports = {
    name: 'mongo',
    type: 'mongodb',
    // url: process.env.DB_URL,
    url: 'mongodb://127.0.0.1:27017/vp',
    // host: 'localhost',
    port: 27017,
    useUnifiedTopology: true,
    entities: (
      process.env.PROD ? ['dist/schemas/*.js'] : ['src/schemas/*.ts']
    ),
  };
  