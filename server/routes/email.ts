import { RequestHandler } from "express";
import { z } from "zod";

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

// This is a mock email service - in production, you'd use a real email service
// like SendGrid, Mailgun, or AWS SES
const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  // Mock email sending - log the email content
  console.log("📧 Email would be sent to:", to);
  console.log("📧 Subject:", subject);
  console.log("📧 Content:", htmlContent);
  
  // In production, replace this with actual email service
  // Example with SendGrid:
  // const msg = {
  //   to,
  //   from: 'noreply@sparknest.studio',
  //   subject,
  //   html: htmlContent,
  // };
  // await sgMail.send(msg);
  
  return true;
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const validatedData = ContactFormSchema.parse(req.body);
    
    const { name, email, phone, subject, message, formType } = validatedData;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a855f7, #3b82f6); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">🚀 New ${formType === 'contact' ? 'Contact' : 'Project'} Inquiry - SparkNest Studio</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151;">Contact Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          
          <h2 style="color: #374151;">Message</h2>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;"><strong>WhatsApp:</strong> +91 9334732506</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;"><strong>Reply to:</strong> ${email}</p>
          </div>
        </div>
      </div>
    `;
    
    await sendEmail("mrsharma729@gmail.com", `[SparkNest] ${subject}`, htmlContent);
    
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
