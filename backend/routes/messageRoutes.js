const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messageControllers');
const { submitContactForm } = require('../controllers/contactController');


router.post('/send', sendMessage);
router.post('/save', submitContactForm);

module.exports = router;
