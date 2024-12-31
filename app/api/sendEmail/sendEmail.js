import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function sendEmail({ name, email, message, recaptchaToken }) {
  console.log("Received data:", { name, email, message, recaptchaToken });

  if (!name || !email || !message || !recaptchaToken) {
    console.error("Validation failed: Missing required fields.");
    return { success: false, message: "All fields are required." };
  }

  try {
    console.log("Validating reCAPTCHA...");
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const recaptchaResponse = await axios.post(verificationUrl);

    console.log("reCAPTCHA response:", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      console.error("reCAPTCHA validation failed:", recaptchaResponse.data["error-codes"]);
      return { success: false, message: "Captcha validation failed.", errorCodes: recaptchaResponse.data["error-codes"] };
    }
  } catch (error) {
    console.error("Error during reCAPTCHA validation:", error.message);
    return { success: false, message: "Failed to validate reCAPTCHA.", error: error.message };
  }
  try {
    console.log("Configuring Nodemailer...");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // Use secure for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log("Sending email...");
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "dsantos4148@gmail.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent successfully:", info);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error.message);
    return { success: false, message: "Failed to send email.", error: error.message };
  }
}
