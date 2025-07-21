// services/emailService.js
const nodemailer = require('nodemailer');

// Configure email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email to me (notification)
const sendNotificationEmail = async (contactData) => {
  try {
    console.log('🔧 Creating email transporter...');
    const transporter = createTransporter();
    
    console.log('📧 Preparing notification email...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your email
      subject: '📧 New Contact Form Submission - Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <h2 style="text-align: center; margin-bottom: 30px;">🎉 New Contact Form Submission</h2>
          
          <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px);">
            <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${contactData.name}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${contactData.email}</p>
            <p style="margin: 10px 0;"><strong>💬 Message:</strong></p>
            <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; line-height: 1.6;">${contactData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="font-size: 14px; opacity: 0.8;">Received at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending notification email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Notification email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('❌ Error sending notification email:', error.message);
    console.error('❌ Full error:', error);
    throw error;
  }
};

// Send acknowledgment email to the contact
const sendAcknowledgmentEmail = async (contactData) => {
  try {
    console.log('🔧 Creating transporter for acknowledgment email...');
    const transporter = createTransporter();
    
    console.log('📧 Preparing acknowledgment email for:', contactData.email);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: '✅ Thank you for contacting Shailendra Shukla',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2>🙏 Thank You, ${contactData.name}!</h2>
            <p style="font-size: 18px; opacity: 0.9;">Your message has been received successfully</p>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px);">
            <p style="line-height: 1.6;">Hi ${contactData.name},</p>
            <p style="line-height: 1.6;">Thank you for reaching out to me through my portfolio website. I have received your message and I appreciate you taking the time to contact me.</p>
            
            <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-style: italic; opacity: 0.8;">Your message: "${contactData.message}"</p>
            </div>
            
            <p style="line-height: 1.6;"><strong>I will review your message and get back to you as soon as possible.</strong></p>
            <p style="line-height: 1.6;">In the meantime, feel free to connect with me on my social media platforms or check out my latest projects on GitHub.</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 16px; font-weight: bold;">Best regards,<br>Shailendra Shukla</p>
            <p style="font-size: 14px; opacity: 0.8;">Software Development Engineer | IIITian</p>
            <p style="font-size: 12px; opacity: 0.6;">This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending acknowledgment email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Acknowledgment email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('❌ Error sending acknowledgment email:', error.message);
    console.error('❌ Full error:', error);
    throw error;
  }
};

module.exports = {
  sendNotificationEmail,
  sendAcknowledgmentEmail,
};
