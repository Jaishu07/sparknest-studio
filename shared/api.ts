/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  formType: "contact" | "project";
}

/**
 * Project form data structure
 */
export interface ProjectFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: "web" | "mobile" | "ai" | "freelancer-collaboration";
  budget: string;
  timeline: string;
  description: string;
  features?: string[];
  additionalInfo?: string;
}

/**
 * Standard form response structure
 */
export interface FormResponse {
  success: boolean;
  message: string;
  errors?: any[];
}
