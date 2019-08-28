module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('staffs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lastname: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    department: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface /* , Sequelize */ => queryInterface.dropTable('staffs'),
};
