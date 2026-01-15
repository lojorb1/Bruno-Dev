
/**
 * Senior Software Engineer Portfolio Backend
 * Implementation: Node.js + Express + Nodemailer + reCAPTCHA v3
 */

// Browser guard: prevent execution in frontend environment
if (typeof window !== 'undefined') {
  console.warn('server.js is a Node.js script and should not be executed in the browser.');
} else {
  const express = require('express');
  const cors = require('cors');
  const nodemailer = require('nodemailer');
  const fetch = require('node-fetch'); // Standard for server-side requests in Node
  require('dotenv').config();

  const app = express();
  const PORT = process.env.PORT || 3001;

  const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://brunodev.eu',
    'https://www.brunodev.eu'
  ];

  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

  app.use(express.json());

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Error:', error);
    } else {
      console.log('Server is ready to send messages');
    }
  });

  /**
   * Helper to verify reCAPTCHA v3 token
   */
  async function verifyCaptcha(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'; // Use test secret if env not set
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
      method: 'POST'
    });
    const data = await response.json();
    return data;
  }

  app.post('/contact', async (req, res) => {
    const { name, email, message, captchaToken } = req.body;
    
    // 1. Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    // 2. Security: Bot Protection (reCAPTCHA)
    if (!captchaToken) {
      return res.status(403).json({ error: 'Security token is missing.' });
    }

    try {
      const captchaResult = await verifyCaptcha(captchaToken);
      
      // Check score (0.5 is usually safe for v3 contact forms)
      if (!captchaResult.success || captchaResult.score < 0.5 || captchaResult.action !== 'contact_submit') {
        console.warn(`Blocked suspicious request. Score: ${captchaResult.score}, Action: ${captchaResult.action}`);
        return res.status(403).json({ error: 'Verification failed. Request flagged as automated.' });
      }

      // 3. Email Processing
      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: 'contact@brunodev.eu',
        subject: `New Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
            <h2 style="color: #2563eb;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Bot Score:</strong> ${captchaResult.score}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      };
      
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully.' });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ error: 'Failed to process request.' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
