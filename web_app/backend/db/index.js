
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("industry", "root", "0000", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then((r) => console.log("connected"))
  .catch((err) => console.log(err));

//  Sync the models with the database
// execute one time and then comment this code (after Database and tables created!)
//  sequelize
//  sequelize.sync({ force: false ,alter: true})
//  .then(() => {
//    console.log("Database and tables created!");
//  })
//  .catch((err) => {
//    console.error("Error syncing database:", err);
//  });





module.exports = sequelize;