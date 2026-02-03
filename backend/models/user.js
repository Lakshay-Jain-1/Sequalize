import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "Users",
    timestamps: true,
  }
);
