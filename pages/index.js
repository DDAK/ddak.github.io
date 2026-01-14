import Head from 'next/head';
import { getPostsMetaData } from '../lib/getPostsData.js';
import CardLayout from '../components/CardLayout.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import moment from 'moment';

const description = "The idea-factory; my journey through the technology landscape and entrepreneurship.";
const home_page_url = "https://ddak.github.io/";

export default function Home({ postsData }) {
  return (
    <div className="home-page">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-1570360577499483" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Dawood Khan" />
        <meta name="keywords" content="Blog,Tutorial,Python,Javascript,AI,Machine Learning,Cloud,IoT" />

        <meta property="og:title" content="Dawood Khan" key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url} key="ogurl" />
        <meta property="og:image" content={`${home_page_url}images/dawood.png`} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property="og:article:publisher" content={home_page_url} key="ogaritclepublisher" />
        <meta property="og:site_name" content="Dawood Khan" key="ogsitename" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dawood Khan" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url} />
        <meta name="twitter:site" content="@ddak_1980" />
        <meta name="twitter:image" content={`${home_page_url}images/dawood.png`} />
        <meta name="twitter:creator" content="@ddak_1980" />

        <link rel="icon" href="/images/dawood.png?" />
        <link rel="canonical" href="https://ddak.github.io/" />
        <meta name="google-site-verification" content="Zr0gz2uIj-w6-k-XlpALZ3VI3Qq7V448ccL0mf3A0qE" />
        <title>Dawood Khan - Tech Blog</title>
      </Head>

      <Header
        logoSrc="/images/dawood.png"
        logoAlt="Dawood Khan"
        name="Dawood Khan"
        aboutLinkText="About"
        homeLinkText="Home"
        description="The idea-factory — my journey through technology landscape and entrepreneurship."
      />

      <main>
        <CardLayout postsMetaData={postsData} />
      </main>

      <Footer
        bg_color="transparent"
        normal_color="#a1a1aa"
        icon_size="24px"
        horizontal_margin="1vw"
        horizontal_padding="5vw"
        vertical_padding="2rem"
        github={true}
        linkedin={true}
        need_copy_right={true}
      />

      <style jsx>{`
        .home-page {
          min-height: 100vh;
          background: #0a0a0f;
        }

        main {
          min-height: calc(100vh - 300px);
        }
      `}</style>
    </div>
  );
}

export function getStaticProps() {
  const postsData = getPostsMetaData();
  postsData.sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
  return {
    props: {
      postsData,
    },
  };
}
