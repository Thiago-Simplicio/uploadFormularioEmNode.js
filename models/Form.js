const db = require('./db');


const form = db.sequelize.define('formularios',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    }
})

//form.sync({force: true});

module.exports = form;