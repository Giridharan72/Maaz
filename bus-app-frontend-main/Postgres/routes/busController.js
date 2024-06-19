// const { Op } = require('sequelize');
// const { Bus } = require('../db/busModel'); // Adjust the path if necessary

// const getAvailableBuses = async (req, res) => {
//   const { from, to, date } = req.query;

//   if (!from || !to || !date) {
//     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
//   }

//   try {
//     const dateObj = new Date(date);

//     const availableBuses = await Bus.findAll({
//       where: {
//         from,
//         to,
//         dates: {
//           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
//         },
//         status: 'available'
//       }
//     });

//     if (availableBuses.length > 0) {
//       res.status(200).json(availableBuses);
//     } else {
//       res.status(404).json({ message: "No available buses found" });
//     }
//   } catch (err) {
//     console.error("Error while fetching available buses:", err);
//     res.status(500).json({ message: "Error while fetching available buses" });
//   }
// };

// const createBus = async (req, res) => {
//   const data = req.body;
//   try {
//     const newBus = await Bus.create(data);
//     res.status(201).json(newBus);
//   } catch (err) {
//     console.error("Error while creating bus:", err);
//     res.status(500).json({ message: "Error while creating bus" });
//   }
// };

// module.exports = { getAvailableBuses, createBus };

const { Op } = require('sequelize');
const { Bus } = require('../db/busModel'); // Adjust the path if necessary

const getAvailableBuses = async (req, res) => {
  const { from, to, date } = req.query;

  // Build the query conditions
  let conditions = {
    status: 'available'
  };

  if (from) {
    conditions.from = from;
  }
  if (to) {
    conditions.to = to;
  }
  if (date) {
    const dateObj = new Date(date);
    conditions.dates = {
      [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
    };
  }

  try {
    const availableBuses = await Bus.findAll({
      where: conditions
    });

    if (availableBuses.length > 0) {
      res.status(200).json(availableBuses);
    } else {
      res.status(404).json({ message: "No available buses found" });
    }
  } catch (err) {
    console.error("Error while fetching available buses:", err);
    res.status(500).json({ message: "Error while fetching available buses" });
  }
};

const createBus = async (req, res) => {
  const data = req.body;
  try {
    const newBus = await Bus.create(data);
    res.status(201).json(newBus);
  } catch (err) {
    console.error("Error while creating bus:", err);
    res.status(500).json({ message: "Error while creating bus" });
  }
};

module.exports = { getAvailableBuses, createBus };
