import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  // Verify reCAPTCHA token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Store this in your .env file
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    // Verify the reCAPTCHA token with Google
    const captchaResponse = await axios.post(verificationUrl);
    if (!captchaResponse.data.success) {
      return res.status(400).json({ success: false, message: 'Captcha validation failed' });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send the email after captcha verification
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "dsantos4148@gmail.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent:", info);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
