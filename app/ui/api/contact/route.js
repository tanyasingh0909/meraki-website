// app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "tanyasingh090904@gmail.com",
      subject: subject || "New Contact Form Message",
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ Email Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
