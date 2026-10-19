import test from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiryForm, getDirectionsUrl, sanitizeText } from './validation.ts';

test('validateInquiryForm flags empty input fields', () => {
  const result = validateInquiryForm({ name: '', contact: '', message: '' });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.contact);
  assert.ok(result.errors.message);
});

test('validateInquiryForm passes valid data', () => {
  const result = validateInquiryForm({
    name: 'Rahul Sharma',
    contact: '9876543210',
    message: 'Interested in evening gym timings and membership details.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateInquiryForm rejects too short inputs', () => {
  const result = validateInquiryForm({
    name: 'A',
    contact: '12',
    message: 'hi',
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.name, 'Name must be at least 2 characters.');
  assert.equal(result.errors.contact, 'Please provide a valid phone number or email address.');
  assert.equal(result.errors.message, 'Message must be at least 5 characters.');
});

test('getDirectionsUrl returns the exact requested Google Maps listing', () => {
  const url = getDirectionsUrl();
  assert.equal(url, 'https://maps.app.goo.gl/As652kHdXjzdMuYWA');
});

test('sanitizeText trims redundant whitespaces', () => {
  assert.equal(sanitizeText('   RB    Fitness   Club  '), 'RB Fitness Club');
});
