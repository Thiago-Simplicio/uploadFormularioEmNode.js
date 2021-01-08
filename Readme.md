//Baixar o codigo inteiro

//Após baixar abra os arquivos pelo um editor de texo

//Depois use o terminal com o diretorio da pasta para realizar as seguintes instruções 

// Para criar o arquivo package.json use o comando
npm init

// Para instalar as dependencia use os comandos
npm install --save express body-parser express-handlebars = para os modulos

// O nodemon serve para que cada alteração que seja feita no programa o servidor é racarregado ,
para instalar use o comando
npm install --save nodemon -g

//use "nodemon "index.js" para inicar o servidor"

//Para criar um novo banco de dados no mysql faça os seguintes comando
no terminal com o diretorio da pasta "index.js" digite

mysql -h localhost -u root -p
digite a senha : 12345678 
Pronto

Para ver o banco de dados diite

SHOW DATABSES 

dpois selecione a tabela "formularios" com o comando USE "formularios"

para ver o que foi criado na tabela use o comando " SELECT * FROM formularios " caso ainda não esteja nada
preenchido , Entre no arquivo index.js e digite o comando node.js ou nodemon.js para rodar o servidor
depois entre no navegardor e digite na busca http:/localhost:8481/formulario e coloque os seus dados e clique no botão cadastrar usuario se aparecer cadastrado com susecco volte no mysql para conferir usando o 
mesmo comando SELECT * FROM formularios


