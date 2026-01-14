import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import {
  SiGo,
  SiPython,
  SiCplusplus,
  SiRust,
  SiZig,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiNginx,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";

const home_page_url = "https://ddak.github.io/";
const description = "I'm Dawood Khan, CTO at Thndr, Dubai UAE.";

const skills = [
  { icon: SiPython, name: "Python", color: "#3776ab" },
  { icon: SiGo, name: "Go", color: "#00add8" },
  { icon: SiCplusplus, name: "C++", color: "#00599c" },
  { icon: SiRust, name: "Rust", color: "#ce422b" },
  { icon: SiZig, name: "Zig", color: "#f7a41d" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiKeras, name: "Keras", color: "#d00000" },
  { icon: SiPytorch, name: "PyTorch", color: "#ee4c2c" },
  { icon: SiOpencv, name: "OpenCV", color: "#5c3ee8" },
  { icon: SiMysql, name: "MySQL", color: "#4479a1" },
  { icon: SiRedis, name: "Redis", color: "#dc382d" },
  { icon: SiGit, name: "Git", color: "#f05032" },
  { icon: SiNginx, name: "Nginx", color: "#009639" },
  { icon: SiDocker, name: "Docker", color: "#2496ed" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326ce5" },
];

export default function About_Page() {
  return (
    <div className="about-page">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Dawood Khan" />

        <meta property="og:title" content="About - Dawood Khan" key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url + "about"} key="ogurl" />
        <meta property="og:image" content={home_page_url + "images/dawood.png"} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property="og:article:publisher" content={home_page_url} key="ogaritclepublisher" />
        <meta property="og:site_name" content="Dawood Khan" key="ogsitename" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About - Dawood Khan" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url + "about"} />
        <meta name="twitter:site" content="@ddak_1980" />
        <meta name="twitter:image" content={home_page_url + "images/dawood.png"} />
        <meta name="twitter:creator" content="@ddak_1980" />

        <link rel="icon" href="/images/dawood.png?" />
        <link rel="canonical" href="https://ddak.github.io/about" />

        <title>About - Dawood Khan</title>
      </Head>

      <Header />

      <main className="about-main">
        <section className="profile-section">
          <div className="profile-image-container">
            <Image
              className="profile-image"
              src="/images/about/dawood.jpg"
              alt="Dawood Khan"
              width={200}
              height={200}
              priority
            />
            <div className="image-glow"></div>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">Dawood Khan</h1>
            <p className="profile-title">CTO / Principal Engineer at Thndr</p>

            <div className="contact-info">
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>dawood.khan@gmail.com</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bio-section">
          <h2 className="section-title">About Me</h2>

          <p className="bio-text">
            I am a seasoned professional with 20 years of experience delivering cutting-edge solutions in e-commerce, mobility, and industrial automation. My expertise spans AI, distributed systems (cloud-based and embedded), IoT, and automation tools.
          </p>

          <p className="bio-text">
            I excel at applying research to real-world challenges and leading cross-functional teams with an entrepreneurial, collaborative approach. With a strong focus on AI, cloud, and IoT, I combine hands-on software development and leadership to drive impactful results.
          </p>

          <p className="bio-text">
            Skilled in both technical and project management, I use agile methodologies to align teams with long-term goals. Outside of work, I enjoy traveling, photography, and reading.
          </p>
        </section>

        <section className="academic-section">
          <h2 className="section-title">Academic Supervision</h2>

          <p className="bio-text">As an academic, I have supervised two PhD theses:</p>

          <ul className="thesis-list">
            <li>
              <Link href="https://www.linkedin.com/in/owais-bhat-29140814b/" target="_blank" rel="noopener noreferrer" className="thesis-link">
                Owais Bhat
              </Link>
              {" "}— &quot;Context-aware Deep Learning system for glycemic control in diabetic patients&quot;
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/zubair-khaliq-924836133/" target="_blank" rel="noopener noreferrer" className="thesis-link">
                Zubair Khaliq
              </Link>
              {" "}— &quot;Development of Deep Learning based Intelligent Automation Framework for User Interface Testing&quot;
            </li>
          </ul>

          <p className="bio-text">
            In addition to these, I have supervised numerous masters and undergraduate theses and senior year projects.
          </p>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Tools & Skills</h2>

          <div className="skills-grid">
            {skills.map(({ icon: Icon, name, color }) => (
              <div key={name} className="skill-item">
                <Icon className="skill-icon" style={{ color }} />
                <span className="skill-name">{name}</span>
              </div>
            ))}
          </div>
        </section>
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
        .about-page {
          min-height: 100vh;
          background: #0a0a0f;
        }

        .about-main {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 5vw 4rem;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 240, 255, 0.1);
        }

        .profile-image-container {
          position: relative;
          flex-shrink: 0;
        }

        .profile-image-container :global(.profile-image) {
          border-radius: 50%;
          border: 3px solid #00f0ff;
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
        }

        .image-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%);
          z-index: -1;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          font-family: 'Maven Pro', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 0.5rem;
        }

        .profile-title {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1rem;
          color: #00f0ff;
          margin-bottom: 1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 0.95rem;
          color: #a1a1aa;
        }

        .contact-item :global(.contact-icon) {
          color: #39ff14;
          font-size: 1.1rem;
        }

        .section-title {
          font-family: 'Maven Pro', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #00f0ff;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 240, 255, 0.2);
        }

        .bio-section, .academic-section, .skills-section {
          margin-bottom: 2.5rem;
        }

        .bio-text {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.05rem;
          color: #a1a1aa;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .thesis-list {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          color: #a1a1aa;
          margin: 1rem 0 1rem 1.5rem;
          line-height: 1.8;
        }

        .thesis-list li {
          margin-bottom: 0.75rem;
        }

        .thesis-list li::marker {
          color: #39ff14;
        }

        .thesis-list :global(.thesis-link) {
          color: #00f0ff;
          text-decoration: none;
          border-bottom: 1px dashed rgba(0, 240, 255, 0.4);
          transition: all 0.2s ease;
        }

        .thesis-list :global(.thesis-link:hover) {
          color: #39ff14;
          border-bottom-color: #39ff14;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(0, 240, 255, 0.05);
          border-color: rgba(0, 240, 255, 0.2);
          transform: translateY(-2px);
        }

        .skill-item :global(.skill-icon) {
          font-size: 2rem;
          transition: all 0.3s ease;
        }

        .skill-item:hover :global(.skill-icon) {
          filter: drop-shadow(0 0 8px currentColor);
        }

        .skill-name {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: #a1a1aa;
          text-align: center;
        }

        @media screen and (max-width: 640px) {
          .about-main {
            padding: 2rem 4vw 3rem;
          }

          .profile-section {
            flex-direction: column;
            text-align: center;
          }

          .contact-info {
            align-items: center;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 0.75rem;
          }

          .skill-item {
            padding: 0.75rem;
          }

          .skill-item :global(.skill-icon) {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
