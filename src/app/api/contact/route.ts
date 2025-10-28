import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, company, message } = data;

  console.log(data);

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Setup nodemailer transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true, // use SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Farracon Precast" <info@farraconprecast.com>`,
    to: "info@farraconprecast.com", // Set the Reply-To header to the user's email
    subject: `Contact Form: ${name} (${company || "-"})`,
    text: `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPerusahaan: ${company}\nPesan: ${message}`,
    html: `<p><b>Nama:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telepon:</b> ${phone}</p><p><b>Perusahaan:</b> ${company}</p><p><b>Pesan:</b> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("error sending contact form email:");
    console.log(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
