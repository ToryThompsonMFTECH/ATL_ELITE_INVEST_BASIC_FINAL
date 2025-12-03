import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const offerFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  propertyAddress: z.string().min(10),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  askingPrice: z.string().optional(),
  propertyCondition: z.enum(['excellent', 'good', 'fair', 'poor', 'needs-repair']),
  reasonForSelling: z.string().optional(),
})

const conditionLabels: Record<string, string> = {
  excellent: 'Excellent - Move-in ready',
  good: 'Good - Minor repairs needed',
  fair: 'Fair - Some repairs needed',
  poor: 'Poor - Major repairs needed',
  'needs-repair': 'Needs Significant Repair',
}

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders })
}

export async function POST(request: NextRequest) {
  try {

    // Parse and validate request body
    const body = await request.json()
    const validatedData = offerFormSchema.parse(body)

    // Configure email transporter
    // For production, use environment variables for SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
      },
    })

    // Verify transporter configuration
    if (!process.env.SMTP_USER && !process.env.EMAIL_USER) {
      console.warn('SMTP credentials not configured. Using placeholder.')
    }

    // Format email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0284c7; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0284c7; }
            .value { margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Cash Offer Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${validatedData.fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${validatedData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${validatedData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Property Address:</div>
                <div class="value">${validatedData.propertyAddress}</div>
              </div>
              ${validatedData.bedrooms ? `
              <div class="field">
                <div class="label">Bedrooms:</div>
                <div class="value">${validatedData.bedrooms}</div>
              </div>
              ` : ''}
              ${validatedData.bathrooms ? `
              <div class="field">
                <div class="label">Bathrooms:</div>
                <div class="value">${validatedData.bathrooms}</div>
              </div>
              ` : ''}
              ${validatedData.askingPrice ? `
              <div class="field">
                <div class="label">Asking Price:</div>
                <div class="value">$${validatedData.askingPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Property Condition:</div>
                <div class="value">${conditionLabels[validatedData.propertyCondition]}</div>
              </div>
              ${validatedData.reasonForSelling ? `
              <div class="field">
                <div class="label">Reason for Selling:</div>
                <div class="value">${validatedData.reasonForSelling}</div>
              </div>
              ` : ''}
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Cash Offer Request

Full Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Property Address: ${validatedData.propertyAddress}
${validatedData.bedrooms ? `Bedrooms: ${validatedData.bedrooms}\n` : ''}${validatedData.bathrooms ? `Bathrooms: ${validatedData.bathrooms}\n` : ''}${validatedData.askingPrice ? `Asking Price: $${validatedData.askingPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}\n` : ''}Property Condition: ${conditionLabels[validatedData.propertyCondition]}
${validatedData.reasonForSelling ? `Reason for Selling: ${validatedData.reasonForSelling}` : ''}
    `.trim()

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.EMAIL_USER || 'noreply@atlantaelite.com',
      to: 'mftechconsulting@gmail.com',
      subject: `New Cash Offer Request from ${validatedData.fullName}`,
      text: emailText,
      html: emailHtml,
      replyTo: validatedData.email,
    }

    await transporter.sendMail(mailOptions)

    // Log success
    console.log(`Offer request submitted successfully for ${validatedData.email}`)

    return NextResponse.json(
      { success: true, message: 'Offer request submitted successfully' },
      { status: 200, headers: corsHeaders }
    )
  } catch (error) {
    // Log error
    console.error('Error processing offer request:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to submit offer request. Please try again or contact us directly.' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }
}

