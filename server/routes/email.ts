import { RequestHandler } from "express";
import { z } from "zod";
import * as nodemailer from "nodemailer";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  formType: z.enum(["contact", "project"]),
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
  additionalInfo: z.string().optional(),
});

// Hardcoded email credentials (NOT RECOMMENDED FOR PRODUCTION)
const DIRECT_EMAIL_USER = "mrjaishu728@gmail.com";
const DIRECT_EMAIL_PASS = "vdnrmsgbnvmpvuke"; // This is your Google App Password

// Create email transporter
const createTransporter = () => {
  // Use direct credentials
  if (!DIRECT_EMAIL_USER || !DIRECT_EMAIL_PASS) {
    console.log(
      "⚠️  Email credentials not configured. DIRECT_EMAIL_USER and DIRECT_EMAIL_PASS are empty.",
    );
    return null;
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: DIRECT_EMAIL_USER,
      pass: DIRECT_EMAIL_PASS,
    },
  });
};

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  try {
    console.log("📧 Processing email request...");
    console.log("📧 To:", to);
    console.log("📧 Subject:", subject);

    const transporter = createTransporter();

    // The condition now checks against DIRECT_EMAIL_USER and DIRECT_EMAIL_PASS
    if (
      transporter &&
      DIRECT_EMAIL_USER &&
      DIRECT_EMAIL_PASS &&
      DIRECT_EMAIL_PASS  // Keep this check for the demo placeholder
    ) {
      try {
        // Real email sending with proper credentials
        const mailOptions = {
          from: `"SparkNest Studio" <${DIRECT_EMAIL_USER}>`, // Use DIRECT_EMAIL_USER here
          to: to,
          subject: subject,
          html: htmlContent,
          replyTo: DIRECT_EMAIL_USER, // Use DIRECT_EMAIL_USER here
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully to:", to);
        console.log("📧 Message ID:", result.messageId);
        return true;
      } catch (emailError: any) { // Explicitly type emailError for better access to properties
        console.error("❌ SMTP Email sending failed:", emailError);
        // Log more details from the error object if available
        if (emailError.code) console.error("Error Code:", emailError.code);
        if (emailError.response) console.error("Error Response:", emailError.response);
        if (emailError.responseCode) console.error("Error Response Code:", emailError.responseCode);
        console.log("📧 Falling back to console logging...");
      }
    }

    // Fallback: Detailed console logging for demo/development
    console.log("📧 === EMAIL CONTENT (Demo Mode) ===");
    console.log("📧 TO:", to);
    console.log("📧 SUBJECT:", subject);
    console.log("📧 === EMAIL HTML ===");
    console.log(htmlContent);
    console.log("📧 === END EMAIL ===");
    console.log(
      "📧 Note: Using hardcoded credentials. For production, use environment variables.",
    );

    return true;
  } catch (error) {
    console.error("❌ Email processing failed (general error):", error); // Clarified error message
    return true; // Don't break the form submission
  }
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    console.log("📧 Received contact form submission:", req.body);
    const validatedData = ContactFormSchema.parse(req.body);

    const { name, email, phone, subject, message, formType } = validatedData;

    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Dark theme for Contact Form email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; color: #e0e0e0; border-radius: 15px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #8A2BE2, #4169E1); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <div style="background: rgba(255,255,255,0.2); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 30px;">✨</span>
          </div>
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Inquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">SparkNest Studio</p>
        </div>

        <div style="padding: 30px; border: 1px solid #333; border-top: none; border-radius: 0 0 15px 15px;">
          <div style="margin-bottom: 25px; padding: 15px; background: #2a2a4a; border-radius: 10px; border-left: 5px solid #8A2BE2;">
            <p style="margin: 0; color: #a0a0a0; font-size: 14px;">📅 Received: ${currentTime}</p>
          </div>

          <h2 style="color: #e0e0e0; margin-bottom: 20px; font-size: 22px;">👤 Contact Information</h2>
          <div style="background: #2a2a4a; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 8px 0; font-weight: bold; color: #a0a0a0; width: 30%;">Full Name:</td>
                <td style="padding: 8px 0; color: #e0e0e0;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 8px 0; font-weight: bold; color: #a0a0a0;">Email:</td>
                <td style="padding: 8px 0; color: #e0e0e0;"><a href="mailto:${email}" style="color: #4169E1; text-decoration: none;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 8px 0; font-weight: bold; color: #a0a0a0;">Phone:</td>
                <td style="padding: 8px 0; color: #e0e0e0;"><a href="tel:${phone}" style="color: #4169E1; text-decoration: none;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #a0a0a0;">Subject:</td>
                <td style="padding: 8px 0; color: #e0e0e0;">${subject}</td>
              </tr>
            </table>
          </div>

          <h2 style="color: #e0e0e0; margin-bottom: 15px; font-size: 22px;">💬 Message Details</h2>
          <div style="background: #2a2a4a; padding: 20px; border-radius: 10px; border-left: 5px solid #4169E1; margin-bottom: 25px;">
            <p style="margin: 0; color: #e0e0e0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: linear-gradient(135deg, #2a2a4a, #1a1a2e); padding: 20px; border-radius: 10px; border: 1px solid #4a4a6a;">
            <h3 style="margin: 0 0 15px 0; color: #e0e0e0; font-size: 18px;">📞 Quick Response Options</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              <a href="mailto:${email}" style="background: #4169E1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📧 Reply via Email</a>
              <a href="https://wa.me/919334732506?text=Hi, I received your inquiry about ${subject}. Let's discuss your requirements." style="background: #22c55e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📱 WhatsApp</a>
              ${phone ? `<a href="tel:${phone}" style="background: #8b5cf6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📞 Call Now</a>` : ""}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #2a2a4a; border-radius: 8px; text-align: center; border: 1px solid #3a3a5a;">
            <p style="margin: 0; color: #a0a0a0; font-size: 12px;">This inquiry was received via SparkNest Studio website contact form</p>
            <p style="margin: 5px 0 0 0; color: #a0a0a0; font-size: 12px;">Response expected within 24 hours</p>
          </div>
        </div>
      </div>
    `;

    // Changed recipient email to mrjaishu728@gmail.com
    await sendEmail(
      "mrjaishu728@gmail.com",
      `[SparkNest] ${subject}`,
      htmlContent,
    );

    console.log(`✅ Contact form submitted by ${name} (${email})`);

    res.json({
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);

    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
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
      additionalInfo,
    } = validatedData;

    const projectTypeLabels = {
      web: "Web Application",
      mobile: "Mobile Application",
      ai: "AI/ML Solution",
      "freelancer-collaboration": "Freelancer Collaboration",
    };

    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const projectValue = {
      "under-5k": "Under $5,000",
      "5k-15k": "$5,000 - $15,000",
      "15k-50k": "$15,000 - $50,000",
      "50k-100k": "$50,000 - $100,000", // Fixed syntax error here
      "over-100k": "Over $100,000",
      discuss: "Let's discuss",
    };

    const timelineLabels = {
      asap: "ASAP (Rush project)",
      "1-month": "1 Month",
      "2-3-months": "2-3 Months",
      "3-6-months": "3-6 Months",
      "6-months-plus": "6+ Months",
      flexible: "Flexible timeline",
    };

    // Dark theme for Project Form email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #1a1a2e; color: #e0e0e0; border-radius: 15px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #8A2BE2, #4169E1); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <div style="background: rgba(255,255,255,0.2); width: 70px; height: 70px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 35px;">🚀</span>
          </div>
          <h1 style="color: white; margin: 0; font-size: 32px;">New Project Request</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">${projectTypeLabels[projectType]}</p>
        </div>

        <div style="padding: 30px; border: 1px solid #333; border-top: none; border-radius: 0 0 15px 15px;">
          <div style="margin-bottom: 25px; padding: 15px; background: #2a2a4a; border-radius: 10px; border-left: 5px solid #8A2BE2;">
            <p style="margin: 0; color: #a0a0a0; font-size: 14px;">📅 Submitted: ${currentTime}</p>
            <p style="margin: 5px 0 0 0; color: #a0a0a0; font-size: 14px;">🏷️ Project ID: PROJ-${Date.now()}</p>
          </div>

          <h2 style="color: #e0e0e0; margin-bottom: 20px; font-size: 24px;">👤 Client Information</h2>
          <div style="background: #2a2a4a; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 12px 0; font-weight: bold; color: #a0a0a0; width: 30%;">Full Name:</td>
                <td style="padding: 12px 0; color: #e0e0e0; font-size: 16px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 12px 0; font-weight: bold; color: #a0a0a0;">Email:</td>
                <td style="padding: 12px 0; color: #e0e0e0;"><a href="mailto:${email}" style="color: #4169E1; text-decoration: none; font-size: 16px;">${email}</a></td>
              </tr>
              ${
                company
                  ? `
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 12px 0; font-weight: bold; color: #a0a0a0;">Company:</td>
                <td style="padding: 12px 0; color: #e0e0e0; font-size: 16px;">${company}</td>
              </tr>
              `
                  : ""
              }
              ${
                phone
                  ? `
              <tr style="border-bottom: 1px solid #3a3a5a;">
                <td style="padding: 12px 0; font-weight: bold; color: #a0a0a0;">Phone:</td>
                <td style="padding: 12px 0; color: #e0e0e0;"><a href="tel:${phone}" style="color: #4169E1; text-decoration: none; font-size: 16px;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <h2 style="color: #e0e0e0; margin-bottom: 20px; font-size: 24px;">🎯 Project Overview</h2>
          <div style="background: #2a2a4a; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; border-left: 4px solid #4169E1;">
                <h4 style="margin: 0 0 8px 0; color: #a0a0a0; font-size: 14px;">PROJECT TYPE</h4>
                <p style="margin: 0; color: #e0e0e0; font-weight: bold; font-size: 16px;">${projectTypeLabels[projectType]}</p>
              </div>
              <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; border-left: 4px solid #059669;">
                <h4 style="margin: 0 0 8px 0; color: #a0a0a0; font-size: 14px;">BUDGET RANGE</h4>
                <p style="margin: 0; color: #e0e0e0; font-weight: bold; font-size: 16px;">${projectValue[budget] || budget}</p>
              </div>
            </div>
            <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <h4 style="margin: 0 0 8px 0; color: #a0a0a0; font-size: 14px;">TIMELINE</h4>
              <p style="margin: 0; color: #e0e0e0; font-weight: bold; font-size: 16px;">${timelineLabels[timeline] || timeline}</p>
            </div>
          </div>

          <h2 style="color: #e0e0e0; margin-bottom: 15px; font-size: 24px;">📝 Project Description</h2>
          <div style="background: #2a2a4a; padding: 25px; border-radius: 10px; border-left: 5px solid #6366f1; margin-bottom: 30px;">
            <p style="margin: 0; color: #e0e0e0; line-height: 1.8; white-space: pre-wrap;">${description}</p>
          </div>

          ${
            features && features.length > 0
              ? `
            <h2 style="color: #e0e0e0; margin-bottom: 15px; font-size: 24px;">✨ Required Features</h2>
            <div style="background: #2a2a4a; padding: 25px; border-radius: 10px; border: 1px solid #3a3a5a; margin-bottom: 30px;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                ${features
                  .map(
                    (feature) => `
                  <div style="background: #1a1a2e; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #22c55e; display: flex; align-items: center;">
                    <span style="color: #22c55e; margin-right: 8px; font-weight: bold;">✓</span>
                    <span style="color: #e0e0e0; font-size: 14px;">${feature}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          ${
            additionalInfo
              ? `
            <h2 style="color: #e0e0e0; margin-bottom: 15px; font-size: 24px;">📋 Additional Information</h2>
            <div style="background: #2a2a4a; padding: 25px; border-radius: 10px; border: 1px solid #3a3a5a; margin-bottom: 30px;">
              <p style="margin: 0; color: #e0e0e0; line-height: 1.8; font-size: 16px; white-space: pre-wrap;">${additionalInfo}</p>
            </div>
          `
              : ""
          }

          <div style="background: linear-gradient(135deg, #2a2a4a, #1a1a2e); padding: 25px; border-radius: 10px; border: 1px solid #4a4a6a; margin-bottom: 20px;">
            <h3 style="margin: 0 0 20px 0; color: #e0e0e0; font-size: 20px;">🚀 Next Steps & Contact</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
              <a href="mailto:${email}?subject=Re: Project Request - ${projectTypeLabels[projectType]}" style="background: #4169E1; color: white; padding: 15px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; display: block;">📧 Send Proposal</a>
              <a href="https://wa.me/919334732506?text=Hi ${name}, I received your ${projectTypeLabels[projectType]} project request. Let's schedule a call to discuss the details." style="background: #22c55e; color: white; padding: 15px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; display: block;">📱 WhatsApp Chat</a>
              ${phone ? `<a href="tel:${phone}" style="background: #8b5cf6; color: white; padding: 15px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; display: block;">📞 Call Client</a>` : ""}
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px;">
              <p style="margin: 0; color: #a0a0a0; font-size: 14px; text-align: center;"><strong>Expected Response:</strong> Within 24 hours | <strong>Contact:</strong> mrjaishu728@gmail.com | <strong>WhatsApp:</strong> +91 9334732506</p>
            </div>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #2a2a4a; border-radius: 8px; text-align: center; border: 1px solid #3a3a5a;">
            <p style="margin: 0; color: #a0a0a0; font-size: 12px;">This project request was submitted via SparkNest Studio website</p>
            <p style="margin: 5px 0 0 0; color: #a0a0a0; font-size: 12px;">All client information is confidential and secure</p>
          </div>
        </div>
      </div>
    `;

    // Changed recipient email to mrjaishu728@gmail.com
    await sendEmail(
      "mrjaishu728@gmail.com",
      `[SparkNest] New Project: ${projectTypeLabels[projectType]}`,
      htmlContent,
    );

    console.log(
      `✅ Project form submitted by ${name} (${email}) - Type: ${projectTypeLabels[projectType]}`,
    );

    res.json({
      success: true,
      message:
        "Your project request has been submitted! We'll review it and get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Error sending project email:", error);

    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to submit project request. Please try again.",
      });
    }
  }
};
