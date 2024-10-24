import Head from 'next/head';
import { getPostsMetaData } from '../lib/getPostsData.js';
import CardLayout from '../components/CardLayout.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';

const c4 = "#1d2b35";
const c2 = "#fffecb";

export default function Home({ postsData }) {
  // Define these variables or import them from a config file
  const description = "The idea-factory; my journey through technology landscape and entrepreneurship.";
  const home_page_url = "https://ddak.github.io/";

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Dawood Khan" />
        <meta name="keywords" content="Blog,Tutorial,Python,Javascript" />

        <meta
          property="og:title"
          content="Dawood Khan"
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url} key="ogurl" />
        <meta
          property="og:image"
          content={`${home_page_url}images/dawood.png`}
          key="ogimage"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:article:publisher"
          content={home_page_url}
          key="ogaritclepublisher"
        />
        <meta
          property="og:site_name"
          content="Dawood Khan"
          key="ogsitename"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dawood Khan" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url} />
        <meta name="twitter:site" content="@ddak_1980" />
        <meta
          name="twitter:image"
          content={`${home_page_url}images/dawood.png`}
        />
        <meta name="twitter:creator" content="@ddak_1980" />

        <link rel="icon" href="/images/dawood.png?" />
        <link rel="canonical" href="https://ddak.github.io/" />
        <meta
          name="google-site-verification"
          content="9Tboz1pyvOwN9CFYkwKvrbKhdGiHqvQ8pSb2Ii9a7Sg"
        />

        <title>Dawood Khan</title>
      </Head>

      <div>
        <Header
        logoSrc="/images/dawood.png"
        logoAlt="Dawood Khan"
        name="Dawood Khan"
        aboutLinkText="About Me"
        homeLinkText="Homepage"
        description="I'm Dawood Khan, this blog-- The idea-factory-- is my journey through technology landscape and entrepreneurship.."
        />
        <CardLayout postsMetaData={postsData} />

        <Footer
          bg_color={c4 + "f2"}
          normal_color={c2}
          icon_size={"calc(1rem + 1vw)"}
          horizontal_margin={"1vw"}
          horizontal_padding={"5vw"}
          vertical_padding={"1vw"}
          github={true}
          linkedin={true}
          medium={true}
          kaggle={false}
          need_copy_right={true}
        />
      </div>
    </div>
  );
}

export function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData,
    },
  };
}
