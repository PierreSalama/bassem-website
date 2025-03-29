// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Expect the body to have "fields" (array) and "subject" (string)
    const { fields, subject } = await request.json();

    // Build an HTML table for the email body with a dynamic subject heading.
    let emailBody = `<h1>${subject}</h1><table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">`;
    fields.forEach((field: { label: string; value: string }) => {
      emailBody += `<tr><td><strong>${field.label}</strong></td><td>${field.value || '-'}</td></tr>`;
    });
    emailBody += `</table>`;

    // Configure the Nodemailer transporter (using Gmail in this example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options: subject now comes from the request payload.
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: emailBody,
    };

    // Send the email.
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
