import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // optional but important check
    await transporter.verify();
    console.log("SMTP connection successful");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    return info;
  } catch (error) {
    console.log("❌ Error sending email:", error);

    // important: error ko upar bhejo (debug ke liye)
    throw error;
  }
};

export default sendEmail;
