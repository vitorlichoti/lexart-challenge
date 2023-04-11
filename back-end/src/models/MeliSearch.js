module.exports = (sequelize, DataTypes) => {
  const MeliSearch = sequelize.define('MeliSearch', {
    id: {
      type: DataTypes.INTEGER, primaryKey: true
    },
    category: DataTypes.STRING,
    textSearch: DataTypes.STRING,
    results: DataTypes.JSON,
  },
    {
      timestamps: false,
      underscored: true,
    });

  return MeliSearch;
};