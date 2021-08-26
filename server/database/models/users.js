module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    guid: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  Users.associate = (models) => {
    // associations can be defined here
  };
  return Users;
};
