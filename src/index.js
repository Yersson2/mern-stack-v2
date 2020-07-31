const app = require('./app');

const main = async () => {
  await app.listen(4000);
  console.log('Server on port 4000')
}

main();
