import Head from "next/head";
import Link from "next/link";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSlug from 'rehype-slug';

import { getAllPostsPath, getPostData } from "../../lib/getPostsData.js";

import Header from "../../components/Header.js";
import NextOptimizedImage from "../../components/NextOptimizedImage.js";
import CodeSyntaxHighlighter from "../../components/CodeSyntaxHighlighter.js";
import Footer from "../../components/Footer.js";

function getHeadingAnchorProps(props) {
  let id = "";
  let modifiedProps = { ...props };

  if (typeof props.children === "string") {
    modifiedProps.children = [props.children];
  } else if (!Array.isArray(props.children)) {
    modifiedProps.children = [props.children];
  }

  if (modifiedProps.children.length > 0) {
    let lastChild = modifiedProps.children[modifiedProps.children.length - 1];
    if (typeof lastChild === "string") {
      let split_array = lastChild.split(":=:");
      if (split_array.length > 1) {
        id = split_array[1];
        modifiedProps.children[modifiedProps.children.length - 1] = split_array[0];
      }
    }
  }

  return [modifiedProps, id];
}

// Table components for GFM tables
const TableWrapper = (props) => (
  <div className="table-wrapper">
    <table {...props} />
    <style jsx>{`
      .table-wrapper {
        overflow-x: auto;
        margin: 1.5rem 0;
        border-radius: 8px;
        border: 1px solid rgba(0, 240, 255, 0.15);
      }
      .table-wrapper :global(table) {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 0.95rem;
      }
    `}</style>
  </div>
);

const TableHead = (props) => (
  <thead {...props} style={{
    background: 'linear-gradient(135deg, #15151f 0%, #1a1a24 100%)',
  }} />
);

const TableRow = (props) => (
  <tr className="table-row" {...props}>
    {props.children}
    <style jsx>{`
      .table-row {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: background 0.2s ease;
      }
      .table-row:hover {
        background: rgba(0, 240, 255, 0.03);
      }
    `}</style>
  </tr>
);

const TableHeader = (props) => (
  <th className="table-header" {...props}>
    {props.children}
    <style jsx>{`
      .table-header {
        padding: 12px 16px;
        text-align: left;
        font-family: 'Share Tech Mono', monospace;
        font-weight: 600;
        color: #00f0ff;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-bottom: 2px solid rgba(0, 240, 255, 0.2);
      }
    `}</style>
  </th>
);

const TableCell = (props) => (
  <td className="table-cell" {...props}>
    {props.children}
    <style jsx>{`
      .table-cell {
        padding: 12px 16px;
        color: #a1a1aa;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
    `}</style>
  </td>
);

