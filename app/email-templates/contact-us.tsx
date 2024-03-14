import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  message: string
  company: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phone,
    message,
    company
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
      <h2>Contact Us Code Craft,</h2>
      <ul>
        <li><strong>fullName:</strong> {fullName}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Company:</strong> {company}</li>
      </ul>
      <p>{message}</p>
  </div>
);
