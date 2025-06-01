import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import HeroSection from '@/components/HeroSection'
import Partners from '@/components/Partner'
import About from '@/components/About'
import Stats from '@/components/Stats'
import News from '@/components/News'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Creative Agency</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Partners />
        <About />
        <Services />
        <Stats />
        <News />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
