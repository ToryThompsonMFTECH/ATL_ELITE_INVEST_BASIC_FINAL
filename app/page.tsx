import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import Situations from '@/components/Situations'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import AreasServed from '@/components/AreasServed'
import FAQ from '@/components/FAQ'
import OfferForm from '@/components/OfferForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyUs />
      <Situations />
      <Team />
      <Testimonials />
      <AreasServed />
      <FAQ />
      <OfferForm />
      <Footer />
    </main>
  )
}

