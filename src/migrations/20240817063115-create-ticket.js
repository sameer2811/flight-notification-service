'use strict';

const {
  NOTIF_STATUS_ENUM
} = require('../utils/common/enums');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipientEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: [NOTIF_STATUS_ENUM.BOOKED, NOTIF_STATUS_ENUM.CANCELLED, NOTIF_STATUS_ENUM.PENDING],
        defaultValue: NOTIF_STATUS_ENUM.PENDING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};