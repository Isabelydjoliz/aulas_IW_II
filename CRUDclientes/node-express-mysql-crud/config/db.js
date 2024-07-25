// config/db.js

const mysql = require('mysql');

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // seu usuário do MySQL
  password: '', // sua senha do MySQL
  database: 'cadastro_clientes' // nome do banco de dados
});

// Conecta ao banco de dados MySQL
connection.connect(error => {
  if (error) throw error;
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;