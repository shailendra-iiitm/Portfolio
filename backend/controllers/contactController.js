// controllers/contactController.js
const Contact = require('../models/contact');

const submitContactForm = async (req, res) => {
  try {
    console.log('📩 Contact form submission received:', req.body);
    
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({ message: 'All fields are required.' });
    }

    console.log('✅ Creating new contact:', { name, email, messageLength: message.length });
    
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    
    console.log('✅ Contact saved successfully:', savedContact._id);

    res.status(200).json({ 
      message: 'Message submitted successfully.',
      id: savedContact._id 
    });
  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    res.status(500).json({ message: 'Failed to submit message.', error: error.message });
  }
};

module.exports = { submitContactForm };
