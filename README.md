# Atlanta Elite Investment Properties

A production-ready real estate investor website built with Next.js, TypeScript, TailwindCSS, and serverless API routes.

## Features

- 🏠 Modern, responsive design with TailwindCSS
- 📝 Fully validated contact form with React Hook Form + Zod
- 📧 Serverless email API using Nodemailer
- 🎯 SEO optimized with proper metadata
- ♿ Accessible and mobile-first design
- ⚡ Fast performance with Next.js 14
- 🎨 Navy blue and green color scheme
- ✨ Parallax effects on hero sections
- 🗺️ Google Maps integration in forms

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Form Handling:** React Hook Form + Zod
- **Email:** Nodemailer
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# SMTP Configuration (for email sending)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Alternative: You can also use these variable names
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Important:** For Gmail, you'll need to:
- Enable 2-factor authentication
- Generate an "App Password" (not your regular password)
- Use the app password in `SMTP_PASS` or `EMAIL_PASSWORD`

### Running Locally

1. **Start the development server:**

```bash
npm run dev
```

2. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── send-offer/
│   │       └── route.ts          # Serverless API for email
│   ├── get-offer/
│   │   └── page.tsx              # Dedicated offer page
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Hero.tsx                  # Hero section
│   ├── HowItWorks.tsx            # 3-step process
│   ├── WhyUs.tsx                 # Benefits grid
│   ├── Testimonials.tsx          # Client testimonials
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── Footer.tsx                # Footer component
│   └── OfferForm.tsx             # Contact form
├── public/
│   └── favicon.ico               # Site favicon
└── package.json
```

## Email Configuration

The website uses Nodemailer to send emails via SMTP. The API route at `/app/api/send-offer/route.ts` handles form submissions and sends them to `mftechconsulting@gmail.com`.

### Supported Email Providers

- **Gmail:** Use `smtp.gmail.com` with port 587
- **Outlook/Hotmail:** Use `smtp-mail.outlook.com` with port 587
- **Custom SMTP:** Configure any SMTP server using environment variables

### Testing Email Locally

You can test the email functionality by:
1. Setting up your SMTP credentials in `.env.local`
2. Submitting the form on the website
3. Checking the console for logs
4. Verifying the email arrives at `mftechconsulting@gmail.com`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import project to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add environment variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add all variables from `.env.local`:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `SMTP_FROM`

4. **Deploy:**
   - Vercel will automatically deploy on every push to main
   - Your site will be live at `your-project.vercel.app`

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify:** Use Netlify's Next.js plugin
- **AWS Amplify:** Configure for Next.js SSR
- **Railway:** Connect GitHub repo and deploy
- **DigitalOcean App Platform:** Select Next.js preset

Make sure to add your environment variables in each platform's settings.

## Customization

### Update Company Information

1. **Company Name:** The company name is set to "Atlanta Elite Investment Properties" throughout the codebase
2. **Contact Email:** Update `mftechconsulting@gmail.com` in:
   - `app/api/send-offer/route.ts` (line with `to:`)
3. **Phone Number:** Update `(404) 666-5583` throughout components

### Styling

- **Colors:** Modify `tailwind.config.ts` to change the primary color scheme (navy blue and green)
- **Fonts:** Update the font import in `app/layout.tsx`
- **Components:** All components are in the `components/` directory

### Content

- **Testimonials:** Edit `components/Testimonials.tsx`
- **FAQ:** Edit `components/FAQ.tsx`
- **Benefits:** Edit `components/WhyUs.tsx`
- **Steps:** Edit `components/HowItWorks.tsx`

## SEO

The website includes:
- Proper meta tags in `app/layout.tsx`
- OpenGraph tags for social sharing
- Semantic HTML structure
- Accessible form labels and ARIA attributes

## Support

For issues or questions:
- Check the console for error messages
- Verify environment variables are set correctly
- Ensure SMTP credentials are valid
- Review Next.js and Nodemailer documentation

## License

This project is proprietary and confidential.

---

Built with ❤️ for Atlanta Elite Investment Properties
