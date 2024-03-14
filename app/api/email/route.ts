import { Resend } from "resend";
import { EmailTemplate } from '@/app/email-templates/contact-us';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || 're_gjGaWm3X_EjjqDWTHLQnBoe8Cfk43Nikp');

export async function POST(request: Request) {
    const { email, fullName,message, phone, company } = await request.json();

    console.log("BLAGAGA", { email, fullName,message, phone, company }) 
  
    const {data,  error} = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['codecraftconsult@gmail.com'],
        subject: 'Contact Code Craft',
        react: EmailTemplate({ email, fullName,message, phone, company }),
        text: message
      });
  
      console.log(data,  error)
    return NextResponse.json({
      status: "OK",
    });
  }