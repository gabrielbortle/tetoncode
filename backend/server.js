require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;  // Using environment variable for flexibility

// Middleware: CORS configuration for local and production
const allowedOrigins = [
  'http://localhost:3000', // Local development URL
  'https://tetoncode.com', // Your live (production) domain
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from the listed origins
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject request
    }
  }
}));

app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Your email (e.g., contact@tetoncode.com)
    pass: process.env.EMAIL_PASS, // Your email password (use environment variables)
  },
});

// Route to handle form submission
app.post('/send', (req, res) => {
  const { name, business, email, phone, goals, budgetMin, budgetMax, audience, timeline, technologies } = req.body;

  const mailOptions = {
    from: `Contact Form <${process.env.EMAIL_USER}>`, // Must match the authenticated email
    to: process.env.EMAIL_USER, // Your email address to receive the message
    replyTo: email, // User's email for replies
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Business Name: ${business}
      Email: ${email}
      Phone: ${phone}
      Goals: ${goals}
      Budget: $${budgetMin} - $${budgetMax}
      Target Audience: ${audience}
      Timeline: ${timeline}
      Technologies: ${technologies}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully.');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
