const express = require('express');

//Conexao com o banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('formularios', 'root', 'thi020275',{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}