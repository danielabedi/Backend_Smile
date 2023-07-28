const express = require('express');
const { sequelize, dbconnect } = require('./config/db');


const app = express();

async function init() {
    try {
       await sequelize.sync();
       await dbconnect();
       app.listen(3500, () => {
        console.log('le serveur est en écoute sur le port 3500');
       });
    } catch (error) {
        console.log('erreur lors du démarrage du serveur :', error);
    }
}
init();

module.exports = app;