"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Category has many Transactions
      Category.hasMany(models.Transaction, { foreignKey: "category_id" });
      // Category has many Budgets
      Category.hasMany(models.Budget, { foreignKey: "category_id" });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
