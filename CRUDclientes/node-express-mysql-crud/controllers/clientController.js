// controllers/clientController.js

const Client = require('../models/clientModel');

exports.index = (req, res) => {
  Client.getAll((error, clients) => {
    if (error) res.render('error', { error: 'Erro ao buscar clientes.' });
    res.render('index', { clients });
  });
};

exports.showAddForm = (req, res) => {
  res.render('add-client');
};

exports.addClient = (req, res) => {
  const newClient = req.body;
  Client.create(newClient, (error, data) => {
    if (error) res.render('error', { error: 'Erro ao adicionar cliente.' });
    res.redirect('/');
  });
};

exports.showEditForm = (req, res) => {
  const id = req.params.id;
  Client.getById(id, (error, client) => {
    if (error) res.render('error', { error: 'Erro ao buscar cliente.' });
    res.render('edit-client', { client });
  });
};

exports.editClient = (req, res) => {
  const id = req.params.id;
  const updatedClient = req.body;
  Client.update(id, updatedClient, (error, data) => {
    if (error) res.render('error', { error: 'Erro ao atualizar cliente.' });
    res.redirect('/');
  });
};

exports.deleteClient = (req, res) => {
  const id = req.params.id;
  Client.delete(id, (error, data) => {
    if (error) res.render('error', { error: 'Erro ao deletar cliente.' });
    res.redirect('/');
  });
};