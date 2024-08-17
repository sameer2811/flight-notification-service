'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [NOTIF_STATUS_ENUM.BOOKED, NOTIF_STATUS_ENUM.CANCELLED, NOTIF_STATUS_ENUM.PENDING],
      defaultValue: NOTIF_STATUS_ENUM.PENDING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};