import Head from 'next/head'
import Big from '../components/big'
import Index from '../components/carsoul'
import Footer from '../components/footer'
import Hbutton from '../components/homebuttons'
 
export default function Home() {
  return (
    <>
      <Head>
        <title>BigSkyLogos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Big /> 
      <Index />
      <Footer />
    </>
  )
}
