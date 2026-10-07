import type { Request, Response } from "express";
import { isDbReady } from "../config/db";
import { ContactInquiry } from "../models/ContactInquiry";
import { sendInquiryEmail } from "../services/mailer";
import { validateContact } from "../utils/validate";

/** POST /api/contact */
export async function createContact(req: Request, res: Response) {
  const { payload, issues } = validateContact((req.body ?? {}) as Record<string, unknown>);
  if (issues.length > 0) {
    console.warn("[contact] ⚠️ Validation failed:", issues, "| Received body:", req.body);
    return res.status(400).json({ message: issues[0].message, issues });
  }

  try {
    if (isDbReady()) {
      const saved = await ContactInquiry.create(payload);
      console.log(`[contact] ✅ Saved inquiry to MongoDB Atlas | Collection: "${ContactInquiry.collection.name}" | ID: ${saved._id}`);
    } else {
      console.warn("[contact] ⚠️ MongoDB is not connected; inquiry processed without database persistence.");
    }

    // Notification email is fire-and-forget — never fails the request.
    void sendInquiryEmail(payload);

    return res.status(201).json({
      ok: true,
      message: "Your inquiry has been received. Our team will review it and get back to you.",
    });
  } catch (err) {
    console.error("[contact] Failed to store inquiry:", err instanceof Error ? err.message : err);
    return res.status(500).json({
      message: "We couldn't save your inquiry. Please try again in a moment.",
    });
  }
}

/** GET /api/contact — Health / status peek */
export async function countContact(_req: Request, res: Response) {
  try {
    if (isDbReady()) {
      const count = await ContactInquiry.countDocuments();
      return res.json({ ok: true, count, source: "mongo" });
    }
    return res.json({ ok: true, count: 0, source: "disconnected" });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Database inquiry check failed" });
  }
}
