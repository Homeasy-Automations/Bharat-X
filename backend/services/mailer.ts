import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

/** Optional SMTP notification (Nodemailer). No-op when not configured. */
export function initMailer(): void {
  const host = process.env.MAIL_HOST;
  if (!host) {
    console.log("[mail] SMTP not configured (MAIL_HOST is empty). Inquiry emails will be skipped.");
    return;
  }
  const port = Number(process.env.MAIL_PORT ?? 587);
  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: process.env.MAIL_USER
      ? { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD }
      : undefined,
  });
  console.log(`[mail] ✅ SMTP mailer configured (${host}:${port})`);
}

export async function sendInquiryEmail(inq: {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: string;
  company?: string;
  message: string;
}): Promise<void> {
  if (!transporter) {
    console.log("[mail] Notice: Mailer skipped (SMTP not configured in .env).");
    return;
  }
  if (!process.env.MAIL_TO) {
    console.log("[mail] Notice: Mailer skipped (MAIL_TO recipient address not set).");
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM ?? "BharatX Group <no-reply@bharatxgroup.local>",
      to: process.env.MAIL_TO,
      subject: `New Inquiry: ${inq.name} - ${inq.inquiryType}`,
      text: [
        `New Contact Inquiry Received via BharatX Group Website`,
        `======================================================`,
        ``,
        `Name: ${inq.name}`,
        `Email: ${inq.email}`,
        `Phone: ${inq.phone || "—"}`,
        `Organization: ${inq.organization || "—"}`,
        `Inquiry Type: ${inq.inquiryType}`,
        `Topic: ${inq.company || "General"}`,
        ``,
        `Message:`,
        inq.message,
      ].join("\n"),
    });
    console.log(`[mail] ✅ Inquiry email notification sent successfully (ID: ${info.messageId})`);
  } catch (err) {
    console.warn("[mail] ⚠️ Failed to send notification email:", err instanceof Error ? err.message : err);
  }
}

