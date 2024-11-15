import nodemailer from 'nodemailer';

export default async function sendEmail({ name, email, message }) {
  // Log environment variables to verify they are being read correctly
  console.log("SMTP_USER:", process.env.SMTP_USER);
  console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD);
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);

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
    console.log("Email sent:", info); // Log success information
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error); // Log detailed error
    return { success: false, error: error.message };
  }
}
