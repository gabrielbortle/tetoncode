// netlify/functions/send.js

require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, business, email, phone, goals, budgetMin, budgetMax, audience, timeline, technologies } = JSON.parse(event.body);

  const mailOptions = {
    from: `Contact Form <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
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

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error }),
    };
  }
};
