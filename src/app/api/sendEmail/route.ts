import { createTransport } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const text = `${name ? `Nome: ${name}\n` : ''}${email  ? `E-mail: ${email}\n` : ''}Feedback: ${message}`

    const mailOptions = {
      from: 'LuDev <ludevmailer@gmail.com>',
      to: 'lucianat.s@hotmail.com',
      subject: 'Feedback LuDev',
      text
    };

    await new Promise((resolve, reject) => { 
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
          NextResponse.json({ message: 'Error sending email.' }, { status: 500 })
        } else {
          resolve(info)
        }
      });
    })
  
    return NextResponse.json({ message: 'Email sent.' }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 })
  }
}