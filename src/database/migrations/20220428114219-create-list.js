'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      Task: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Day: {
        type: Sequelize.DATE,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    }, {
      timestamps: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};