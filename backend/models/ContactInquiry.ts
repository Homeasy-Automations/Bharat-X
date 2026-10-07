import mongoose from "mongoose";

/**
 * ContactInquiry (Section 31 schema).
 */
export const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, maxlength: 150 },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    organization: { type: String, trim: true, maxlength: 150, default: "" },
    website: { type: String, trim: true, maxlength: 300, default: "" },
    inquiryType: { type: String, required: true, trim: true, maxlength: 100 },
    company: { type: String, trim: true, maxlength: 120, default: "" },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true },
);

export const ContactInquiry =
  mongoose.models.ContactInquiry ??
  mongoose.model("ContactInquiry", contactInquirySchema);
