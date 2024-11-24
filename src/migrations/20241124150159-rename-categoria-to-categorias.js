'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('categoria', 'categorias');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('categorias', 'categoria');
  }
};
