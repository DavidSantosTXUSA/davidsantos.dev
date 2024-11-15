import nodemailer from 'nodemailer';

export default async function sendEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "dsantos4148@gmail.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
