module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    maker: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.REAL,
    selling_price: DataTypes.REAL,
  }, {});

  products.associate = (models) => {
    products.belongsTo(models.staffs, {
      foreignKey: 'added_by',
      onDelete: 'CASCADE',
    });
  };
  return products;
};
