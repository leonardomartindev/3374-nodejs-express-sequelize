'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('curso', 'cursos');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('cursos', 'curso');
  }
};
