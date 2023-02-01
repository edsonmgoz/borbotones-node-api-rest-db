import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "productsdb", // db name,
  "postgres", // username
  "secret", // password
  {
    host: "db",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
