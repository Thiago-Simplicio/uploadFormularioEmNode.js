const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const form = require('./models/Form');



app.use(express.json());


//Config
    //Teamplate Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars');


//BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


//Rotas
app.get("/", function(req,res){
    res.send("Testando a API");
});

app.get("/formulario", function(req,res){
    req.body
    res.render('formulario');
});

app.post("/add", function(req,res){
   form.create({
       nome: req.body.nome,
       email: req.body.email,
       cidade: req.body.cidade
   }).then(function(){
       res.send("Cadastro criado com susesso");
   }).catch(function(erro){
       res.send("Erro ao criar o Cadastro "+erro);
   });
});



// porta do servidor
app.listen(8481, function(){
    console.log("Servidor rodando na porta http://localhost:8481");
})
