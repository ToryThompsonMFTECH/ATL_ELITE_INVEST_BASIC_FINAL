import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

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

    // Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set.')
      return NextResponse.json(
        { error: 'RESEND_API_KEY not configured. Please set RESEND_API_KEY in Vercel environment variables.' },
        { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }
    
    console.log('Resend API key found, length:', resendApiKey.length)

    const resend = new Resend(resendApiKey)

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

    // Send email using Resend
    // IMPORTANT: Must use a "from" address from your verified domain: atlantaeliteinvestmentproperties.com
    // This removes the "testing-only" restriction and allows sending to any recipient
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'no-reply@atlantaeliteinvestmentproperties.com'
    const toEmail = process.env.RESEND_TO_EMAIL || 'atlantaelite2500@gmail.com'
    
    if (!process.env.RESEND_FROM_EMAIL) {
      console.warn('RESEND_FROM_EMAIL not set. Using default no-reply@atlantaeliteinvestmentproperties.com from verified domain.')
    }
    
    console.log('Sending email to:', toEmail)
    console.log('Sending email from:', fromEmail)
    
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: validatedData.email,
      subject: `New Cash Offer Request from ${validatedData.fullName}`,
      text: emailText,
      html: emailHtml,
    })
    
    // Check for errors in the result
    if (emailResult.error) {
      console.error('Resend email error:', emailResult.error)
      // If it's a verification error, provide helpful message
      if (emailResult.error.message?.includes('testing emails') || emailResult.error.message?.includes('verify')) {
        throw new Error(`Email verification required: You can only send to verified email addresses. Please verify "${toEmail}" at https://resend.com/emails or verify a domain at https://resend.com/domains`)
      }
      throw new Error(`Failed to send email: ${emailResult.error.message || 'Unknown error'}`)
    }
    
    // Log success with email result
    console.log(`Offer request submitted successfully for ${validatedData.email}`)
    console.log('Email sent:', emailResult)

    return NextResponse.json(
      { success: true, message: 'Offer request submitted successfully' },
      { status: 200, headers: corsHeaders }
    )
  } catch (error) {
    // Log error with more details
    console.error('Error processing offer request:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // Handle other errors - show actual error message for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Returning error to client:', errorMessage)
    
    return NextResponse.json(
      { 
        error: errorMessage || 'Failed to submit offer request. Please try again or contact us directly.',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }
}
