// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Users',
    underscored: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'id', as: 'blogpost' });
  };
  
  return User;
};
