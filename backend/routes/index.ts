import { Router } from "express";
import { contactLimiter, apiLimiter } from "../middleware/rateLimit";
import { createContact, countContact } from "../controllers/contactController";
import { isDbReady } from "../config/db";

const router = Router();

router.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    db: isDbReady() ? "connected" : "disconnected",
    time: new Date().toISOString(),
  });
});

router.use("/api", apiLimiter);

// Contact
router.post("/api/contact", contactLimiter, createContact);
router.get("/api/contact", countContact);

export default router;
