/* eslint-disable no-param-reassign */

import { hashSync, genSaltSync } from 'bcrypt';

export default (sequelize, DataTypes) => {
  const salt = genSaltSync(10);

  const staffs = sequelize.define('staffs', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    department: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {});
  staffs.associate = (models) => {
    // associations can be defined here
    staffs.associate = (models.products, {
      foreignKey: 'added_by',
    });
  };
  staffs.beforeCreate((staff) => {
    staff.password = hashSync(staff.password, salt);
  });
  return staffs;
};
