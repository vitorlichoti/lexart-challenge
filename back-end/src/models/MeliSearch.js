module.exports = (sequelize, DataTypes) => {
  const MeliSearch = sequelize.define('MeliSearch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textSearch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    results: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'meli_search',
    });

  return MeliSearch;
};