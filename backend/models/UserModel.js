import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  try {
    await db.sync(); // Menggunakan `alter: true` untuk menyesuaikan perubahan model
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Failed to sync database:", error);
  }
})();
