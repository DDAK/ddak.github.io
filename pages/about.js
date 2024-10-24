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

const c1 = "#071013",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const about_heading = c3,
  about_meta_info = c4,
  about_meta_icon = c4,
  display_img_border = c4;
const about_info = c1 + "d9",
  external_link = c1,
  external_link_border = c5,
  external_link_hover = c3;
const horizontal_break = c1 + "80",
  portfolio_section_heading = c3,
  portfolio_section_heading_decoraion = c6;
const organization_name = c5,
  role_buffer_dot = c1,
  role_name = c4,
  role_duration = c1 + "bf";
const tech_stack_group_heading = c5,
  tech_stack_icon = c4,
  tech_stack_name = c4;

const styles = `
  .about-contanier {
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 1vh 10vw 1vh 10vw;
  }

  .about-heading {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(1.5rem + 0.7vw);
    color: ${about_heading};
  }

  .about-meta {
    display: flex;
    flex: 25%;
    max-width: 25%;
    flex-direction: column;
    align-items: center;
    padding: 1vh 2.5vw 1vh 2.5vw;
  }

  .about-meta-info {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.9rem + 0.1vw);
    color: ${about_meta_info};
  }

  .about-meta-icon-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .about-meta-icon {
    color: ${about_meta_icon};
    font-size: 21px;
    margin-right: 5px;
  }

  .display-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    border: 0px solid ${display_img_border};
  }

  .about-info {
    display: flex;
    flex: 75%;
    flex-direction: column;
    padding-top: 1vh;
    color: ${about_info};
  }

  .about-info-description {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.9rem + 0.3vw);
    margin: 1vh 0 1vh 0;
  }

  .external-link {
    text-decoration: none;
    color: ${external_link};
    cursor: pointer;
    border-bottom: 1px dashed ${external_link_border};
  }

  .external-link:hover {
    color: ${external_link_hover};
  }

  .horizontal-line-break {
    margin: 2vh 15% 2vh 15%;
    border: 2px solid ${horizontal_break};
  }

  #portfolio-line-break {
    display: none;
  }

  .tools-container {
    display: flex;
    flex: 100%;
    max-width: 100%;
    flex-direction: row;
    margin: 1vh 10vw 1vh 10vw;
  }

  .portfolio-section-container {
    display: flex;
    flex: 50%;
    max-width: 50%;
    flex-direction: column;
  }

  .portfolio-section-heading {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(1.2rem + 0.7vw);
    color: ${portfolio_section_heading};
    text-decoration: underline;
    text-decoration-color: ${portfolio_section_heading_decoraion};
    text-align: center;
    padding-bottom: 1vh;
  }

  .organization-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .organization-info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .organization-logo {
    width: 10%;
    height: auto;
    max-width: 10%;
    padding: 0 2% 0 2%;
  }

  .organization-name {
    width: 90%;
    padding: 0 1% 0 1%;
    font-family: 'Maven Pro', sans-serif;
    font-size: calc(1rem + 0.4vw);
    font-weight: bold;
    color: ${organization_name};
  }

  ,roles-container {
    display: flex;
    flex: 100%;
    flex-direction: column;
  }

  .role-container {
    display: flex;
    flex: 100%;
    flex-direction: row;
    padding: 1% 1% 1% 1%;
  }

  .role-buffer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    max-width: 10%;
  }

  .role-buffer-dot {
    width: .5em;
    height: .5em;
    background-color: ${role_buffer_dot};
    border-radius: 50%;
  }

  .role {
    display: flex;
    flex: 90%;
    max-width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .role-name {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.8rem + 0.3vw);
    font-weight: bold;
    color: ${role_name};
  }

  .role-duration {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(0.7rem + 0.1vw);
    font-weight: light;
    color: ${role_duration};
  }

  .tech-stack-group-heading {
    font-family: 'Maven Pro', sans-serif;
    font-size: calc(1rem + 0.4vw);
    font-weight: bold;
    color: ${tech_stack_group_heading};
  }

  .tech-stack-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 2vw 0 2vw;
  }

  .tech-stack-division {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    padding-top: 0.1vw;
    padding-bottom: 0.1vw;
  }

  .tech-stack-icon {
    color: ${tech_stack_icon};
    width: calc(1rem + 1vw);
    height: calc(1rem + 1vw);
  }

  .tech-stack-name {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.7rem + 0.1vw);
    color: ${tech_stack_name};
  }

  @media screen and (max-width: 1200px) {
    .about-contanier {
      flex-direction: row;
      margin: 1vh 2vw 1vh 2vw;
    }

    .about-meta {
      flex: 50%;
      max-width: 50%;
    }

    .display-img {
      width: 75%;
      max-width: 75%;
    }

    .portfolio-section-container {
      flex: 50%;
      max-width: 50%;
    }

    .organization-logo {
      padding: 0;
    }

    .tools-container {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 580px) {
    .about-contanier {
      flex-direction: column;
      margin: 1vh 5vw 1vh 5vw;
    }

    .about-meta {
      flex: 100%;
      max-width: 100%;
    }

    .display-img {
      width: 50%;
      max-width: 50%;
    }

    .horizontal-line-break {
      margin: 2vh 10% 2vh 10%;
      border: 1px solid ${horizontal_break};
    }

    .portfolio-section-container {
      flex: 100%;
      max-width: 100%;
    }

    #portfolio-line-break {
      display: flex;
    }

    .tools-container {
      flex-direction: column;
    }
  }

`;

const home_page_url = "https://ddak.github.io/";
const description =
  "I'm Dawood Khan, CTO at Thndr, Dubai UAE.";

