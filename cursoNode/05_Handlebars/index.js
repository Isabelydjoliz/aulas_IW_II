const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
    //template engine 
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') 

    
    //conexão com  banco de dados
    const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
    })

//rotas
app.get('/cadastro',function(req,res){
    res.render('formulario')
})

app.post('/add', function(req,res){
    res.send('FORMULARIO RECEBIDO')
})

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
