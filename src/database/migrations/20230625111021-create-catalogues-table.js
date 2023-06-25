'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Catalogues', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      API: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      Auth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      HTTPS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cors: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Catalogues');
  }
};
