import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function sendEmail({ name, email, message, recaptchaToken }) {
  if (!name || !email || !message || !recaptchaToken) {
    return { success: false, message: "All fields are required." };
  }

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const recaptchaResponse = await axios.post(verificationUrl);

    if (!recaptchaResponse.data.success) {
      return { success: false, message: "Captcha validation failed.", errorCodes: recaptchaResponse.data["error-codes"] };
    }
  } catch (error) {
    return { success: false, message: "Failed to validate reCAPTCHA.", error: error.message };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "dsantos4148@gmail.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to send email.", error: error.message };
  }
}
