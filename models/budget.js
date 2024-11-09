"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    static associate(models) {
      // Budget belongs to User
      Budget.belongsTo(models.User, { foreignKey: "user_id" });
      // Budget belongs to Category
      Budget.belongsTo(models.Category, { foreignKey: "category_id" });
    }
  }

  Budget.init(
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Budget",
    }
  );

  return Budget;
};
