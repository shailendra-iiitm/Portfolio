// ✅ This works in CommonJS
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message || !name) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Admin Mail (Your mail is from .env)
    const mailToAdmin = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'New Contact Message Received',
      html: `
        <h3>New Message from Your Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Confirmation Email to User
    const mailToUser = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for contacting me! Here's a copy of your message:</p>
        <blockquote>${message}</blockquote>
        <p>I'll respond shortly.</p>
        <br/>
        <p>Cheers,<br/>[Your Name]</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailToAdmin),
      transporter.sendMail(mailToUser),
    ]);

    res.status(200).json({ message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ error: 'Failed to send emails.' });
  }
};

module.exports = {
    sendMessage,
  };