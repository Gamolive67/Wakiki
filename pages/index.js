import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import HowToBuy from '../components/HowToBuy'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>$WAKIKI - Jungle Memecoin</title>
        <meta name="description" content="$WAKIKI is the wildest memecoin in the crypto jungle." />
      </Head>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <Footer />
    </>
  )
}
