# Email Setup Instructions for SparkNest Studio

## Current Status

✅ Email forms are working and will log to console  
⚠️ To send real emails, configure email credentials

## Quick Setup (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:

   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate app password for "Mail"
   - Copy the 16-character password

3. **Set Environment Variables**:

   ```bash
   EMAIL_USER=mrsharma729@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

4. **Restart the development server**

## Alternative Email Providers

### SendGrid (Recommended for Production)

```javascript
// Install: npm install @sendgrid/mail
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Mailgun

```javascript
// Install: npm install mailgun-js
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});
```

## Testing Email Functionality

1. **Submit Contact Form**: Visit `/contact` and fill out the form
2. **Submit Project Form**: Visit `/start-project` and fill out the form
3. **Check Console**: Look for email logs in the terminal
4. **Check Email**: If configured, check mrsharma729@gmail.com

## Current Email Features

✅ Contact form with validation  
✅ Project form with detailed requirements  
✅ Professional HTML email templates  
✅ WhatsApp integration (+91 9334732506)  
✅ Error handling and user feedback  
✅ Console logging for debugging

## Email Template Includes

- Professional SparkNest Studio branding
- Gradient headers with company logo
- Contact details and form data
- WhatsApp number for quick response
- Responsive HTML design

## Production Deployment

For production, use environment variables:

- `EMAIL_USER`: Your email address
- `EMAIL_PASS`: Your email password or app password
- Consider using dedicated email services like SendGrid or Mailgun

## Current Configuration

The email system is set to send to: **mrsharma729@gmail.com**  
WhatsApp contact: **+91 9334732506**

All forms are fully functional and will provide user feedback whether emails are sent or logged.
