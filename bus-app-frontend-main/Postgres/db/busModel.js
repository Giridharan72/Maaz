const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConection'); // Adjust the path if necessary

const Bus = sequelize.define('Bus', {
  busId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dates: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Changed to ARRAY of STRING to store dates only
    allowNull: true,
    defaultValue: []
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('available', 'unavailable', 'maintenance'),
    defaultValue: 'available',
  }
});

sequelize.sync()
  .then(() => console.log('Bus table has been synced'))
  .catch(err => console.error('Failed to sync Bus table:', err));

module.exports = { Bus };
