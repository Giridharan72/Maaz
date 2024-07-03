


// const express = require('express');
// const { Register } = require('../db/registerModel');
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const { transporter, mailOptions } = require('./nodemailerConfig');

// const registerRoute = express.Router();

// registerRoute.get("/", (req, res) => {
//   res.send("register page");
// });



// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'phoneNumber', 'password']
//     });

//     if (existingUser) {
//       res.status(409).send("User already registered");
//       return;
//     }

//     bcrypt.hash(data.password, 10, async (err, hash) => {
//       if (err) {
//         res.status(500).send("Error in registering");
//         return;
//       }

//       const otp = Math.floor(100000 + Math.random() * 900000);

//       await Register.create({
//         ...data,
//         registerId: uuidv4(),
//         password: hash,
//         otp,
//         status: 'pending'
//       });

//       const emailOptions = {
//         ...mailOptions,
//         to: data.email,
//         text: `Your OTP for account verification is: ${otp}`,
//       };

//       try {
//         await transporter.sendMail(emailOptions);
//         res.send("User registered successfully. OTP sent to email.");
//       } catch (error) {
//         console.error('Error sending OTP email:', error);
//         res.status(500).send("User registered but failed to send OTP email.");
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error while user registration");
//   }
// });

// // New route to get all registered users
// registerRoute.get("/all", async (req, res) => {
//   try {
//     const users = await Register.findAll({
//       attributes: ['userName', 'email', 'phoneNumber', 'status']
//     });
//     res.json(users);
//   } catch (err) {
//     console.error('Error retrieving users:', err);
//     res.status(500).send("Error retrieving users");
//   }
// });


// module.exports = registerRoute;

// registerRoute.js

const express = require('express');
const { Register } = require('../db/registerModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { transporter, mailOptions } = require('./nodemailerConfig');

const registerRoute = express.Router();

registerRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const existingUser = await Register.findOne({
      where: { email: data.email },
      attributes: ['registerId', 'userName', 'email', 'phoneNumber', 'password', 'role']
    });

    if (existingUser) {
      return res.status(409).send("User already registered");
    }

    const hash = await bcrypt.hash(data.password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000);

    const newUser = await Register.create({
      ...data,
      registerId: uuidv4(),
      password: hash,
      otp,
      status: 'pending',
      role: 'user',  // Default role
    });

    const tokenPayload = {
      userId: newUser.registerId,
      role: newUser.role,
    };

    const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

    const emailOptions = {
      ...mailOptions,
      to: data.email,
      text: `Your OTP for account verification is: ${otp}`,
    };

    await transporter.sendMail(emailOptions);

    res.json({ message: "User registered successfully. OTP sent to email.", token });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send("Error while user registration");
  }
});

module.exports = registerRoute;
