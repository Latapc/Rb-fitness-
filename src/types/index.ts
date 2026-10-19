export interface InquiryFormData {
  name: string;
  contact: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    contact?: string;
    message?: string;
  };
}
