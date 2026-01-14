import { SiGithub, SiLinkedin } from "react-icons/si";

function Icon({ icon_name, normal_color, hover_color, icon_size }) {
  const IconComponent = icon_name === "github" ? SiGithub : SiLinkedin;
  const brandColor = icon_name === "github" ? "#fff" : "#0e76a8";

  return (
    <div className="icon-wrapper">
      <IconComponent
        style={{
          color: normal_color,
          fontSize: icon_size,
          transition: 'all 0.3s ease',
        }}
      />
      <style jsx>{`
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .icon-wrapper:hover :global(svg) {
          color: ${brandColor} !important;
          filter: drop-shadow(0 0 8px ${brandColor});
        }
      `}</style>
    </div>
  );
}

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {props.github && (
            <a
              href="https://github.com/ddak"
              className="social-link"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <Icon
                icon_name="github"
                normal_color={props.normal_color || "#a1a1aa"}
                icon_size={props.icon_size || "24px"}
              />
            </a>
          )}

          {props.linkedin && (
            <a
              href="https://www.linkedin.com/in/dawood-khan-phd/"
              className="social-link"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Icon
                icon_name="linkedin"
                normal_color={props.normal_color || "#a1a1aa"}
                icon_size={props.icon_size || "24px"}
              />
            </a>
          )}
        </div>

        {props.need_copy_right && (
          <p className="copyright">
            <span className="terminal-prompt">$</span> Dawood Khan © {new Date().getFullYear()}
          </p>
        )}
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
          border-top: 1px solid rgba(0, 240, 255, 0.1);
          padding: ${props.vertical_padding || "24px"} ${props.horizontal_padding || "5vw"};
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(0, 240, 255, 0.1);
          border-color: rgba(0, 240, 255, 0.3);
          transform: translateY(-2px);
        }

        .copyright {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          color: #71717a;
          margin: 0;
        }

        .terminal-prompt {
          color: #00f0ff;
          margin-right: 8px;
        }

        @media screen and (max-width: 640px) {
          .footer {
            padding: 20px 4vw;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </footer>
  );
}
