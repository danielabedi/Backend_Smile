const { Sequelize } = require('sequelize');

// Connexion à la base PostgreSQL
const sequelize = new Sequelize('db_Smile', 'postgres', 'abedi247', {
    host: 'localhost',
    dialect: 'postgres',
  });

  async function dbconnect() {
    try {
      await sequelize.authenticate();
      console.log('La connexion à la base de données PostgreSQL a été établie avec succès !');
    } catch (error) {
      console.error('Impossible de se connecter à la base de données :', error);
    }
  }

module.exports = {
    sequelize,
    dbconnect,
};