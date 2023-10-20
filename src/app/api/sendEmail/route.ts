import { createTransport } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDMAIL_USER,
        pass: process.env.SENDMAIL_PASSWORD,
      },
    });

    const text = `Nome destinatário: ${name}, e-mail ${email}, mensagem: ${message}`

    const mailOptions = {
      to: 'lucianat.s@hotmail.com',
      subject,
      text
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        NextResponse.json({ message: 'Error sending email.' }, { status: 500 })
      }
    });
  
    return NextResponse.json({ message: 'Email sent.' }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 })
  }
}