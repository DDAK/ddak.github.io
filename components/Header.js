import { useState } from "react";
import Link from "next/link";
import Tags from "./Tags.js";
import Image from "next/image";

export default function Header({
  logoSrc = "/images/dawood.png",
  logoAlt = "Logo",
  name = "Dawood Khan",
  aboutLinkText = "About",
  homeLinkText = "Home",
  description = "The idea-factory; my journey through technology landscape and entrepreneurship."
}) {
  const [showTags, setShowTags] = useState("none");

  function handleTagsClick(e) {
    e.preventDefault();
    setShowTags(showTags === "none" ? "block" : "none");
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link href="/" className="logo-link">
            <Image
              src={logoSrc}
              alt={logoAlt}
              loading="lazy"
              width={40}
              height={40}
              className="logo-img"
            />
            <span className="site-name">{name}</span>
          </Link>
        </div>

        <nav className="header-right">
          <Link href="/" className="nav-link">
            {homeLinkText}
          </Link>
          <Link href="/about" className="nav-link">
            {aboutLinkText}
          </Link>
        </nav>
      </div>

      <div className="header-description">
        <p>{description}</p>
      </div>

      <div style={{ display: showTags }}>
        <Tags />
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 5vw;
          background: rgba(10, 10, 15, 0.9);
          border-bottom: 1px solid rgba(0, 240, 255, 0.15);
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .header-left :global(.logo-link) {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .header-left :global(.logo-img) {
          border-radius: 50%;
          border: 2px solid #00f0ff;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
          transition: all 0.3s ease;
        }

        .header-left :global(.logo-img:hover) {
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.6);
        }

        .header-left :global(.site-name) {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1.4rem;
          font-weight: 600;
          color: #e4e4e7;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .header-left :global(.site-name:hover) {
          color: #00f0ff;
        }

        .header-right {
          display: flex;
          gap: 8px;
        }

        .header-right :global(.nav-link) {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.95rem;
          text-decoration: none;
          color: #a1a1aa;
          padding: 8px 16px;
          border: 1px solid transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
        }

        .header-right :global(.nav-link:hover) {
          color: #00f0ff;
          border-color: rgba(0, 240, 255, 0.3);
          background: rgba(0, 240, 255, 0.05);
        }

        .header-right :global(.nav-link:active) {
          color: #39ff14;
        }

        .header-description {
          padding: 20px 5vw;
          background: linear-gradient(135deg, rgba(18, 18, 26, 0.95) 0%, rgba(26, 26, 36, 0.95) 100%);
          border-bottom: 1px solid rgba(0, 240, 255, 0.1);
        }

        .header-description p {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          color: #a1a1aa;
          text-align: center;
          margin: 0;
          line-height: 1.6;
        }

        @media screen and (max-width: 640px) {
          .header-container {
            padding: 12px 4vw;
          }

          .header-left :global(.site-name) {
            display: none;
          }

          .header-right :global(.nav-link) {
            padding: 8px 12px;
            font-size: 0.9rem;
          }

          .header-description {
            padding: 16px 4vw;
          }

          .header-description p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  );
}
