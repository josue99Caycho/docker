const { connect, set } = require(`mongoose`);

set('strictQuery', false);
connect(`mongodb://mongodb:27017/node-docker`, {})
  .then(() => { console.log(`CONECTADO A BASE DE DATOS`) })
  .catch(error => console.log(error))