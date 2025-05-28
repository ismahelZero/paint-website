import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Partners from '@/components/Partner';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import News from '@/components/News';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
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
            <Footer />
        </>
    );
}
