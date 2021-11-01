import Head from 'next/head';

import Header from 'components/header';
import Footer from 'components/footer';

export default function Home() {
  return (
    <div className="bg-bg text-white min-h-screen font-SpaceGrotesk">
      <Head>
        <title>gmi.london</title>
        <link rel="icon" href="/favicon.ico" />\
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className="flex flex-col gap-y-8 pt-12 pb-20 px-12">
        <h1 className="text-center text-4xl font-bold">Indie London presents gmi.london a web3 event for builders</h1>
        <button className="bg-secondary h-12 w-1/4 mx-auto rounded-md px-4">
          <span>I wanna to go to the event</span>
        </button>
        <div className="pt-6">
          <h2 className="text-center text-2xl font-bold">Event</h2>
          <h1>Info about the community and the event itself</h1>
        </div>
        <div className="pt-6 flex flex-col gap-y-6">
          <h2 className="text-center text-2xl font-bold">Speakers</h2>
          <div>
            <div className="flex flex-row gap-x-6">
              <div className="bg-gray-400 h-28 w-28"></div>
              <p>Some words here</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x-6">
              <div className="bg-gray-400 h-28 w-28"></div>
              <p>Some words here</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x-6">
              <div className="bg-gray-400 h-28 w-28"></div>
              <p>Some words here</p>
            </div>
          </div>
        </div>
        {/* <div className="pt-6">
          <h2 className="text-center text-2xl font-bold">Reserve</h2>
          <h1>Info about the community and the event itself</h1>
        </div> */}
        {/* <div className="pt-6">
          <h2 className="text-center text-2xl font-bold">NFT</h2>
          <h1 className="text-center text-4xl font-bold">Coming Soon...</h1>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
