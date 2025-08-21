import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('Contact form API called');
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.TURBO_SMTP_USER || !process.env.TURBO_SMTP_PASS) {
      console.error('Missing TurboSMTP environment variables:', {
        user: !!process.env.TURBO_SMTP_USER,
        pass: !!process.env.TURBO_SMTP_PASS
      });
      
      // Fallback: Log the submission details for manual processing
      console.log('FALLBACK: Contact form submission (manual processing needed):', {
        timestamp: new Date().toISOString(),
        name,
        email,
        subject,
        message,
        userAgent: request.headers.get('user-agent')
      });
      
      return NextResponse.json(
        { message: 'Thank you for your message! We have received your inquiry and will get back to you soon.' },
        { status: 200 }
      );
    }

    console.log('Creating TurboSMTP transporter...');
    // Create transporter using TurboSMTP
    const transporter = nodemailer.createTransport({
      host: 'pro.turbo-smtp.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.TURBO_SMTP_USER,
        pass: process.env.TURBO_SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@primealliance.mu',
      to: 'orders@primealliance.mu',
      subject: `Contact Form: ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Prime Alliance website contact form.
Reply to: ${email}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the Prime Alliance website contact form.</em></p>
        <p><em>Reply to: ${email}</em></p>
      `,
      replyTo: email,
    };

    console.log('Attempting to send email...');
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Something went wrong. Please try again later.';
    
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      // Check for common email errors
      if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Please contact support.';
      } else if (error.message.includes('connection')) {
        errorMessage = 'Email service connection failed. Please try again later.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}