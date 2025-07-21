// controllers/contactController.js
const Contact = require('../models/contact');
const { sendNotificationEmail, sendAcknowledgmentEmail } = require('../services/emailService');

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
    
    // Save to database
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    
    console.log('✅ Contact saved successfully:', savedContact._id);

    // Send emails
    try {
      console.log('� Environment variables check:');
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set (length: ' + process.env.EMAIL_PASS.length + ')' : 'Not set');
      
      console.log('�📧 Sending notification email...');
      const notificationResult = await sendNotificationEmail({ name, email, message });
      console.log('✅ Notification email result:', notificationResult?.messageId);
      
      console.log('📧 Sending acknowledgment email...');
      const acknowledgmentResult = await sendAcknowledgmentEmail({ name, email, message });
      console.log('✅ Acknowledgment email result:', acknowledgmentResult?.messageId);
      
      console.log('✅ Both emails sent successfully');
    } catch (emailError) {
      console.error('❌ Email service error:', emailError.message);
      console.error('❌ Full email error:', emailError);
      // Don't fail the entire request if emails fail
    }

    res.status(200).json({ 
      message: 'Message submitted successfully. You will receive a confirmation email shortly.',
      id: savedContact._id 
    });
  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    res.status(500).json({ message: 'Failed to submit message.', error: error.message });
  }
};

module.exports = { submitContactForm };
