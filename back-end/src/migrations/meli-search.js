'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meli_search', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      textSearch: {
        allowNull: false,
        field: 'text_search',
        type: Sequelize.STRING
      },
      results: {
        allowNull: false,
        type: Sequelize.JSON
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('meli_search');
  }
};
