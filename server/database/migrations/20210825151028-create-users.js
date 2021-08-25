module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    guid: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    errors: {
      type: new Sequelize.JSON(),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
