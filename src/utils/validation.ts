import type { InquiryFormData, ValidationResult } from '../types/index.ts';

/**
 * Validates the visitor inquiry form data.
 */
export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedContact = data.contact.trim();
  if (!trimmedContact) {
    errors.contact = 'Please enter your phone number or email.';
  } else if (trimmedContact.length < 5) {
    errors.contact = 'Please provide a valid phone number or email address.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter a brief message or question.';
  } else if (trimmedMessage.length < 5) {
    errors.message = 'Message must be at least 5 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats Google Maps query link if needed or verifies URL integrity.
 */
export function getDirectionsUrl(): string {
  return 'https://maps.app.goo.gl/As652kHdXjzdMuYWA';
}

/**
 * Normalizes text content for safe display.
 */
export function sanitizeText(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}
