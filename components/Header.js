import { useState } from "react";
import Link from "next/link";
import Tags from "./Tags.js";
import Image from "next/image";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#4f759a",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const header = c4,
  header_left_link = c6,
  header_left_link_hover = c3,
  header_left_link_active = c5;
const header_right_link = c6,
  header_right_link_hover = c3,
  header_right_link_active = c5;

export default function Header({
  logoSrc = "/images/dawood.png",
  logoAlt = "Logo",
  name = "Dawood Khan",
  aboutLinkText = "About Me",
  homeLinkText = "Homepage",
  description = "The idea-factory; my journey through technology landscape and entrepreneurship."
}) {
  const [showTags, setShowTags] = useState("none");

  function handleTagsClick(e) {
    e.preventDefault();
    setShowTags(showTags === "none" ? "block" : "none");
  }


  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link href="/">
          <Image
        src={logoSrc}
        alt={logoAlt}
        loading="lazy"
        width={50}
        height={50}
        />            
          </Link>
          <Link href="/">{name}</Link>
        </div>

        <div className="header-right">
            <Link href="/about">
              {aboutLinkText}
            </Link>
          {/* <Link href="/">{homeLinkText}</Link>         */}
        </div>
      </div>

      <div className="header-description">
        <p>{description}</p>
      </div>

      <div style={{ display: showTags }}>
        <Tags />
      </div>

      <style jsx>{`
        .header-container {
          display: flex;
          flex: 1;
          flex-direction: row;
          padding: 10px 5vw;
          background: ${header};
        }

        .header-left {
          display: flex;
          flex: 1;
          align-items: center;
          font-size:19px;
          color:#1717dd;
        }

        .header-left a {
          font-family: "Source Sans Pro", sans-serif;
          text-decoration: none;
          color: ${header_left_link};
        }
        
        img {
          display: flex;
          width: calc(1.2rem + 1vw);
          max-width: calc(1.2rem + 1vw);
          height: auto;
          margin: 0 5px;
        }

        img:hover {
          cursor: pointer;
        }

        .header-left a:hover {
          color: ${header_left_link_hover};
        }

        .header-left a:active {
          color: ${header_left_link_active};
        }

        .header-right {
          display: flex;
          flex: 3;
          flex-direction: row-reverse;
          align-items: center;
          color:#1414d0;
          font-size:16px;
          padding-left:29px;

          margin-right: 25px; // Added margin for spacing
          margin-left: 10px; // Added margin for spacing between links
        }
        .header .header-right a{
        padding-left:35px;
        }

        .header .header-right a {
          padding: 0 1vw;
          font-family: "Source Sans Pro", sans-serif;
          text-decoration: none;
          color: ${header_right_link};
                  padding-left:35px;

        }

        .header .header-right a:hover {
          color: ${header_right_link_hover};
        padding-left:35px;

        }

        .header .header-right a:active {
          color: ${header_right_link_active};
        padding-left:35px;

        }

        .header-description {
          padding: 15px 5vw;
          background-color: ${c2};
          font-family: "Source Sans Pro", sans-serif;
          color: ${c1};
          text-align: center;
        }

        .header-description p {
          margin: 0;
        }

        @media screen and (max-width: 920px) {
          .header-container {
            padding: 10px 2vw;
          }

          #name {
            display: none;
          }

          img {
            display: flex;
          }
        }

        @media screen and (max-width: 480px) {
          .header-container {
            padding: 10px 2vw;
            overflow-x: scroll;
          }
        }

        @media screen and (max-width: 300px) {
          img {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
