import Head from 'next/head';

import Header from 'components/header';
import Footer from 'components/footer';

const speakers = [
  {
    name: 'krishan711.eth',
    photoUrl: 'https://pbs.twimg.com/profile_images/1649797324762226688/VpIDPdJD_400x400.jpg',
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
    photoUrl: 'https://pbs.twimg.com/profile_images/1607182377717047297/sURMxboZ_400x400.jpg',
    twitter: 'AlfonzoMillions',
    project: {
      name: 'Stoned Bud Society NFT',
      description: 'A collection of 9420 Stoned Bud Society members called Weedheadz.',
      photoUrl: 'https://pbs.twimg.com/profile_images/1453173999291322368/BZVogxiy_400x400.jpg',
      twitter: 'stonedbudNFT',
      url: 'https://www.stonedbudsociety.com/',
    },
    project1: {
      name: 'MemoCoinGen',
      description: 'Launch your own crypto project → Raise millions → Help the needy → Drive Lambos.',
      photoUrl: '',
      url: 'https://www.memecoingen.com/',
    },
  },
  {
    name: 'Richard Melkonian',
    photoUrl: 'https://pbs.twimg.com/profile_images/1323675167139237888/1IX4Gmri_400x400.jpg',
    twitter: 'richardmelko',
    project: {
      name: 'INFLOW',
      description:
        'Where musicians launch their own Crypto and monetize WITH their community. Backed by Protocol Labs & Filecoin.',
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
        <meta property="og:description" content="The Web3 event for builders" />
        <meta property="og:url" content="https://www.gmi.london" />
        <link rel="icon" href="/favicon.ico" />\
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="https://gmi.london/social.png" />
        <meta name="twitter:title" content="gmi.london" />
        <meta name="twitter:description" content="The Web3 event for builders" />
        <meta name="twitter:image" content="https://gmi.london/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <div className="flex flex-col gap-y-8 pt-12 pb-28 px-12">
        <h1 className="text-center text-4xl font-bold">
          <a className="underline text-cta" href="https://www.indieldn.com/" target="_blank">
            Indie London
          </a>{' '}
          presents
        </h1>
        <h1 className="text-center text-4xl font-bold">gmi.london a Web3 event for builders</h1>
        <div className="mx-auto flex flex-col justify-center items-center text-center">
          <img src="bunny.gif" className="h-20 w-20" />
          <p className="text-gray-400">Go down the rabbit hole of Web3</p>
        </div>
        <div className="pt-6 flex flex-col gap-y-6">
          <h2 className="text-center text-2xl font-bold">Event</h2>
          <p className="text-center text-xl">
            A Web3 event focused on <span className="font-bold">building</span>.
          </p>
          <p className="text-center text-xl">
            Three London guys in the web3 space are showing off their projects to the indieldn crowd, and{' '}
            <a className="underline text-secondary" href="https://www.dannyaziz.com" target="_blank">
              Danny Aziz
            </a>{' '}
            is gonna be the judge.
          </p>
          <p className="text-center text-xl font-bold">When?</p>
          <p className="text-center text-xl">
            The 8th of December, 2021 -{' '}
            <a className="underline" href="https://goo.gl/maps/2CkVbzRc4XmS7sDu7">
              Here
            </a>
          </p>
          <p className="text-center text-xl">
            No shilling, no paper hands, <span className="font-bold">wgmi</span>
          </p>
        </div>
        <div className="pt-6 flex flex-col gap-y-12 mx-auto">
          <h2 className="text-center text-2xl font-bold">Participants</h2>
          {speakers.map(speaker => (
            <div key={speaker.name} className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
              <div className="flex flex-row gap-x-3 justify-center">
                <img className="h-20 w-20 lg:h-28 lg:w-28 rounded-lg" src={speaker.photoUrl} />
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
                {speaker.project1 && (
                  <>
                    <br />
                    <p>
                      {speaker.project1.name} -{' '}
                      <a href={speaker.project1.url} target="_blank" className="underline">
                        {speaker.project1.url}
                      </a>
                    </p>
                    <p>{speaker.project1.description}</p>
                  </>
                )}
                <div className="mt-2">
                  <a href={`https://twitter.com/${speaker.twitter}`} target="_blank">
                    <img className="h-6" src="/twitter_logo.svg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col gap-y-12 mx-auto">
          <h2 className="text-center text-2xl font-bold">Judge</h2>
          <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
            <div className="flex flex-row gap-x-3 justify-center">
              <img
                className="h-20 w-20 lg:h-28 lg:w-28 rounded-lg"
                src={'https://pbs.twimg.com/profile_images/1638709745434468353/TENSKom5_400x400.jpg'}
              />
            </div>
            <div>
              <p className="font-bold text-lg">Danny Aziz</p>
              <p>Given his successful collaboration with VeeFriends and the pioneering NFT app, wave</p>
              <p> we're super pumped to have Danny Aziz as a judge for this event.</p>
              <div className="mt-2">
                <a href={`https://twitter.com/dannyaziz97`} target="_blank">
                  <img className="h-6" src="/twitter_logo.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
