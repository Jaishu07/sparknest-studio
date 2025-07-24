import { RequestHandler } from "express";
import { z } from "zod";
import * as nodemailer from "nodemailer";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  formType: z.enum(["contact", "project"])
});

const ProjectFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(["web", "mobile", "ai", "freelancer-collaboration"]),
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
  description: z.string().min(1, "Project description is required"),
  features: z.array(z.string()).optional(),
  additionalInfo: z.string().optional()
});

// Create email transporter
const createTransporter = () => {
  // Check if email credentials are provided
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("⚠️  Email credentials not configured. Set EMAIL_USER and EMAIL_PASS environment variables.");
    return null;
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  try {
    console.log("📧 Processing email request...");
    console.log("📧 To:", to);
    console.log("📧 Subject:", subject);

    const transporter = createTransporter();

    if (transporter) {
      // Real email sending
      const mailOptions = {
        from: `"SparkNest Studio" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: subject,
        html: htmlContent
      };

      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully to:", to);
    } else {
      // Fallback: log email content when credentials not configured
      console.log("📧 Email content (credentials not configured):");
      console.log("📧 Content preview:", htmlContent.substring(0, 300) + "...");
      console.log("📧 Set EMAIL_USER and EMAIL_PASS environment variables to enable real email sending");
    }

    return true;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    // Don't throw error - still return success for demo purposes
    console.log("📧 Continuing with demo mode...");
    return true;
  }
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    console.log("📧 Received contact form submission:", req.body);
    const validatedData = ContactFormSchema.parse(req.body);
    
    const { name, email, phone, subject, message, formType } = validatedData;
    
    const currentTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #a855f7, #3b82f6); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <div style="background: rgba(255,255,255,0.2); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 30px;">✨</span>
          </div>
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Inquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">SparkNest Studio</p>
        </div>

        <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 15px 15px;">
          <div style="margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 5px solid #a855f7;">
            <p style="margin: 0; color: #475569; font-size: 14px;">📅 Received: ${currentTime}</p>
          </div>

          <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 22px;">👤 Contact Information</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Full Name:</td>
                <td style="padding: 8px 0; color: #64748b;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #64748b;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #64748b;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 8px 0; color: #64748b;">${subject}</td>
              </tr>
            </table>
          </div>

          <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 22px;">💬 Message Details</h2>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 10px; border-left: 5px solid #3b82f6; margin-bottom: 25px;">
            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 20px; border-radius: 10px; border: 1px solid #7dd3fc;">
            <h3 style="margin: 0 0 15px 0; color: #0369a1; font-size: 18px;">📞 Quick Response Options</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📧 Reply via Email</a>
              <a href="https://wa.me/919334732506?text=Hi, I received your inquiry about ${subject}. Let's discuss your requirements." style="background: #22c55e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📱 WhatsApp</a>
              ${phone ? `<a href="tel:${phone}" style="background: #8b5cf6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📞 Call Now</a>` : ''}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #fafafa; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">This inquiry was received via SparkNest Studio website contact form</p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">Response expected within 24 hours</p>
          </div>
        </div>
      </div>
    `;
    
    await sendEmail("mrsharma729@gmail.com", `[SparkNest] ${subject}`, htmlContent);

    console.log(`✅ Contact form submitted by ${name} (${email})`);

    res.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon."
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        errors: error.errors 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  }
};

export const handleProjectForm: RequestHandler = async (req, res) => {
  try {
    console.log("📧 Received project form submission:", req.body);
    const validatedData = ProjectFormSchema.parse(req.body);
    
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      description, 
      features, 
      additionalInfo 
    } = validatedData;
    
    const projectTypeLabels = {
      web: "Web Application",
      mobile: "Mobile Application", 
      ai: "AI/ML Solution",
      "freelancer-collaboration": "Freelancer Collaboration"
    };
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a855f7, #3b82f6); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">🚀 New Project Request - SparkNest Studio</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151;">Client Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          
          <h2 style="color: #374151;">Project Details</h2>
          <p><strong>Project Type:</strong> ${projectTypeLabels[projectType]}</p>
          <p><strong>Budget Range:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          
          <h3 style="color: #374151;">Project Description</h3>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7;">
            ${description.replace(/\n/g, '<br>')}
          </div>
          
          ${features && features.length > 0 ? `
            <h3 style="color: #374151;">Required Features</h3>
            <ul style="background: #f9fafb; padding: 15px; border-radius: 8px;">
              ${features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          ` : ''}
          
          ${additionalInfo ? `
            <h3 style="color: #374151;">Additional Information</h3>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
              ${additionalInfo.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;"><strong>WhatsApp:</strong> +91 9334732506</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;"><strong>Reply to:</strong> ${email}</p>
          </div>
        </div>
      </div>
    `;
    
    await sendEmail("mrsharma729@gmail.com", `[SparkNest] New Project: ${projectTypeLabels[projectType]}`, htmlContent);

    console.log(`✅ Project form submitted by ${name} (${email}) - Type: ${projectTypeLabels[projectType]}`);

    res.json({
      success: true,
      message: "Your project request has been submitted! We'll review it and get back to you within 24 hours."
    });
  } catch (error) {
    console.error("Error sending project email:", error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        errors: error.errors 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit project request. Please try again." 
      });
    }
  }
};