export default function About_Page() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Dawood Khan" />

        <meta
          property="og:title"
          content={"About - Dawood Khan"}
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url + "about"} key="ogurl" />
        <meta
          property="og:image"
          content={home_page_url + "images/dawood.png"}
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

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={"About - Dawood Khan"}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url + "about"} />
        <meta name="twitter:site" content="@ddak_1980" />
        <meta
          name="twitter:image"
          content={home_page_url + "images/dawood.png"}
        />
        <meta name="twitter:creator" content="@ddak_1980" />

        <link rel="icon" href="/images/dawood.png?" />
        <link
          rel="canonical"
          href="https://ddak.github.io/about"
        />

        <title>{"About - Dawood Khan"}</title>

        <style type="text/css">{styles}</style>
      </Head>

      <div>
        <Header />

        <div className="about-contanier">
          <div className="about-meta">
          <Image
              className="display-img"
              src="/images/about/dawood.jpg"
              alt="Dawood Khan"
              loading="lazy"
              width={100}
              height={100}
            /> 
            <Footer
              bg_color={"transparent"}
              normal_color={c4}
              icon_size={"21px"}
              horizontal_margin={"5px"}
              horizontal_padding={"1px"}
              vertical_padding={"5px"}
              github={true}
              linkedin={true}
              medium={true}
              kaggle={false}
              need_copy_right={false}
            />
            <div className="about-meta-icon-container">
              <MdEmail className="about-meta-icon" />
              <p className="about-meta-info">dawood.khan@gmail.com</p>
            </div>
            <div className="about-meta-icon-container">
              <MdLocationOn className="about-meta-icon" />
              <p className="about-meta-info">Dubai, United Arab Emirates</p>
            </div>
          </div>
          <div className="about-info">
            <p className="about-info-description">
              Hello, I&apos;m <b>Dawood Khan</b>, CTO/Principal Engineer at Thndr, Dubai UAE
            </p>

            <p className="about-info-description">
            I am a seasoned professional with 20 years of experience delivering cutting-edge solutions in e-commerce, mobility, and industrial automation. My expertise spans AI, distributed systems (cloud-based and embedded), IoT, and automation tools. I excel at applying research to real-world challenges and leading cross-functional teams with an entrepreneurial, collaborative approach.

With a strong focus on AI, cloud, and IoT, I combine hands-on software development and leadership to drive impactful results. Skilled in both technical and project management, I use agile methodologies to align teams with long-term goals. Outside of work, I enjoy traveling, photography, and reading.  
As an academic, I have, so far, supervised two PhD theses:
</p>
<ol>
  <li>
    <Link href="https://www.linkedin.com/in/owais-bhat-29140814b/" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">Owais Bhat</a>
    </Link> who worked on &quot;Context-aware Deep Learning system for glycemic control in diabetic patients&quot;
  </li>
  <li>
    <Link href="https://www.linkedin.com/in/zubair-khaliq-924836133/" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">Zubair Khaliq</a>
    </Link> who worked on &quot;Development of Deep Learning based Intelligent Automation Framework for User Interface Testing&quot;
  </li>
</ol>
<p className="about-info-description">
In addition to these, I have supervised numerious masters and undergraduate theses and senior year projects, respectively. 
</p>
          </div>
        </div>

        <div className="horizontal-line-break"></div>

        <div className="tools-container">
          <div className="portfolio-section-container">
            <p className="tech-stack-group-heading">Tools & Skills</p>
            <div className="tech-stack-group">
              <div className="tech-stack-division">
                <SiPython className="tech-stack-icon" />
                <p className="tech-stack-name">Python</p>
              </div>

              <div className="tech-stack-division">
                <SiGo className="tech-stack-icon" />
                <p className="tech-stack-name">Go</p>
              </div>

              <div className="tech-stack-division">
                <SiCplusplus className="tech-stack-icon" />
                <p className="tech-stack-name">CPP</p>
              </div>

              <div className="tech-stack-division">
                <SiRust className="tech-stack-icon" />
                <p className="tech-stack-name">Rust</p>
              </div>

              <div className="tech-stack-division">
                <SiZig className="tech-stack-icon" />
                <p className="tech-stack-name">Zig</p>
              </div>

              <div className="tech-stack-division">
                <SiPostgresql className="tech-stack-icon" />
                <p className="tech-stack-name">Postgres</p>
              </div>

              <div className="tech-stack-division">
                <SiKeras className="tech-stack-icon" />
                <p className="tech-stack-name">Keras</p>
              </div>
              <div className="tech-stack-division">
                <SiPytorch className="tech-stack-icon" />
                <p className="tech-stack-name">Pytorch</p>
              </div>

              <div className="tech-stack-division">
                <SiOpencv className="tech-stack-icon" />
                <p className="tech-stack-name">OpenCV</p>
              </div>

              <div className="tech-stack-division">
                <SiMysql className="tech-stack-icon" />
                <p className="tech-stack-name">MySQL</p>
              </div>

              <div className="tech-stack-division">
                <SiRedis className="tech-stack-icon" />
                <p className="tech-stack-name">Redis</p>
              </div>

              <div className="tech-stack-division">
                <SiGit className="tech-stack-icon" />
                <p className="tech-stack-name">Git</p>
              </div>

              <div className="tech-stack-division">
                <SiNginx className="tech-stack-icon" />
                <p className="tech-stack-name">Nginx</p>
              </div>

              <div className="tech-stack-division">
                <SiDocker className="tech-stack-icon" />
                <p className="tech-stack-name">Docker</p>
              </div>

              <div className="tech-stack-division">
                <SiKubernetes className="tech-stack-icon" />
                <p className="tech-stack-name">Kubernetes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}