import Head from 'next/head';

import Header from 'components/header';
import Footer from 'components/footer';

const speakers = [
  {
    name: 'krishan711.eth',
    photoUrl: 'https://pbs.twimg.com/profile_images/1052545286105681920/fMiABHFs_400x400.jpg',
    twitter: 'krishan711',
    project: {
      name: 'Million Dollar Token Page',
      description: 'MDTP is the Homepage of the Metaverse! 🔮',
      photoUrl: 'https://pbs.twimg.com/profile_images/1434926192872800257/rPQeiS8B_400x400.jpg',
      twitter: 'mdtp_app',
      url: 'https://milliondollartokenpage.com/',
    },
  },
  {
    name: 'fonzo',
    photoUrl: 'https://pbs.twimg.com/profile_images/1432487627949854734/7VPV65wr_400x400.jpg',
    twitter: 'AlfonzoMillions',
    project: {
      name: 'Stoned Bud Society NFT',
      description: 'A collection of 9420 Stoned Bud Society members called Weedheadz.',
      photoUrl: 'https://pbs.twimg.com/profile_images/1453173999291322368/BZVogxiy_400x400.jpg',
      twitter: 'stonedbudNFT',
      url: 'https://www.stonedbudsociety.com/',
    },
  },
  {
    name: 'Richard Melkonian',
    photoUrl: 'https://pbs.twimg.com/profile_images/1323675167139237888/1IX4Gmri_400x400.jpg',
    twitter: 'richardmelko',
    project: {
      name: 'INFLOW',
      description: 'Where musicians launch their own Crypto and monetize WITH their community',
      photoUrl: 'https://pbs.twimg.com/profile_images/1397016966334873603/wGWk4fZs_400x400.jpg',
      twitter: 'INFLOW_music',
      url: 'https://www.inflowmusic.io/',
    },
  },
];

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
        <h1 className="text-center text-4xl font-bold">Indie London presents</h1>
        <h1 className="text-center text-4xl font-bold">gmi.london a web3 event for builders</h1>
        <button className="bg-secondary h-12 sm:w-1/4 mx-auto rounded-md px-4">
          <span>I wanna to go to the event</span>
        </button>
        <div className="pt-6 flex flex-col gap-y-6">
          <h2 className="text-center text-2xl font-bold">Event</h2>
          <p className="text-center text-xl">
            A web3 event focused on <span className="font-bold">building</span>.
          </p>
          <p className="text-center text-xl font-bold">When?</p>
          <p className="text-center text-xl">The 8th of December, 2021 - Location to be announced</p>
          <p className="text-center text-xl">
            No shilling, no paper hands, <span className="font-bold">wgmi</span>
          </p>
        </div>
        <div className="pt-6 flex flex-col gap-y-12">
          <h2 className="text-center text-2xl font-bold">Speakers</h2>
          {speakers.map(speaker => (
            <div key={speaker.name} className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
              <div className="flex flex-row gap-x-3 justify-center">
                <img className="h-20 w-20 lg:h-28 lg:w-28 rounded-lg" src={speaker.photoUrl} />
                <img className="h-20 w-20 lg:h-28 lg:w-28 rounded-lg" src={speaker.project.photoUrl} />
              </div>
              <div>
                <p className="font-bold text-lg">{speaker.name}</p>
                <p>
                  {speaker.project.name} -{' '}
                  <a href={speaker.project.url} target="_blank" className="underline">
                    {speaker.project.url}
                  </a>
                </p>
                <p>{speaker.project.description}</p>
                <div className="mt-2">
                  <a href={`https://twitter.com/${speaker.twitter}`}>
                    <img className="h-6" src="/twitter_logo.svg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