const components = {
  img: (props) => <NextOptimizedImage img_props={props} />,

  h1: (props) => {
    const [modifiedProps, id] = getHeadingAnchorProps(props);
    return (
      <h1 className="heading-1" id={id}>
        {modifiedProps.children}
        <style jsx>{`
          .heading-1 {
            font-family: 'Maven Pro', sans-serif;
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            font-weight: 700;
            color: #e4e4e7;
            margin: 2rem 0 1rem;
            line-height: 1.3;
            position: relative;
            padding-left: 20px;
          }
          .heading-1::before {
            content: '#';
            position: absolute;
            left: 0;
            color: #00f0ff;
            opacity: 0.6;
          }
        `}</style>
      </h1>
    );
  },

  h2: (props) => {
    const [modifiedProps, id] = getHeadingAnchorProps(props);
    return (
      <h2 className="heading-2" id={id}>
        {modifiedProps.children}
        <style jsx>{`
          .heading-2 {
            font-family: 'Maven Pro', sans-serif;
            font-size: clamp(1.4rem, 3vw, 1.85rem);
            font-weight: 600;
            color: #e4e4e7;
            margin: 1.75rem 0 0.75rem;
            line-height: 1.35;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0, 240, 255, 0.15);
          }
        `}</style>
      </h2>
    );
  },

  h3: (props) => {
    const [modifiedProps, id] = getHeadingAnchorProps(props);
    return (
      <h3 className="heading-3" id={id}>
        {modifiedProps.children}
        <style jsx>{`
          .heading-3 {
            font-family: 'Maven Pro', sans-serif;
            font-size: clamp(1.15rem, 2.5vw, 1.4rem);
            font-weight: 600;
            color: #00f0ff;
            margin: 1.5rem 0 0.5rem;
            line-height: 1.4;
          }
        `}</style>
      </h3>
    );
  },

  h4: (props) => (
    <h4 className="heading-4">
      {props.children}
      <style jsx>{`
        .heading-4 {
          font-family: 'Maven Pro', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #bf00ff;
          margin: 1.25rem 0 0.5rem;
        }
      `}</style>
    </h4>
  ),

  p: (props) => (
    <p className="paragraph">
      {props.children}
      <style jsx>{`
        .paragraph {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.05rem;
          color: #a1a1aa;
          margin: 0 0 1.25rem;
          line-height: 1.8;
        }
      `}</style>
    </p>
  ),

  ul: (props) => (
    <ul className="unordered-list">
      {props.children}
      <style jsx>{`
        .unordered-list {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.05rem;
          color: #a1a1aa;
          margin: 1rem 0 1.25rem 1.5rem;
          line-height: 1.8;
        }
        .unordered-list :global(li) {
          margin-bottom: 0.5rem;
          position: relative;
        }
        .unordered-list :global(li::marker) {
          color: #39ff14;
        }
      `}</style>
    </ul>
  ),

  ol: (props) => (
    <ol className="ordered-list">
      {props.children}
      <style jsx>{`
        .ordered-list {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.05rem;
          color: #a1a1aa;
          margin: 1rem 0 1.25rem 1.5rem;
          line-height: 1.8;
        }
        .ordered-list :global(li) {
          margin-bottom: 0.5rem;
        }
        .ordered-list :global(li::marker) {
          color: #00f0ff;
          font-family: 'Share Tech Mono', monospace;
        }
      `}</style>
    </ol>
  ),

  li: (props) => (
    <li className="list-item">
      {props.children}
      <style jsx>{`
        .list-item {
          padding-left: 0.5rem;
        }
      `}</style>
    </li>
  ),

  a: (props) => (
    <a className="link" href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
      <style jsx>{`
        .link {
          color: #00f0ff;
          text-decoration: none;
          border-bottom: 1px dashed rgba(0, 240, 255, 0.4);
          transition: all 0.2s ease;
        }
        .link:hover {
          color: #39ff14;
          border-bottom-color: #39ff14;
        }
      `}</style>
    </a>
  ),

  code: (props) => <CodeSyntaxHighlighter code_props={props} />,

  pre: (props) => (
    <div className="pre-wrapper">
      {props.children}
      <style jsx>{`
        .pre-wrapper {
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  ),

  em: (props) => (
    <em className="emphasis">
      {props.children}
      <style jsx>{`
        .emphasis {
          font-style: italic;
          color: #bf00ff;
        }
      `}</style>
    </em>
  ),

  strong: (props) => (
    <strong className="strong">
      {props.children}
      <style jsx>{`
        .strong {
          font-weight: 700;
          color: #e4e4e7;
        }
      `}</style>
    </strong>
  ),

  hr: () => (
    <div className="divider-wrapper">
      <hr className="divider" />
      <style jsx>{`
        .divider-wrapper {
          margin: 2.5rem 0;
        }
        .divider {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.3), transparent);
          margin: 0;
        }
      `}</style>
    </div>
  ),

  blockquote: (props) => (
    <blockquote className="blockquote">
      {props.children}
      <style jsx>{`
        .blockquote {
          margin: 1.5rem 0;
          padding: 1rem 1.5rem;
          background: rgba(0, 240, 255, 0.05);
          border-left: 4px solid #00f0ff;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #a1a1aa;
        }
        .blockquote :global(p) {
          margin: 0;
        }
      `}</style>
    </blockquote>
  ),

  // Table components
  table: TableWrapper,
  thead: TableHead,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
};

const home_page_url = "https://ddak.github.io/";

export default function Blog({ postMetadata, postContent }) {
  return (
    <div className="blog-page">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={postMetadata.description} />
        <meta name="author" content="Dawood Khan" />
        <meta name="keywords" content={postMetadata.keywords.join(",")} />

        <meta
          property="og:title"
          content={postMetadata.title + " - Dawood Khan"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={postMetadata.description}
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={home_page_url + "blog/" + postMetadata.id}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={home_page_url + "images/" + postMetadata.imgName}
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
          content={"Dawood Khan"}
          key="ogsitename"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={postMetadata.title + " - Dawood Khan"}
        />
        <meta name="twitter:description" content={postMetadata.description} />
        <meta
          name="twitter:url"
          content={home_page_url + "blog/" + postMetadata.id}
        />
        <meta name="twitter:site" content="@ddak_1980" />
        <meta
          name="twitter:image"
          content={home_page_url + "images/" + postMetadata.imgName}
        />
        <meta name="twitter:creator" content="@ddak_1980" />

        <link rel="icon" href="/images/dawood.png?" />
        <link
          rel="canonical"
          href={home_page_url + "blog/" + postMetadata.id}
        />

        <title>{postMetadata.title + " - Dawood Khan"}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />

      <main className="blog-main">
        <div className="blog-header">
          <Link href="/" className="back-link">
            ← Back to all posts
          </Link>
          <h1 className="blog-title">{postMetadata.title}</h1>
          <div className="blog-meta">
            <span className="blog-date">{postMetadata.date}</span>
            <div className="blog-tags">
              {postMetadata.tags?.map((tag) => (
                <span key={tag} className="blog-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <article className="blog-content">
          <MDXRemote {...postContent} components={components} />
        </article>
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
        .blog-page {
          min-height: 100vh;
          background: #0a0a0f;
        }

        .blog-main {
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem 5vw 4rem;
        }

        .blog-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 240, 255, 0.1);
        }

        .blog-header :global(.back-link) {
          display: inline-block;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: #00f0ff;
          text-decoration: none;
          margin-bottom: 1.5rem;
          transition: color 0.2s ease;
        }

        .blog-header :global(.back-link:hover) {
          color: #39ff14;
        }

        .blog-title {
          font-family: 'Maven Pro', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #e4e4e7;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .blog-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }

        .blog-date {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: #00f0ff;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .blog-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: #39ff14;
          padding: 4px 10px;
          background: rgba(57, 255, 20, 0.1);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 4px;
        }

        .blog-content {
          color: #a1a1aa;
        }

        @media screen and (max-width: 768px) {
          .blog-main {
            padding: 1.5rem 4vw 3rem;
          }

          .blog-header {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkGfm],
      rehypePlugins: [rehypeKatex, rehypeSlug],
    },
  });
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  };
}
