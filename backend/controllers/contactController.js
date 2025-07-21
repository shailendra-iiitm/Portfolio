// controllers/contactController.js
const Contact = require('../models/contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: 'Message submitted successfully.' });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ message: 'Failed to submit message.' });
  }
};

module.exports = { submitContactForm };
