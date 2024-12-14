const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static Files (CSS, JS, Images)
app.use(express.static('public'));

// Email Functionality
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider (e.g., Gmail)
  auth: {
    user: process.env.EMAIL, // Your Gmail ID (from .env)
    pass: process.env.EMAIL_PASSWORD, // Your Gmail Password or App Password (from .env)
  },
});

// Routes

// Send Message Route
app.post('/send-message', (req, res) => {
  const { input1, input2, input3, input4, input5 } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: input3, // Recipient email from form
    subject: 'Thank you for contacting us!',
    text: `Hello ${input1} ${input2},\n\nYour message has been received. We will get back to you soon!\n\nMessage: ${input5}\n\nThank you,\nSupport Team`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Email error:', err);
      return res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send('Message sent successfully!');
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
