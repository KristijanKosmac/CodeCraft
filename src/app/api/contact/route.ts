import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_YFTJb7dX_LfX2fNTwFjJFmpPNHXZakNFu');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Send email via Resend
    const toEmail =  'codecraftconsult@gmail.com';

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: `New inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message || 'Email send failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
