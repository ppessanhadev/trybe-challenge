module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    telphone_number: DataTypes.STRING,
    celphone_number: DataTypes.STRING,
  }, { timestamps: false, tableName: 'users' });

  User.associate = (models) => {
    User.hasOne(models.address, { foreignKey: 'user_id' });
  };

  return User;
};