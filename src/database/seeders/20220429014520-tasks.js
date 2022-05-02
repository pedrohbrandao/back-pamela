'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',
    [{
        Task: 'Fazer Atividade',
        Day: new Date(),
        isActive: true,
      },
      {
        Task: 'Fazer Trabalho',
        Day: new Date(),
        isActive: true,
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
