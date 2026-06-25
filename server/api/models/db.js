var mongoose = require('mongoose');
var gracefulShutdown;

var useMongo = String(process.env.USE_MONGO || '').toLowerCase() === 'true';
var dbURI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cardb';

if (!useMongo) {
  var memoryDb = require('./memoryDb');
  memoryDb.install(mongoose);

  require('./users');
  require('./cars');
  require('./accounts');
  require('./bookings');
  require('./favoritelist');

  memoryDb.seedCars();
  console.log('Rodando com banco em memoria. Nao precisa instalar MongoDB para testar.');
  console.log('Para usar MongoDB real, defina USE_MONGO=true e MONGO_URI=sua_string_de_conexao.');
} else {
  mongoose.connect(dbURI, { useMongoClient: true });

  mongoose.connection.on('connected', function() {
    console.log('Mongoose conectado em ' + dbURI);
  });

  mongoose.connection.on('error', function(err) {
    console.log('Erro de conexao do Mongoose: ' + err);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose desconectado');
  });

  gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
      console.log('Mongoose desconectado por ' + msg);
      callback();
    });
  };

  process.once('SIGUSR2', function() {
    gracefulShutdown('restart do nodemon', function() {
      process.kill(process.pid, 'SIGUSR2');
    });
  });

  process.on('SIGINT', function() {
    gracefulShutdown('encerramento da aplicacao', function() {
      process.exit(0);
    });
  });

  process.on('SIGTERM', function() {
    gracefulShutdown('encerramento do Heroku', function() {
      process.exit(0);
    });
  });

  require('./users');
  require('./cars');
  require('./accounts');
  require('./bookings');
  require('./favoritelist');
}
