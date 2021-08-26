module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Auth.associate = (models) => {
    // associations can be defined here
  };
  return Auth;
};
