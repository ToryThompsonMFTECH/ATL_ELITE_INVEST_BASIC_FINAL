import Navbar from '@/components/Navbar'
import OfferForm from '@/components/OfferForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Get Your Cash Offer | Atlanta Elite Investment Properties',
  description: 'Get a fair cash offer for your Atlanta property. Fill out our form and receive an offer within 24 hours. No obligation, no fees.',
}

export default function GetOfferPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-8">
        <OfferForm />
      </div>
      <Footer />
    </main>
  )
}

