const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const { Booking } = require('./bookingModel');
const { Passenger } = require('./passenger');
const { Ticket } = require('./ticket');
const { BookingDetails } = require('./bookingDetails');

// Define associations
Booking.hasMany(Passenger, { foreignKey: 'bookingId' });
Passenger.belongsTo(Booking, { foreignKey: 'bookingId' });

Booking.hasMany(Ticket, { foreignKey: 'bookingId' });
Ticket.belongsTo(Booking, { foreignKey: 'bookingId' });

Booking.hasOne(BookingDetails, { foreignKey: 'bookingId' });
BookingDetails.belongsTo(Booking, { foreignKey: 'bookingId' });

module.exports = { Booking, Passenger, Ticket, BookingDetails };