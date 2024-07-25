// models/clientModel.js

const db = require('../config/db');

const Client = {};

Client.getAll = result => {
  db.query('SELECT * FROM clientes', (error, res) => {
    if (error) throw error;
    result(null, res);
  });
};

Client.getById = (id, result) => {
  db.query('SELECT * FROM clientes WHERE id = ?', id, (error, res) => {
    if (error) throw error;
    result(null, res[0]);
  });
};

Client.create = (newClient, result) => {
  db.query('INSERT INTO clientes SET ?', newClient, (error, res) => {
    if (error) throw error;
    result(null, res.insertId);
  });
};

Client.update = (id, client, result) => {
  db.query('UPDATE clientes SET ? WHERE id = ?', [client, id], (error, res) => {
    if (error) throw error;
    result(null, res);
  });
};

Client.delete = (id, result) => {
  db.query('DELETE FROM clientes WHERE id = ?', id, (error, res) => {
    if (error) throw error;
    result(null, res);
  });
};

module.exports = Client;