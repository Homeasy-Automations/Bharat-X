export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  website?: string;
  inquiryType: string;
  company?: string;
  message: string;
}

export type InquiryStatus = "new" | "contacted" | "closed";
