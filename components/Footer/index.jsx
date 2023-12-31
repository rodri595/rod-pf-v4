import "./style.css";
import Link from "next/link";
import Icon from "../Icon";
const footer = () => {
  return (
    <footer className="footer--container aic anim ">
      <div className="footer-content aic anim debug">
        <div className="footer-brand aic anim">
          <Icon name="logo" />
        </div>
        <div className="footer-body aic">
          <Link
            href="mailto:rodrigo@magistralem.com"
            className="footer-email aic anim"
          >
            rodrigo@magistralem.com
          </Link>
          <div className="footer-row2 aic">
            <span className="footer-socials aic">
              <Link
                href="https://www.instagram.com/rodrigoandree__/"
                target="_blank"
                className="footer-social aic "
              >
                <Icon name="instagram" className="anim" />
              </Link>
              <Link
                href="https://github.com/rodri595"
                target="_blank"
                className="footer-social aic "
              >
                <Icon name="github" size="18" className="anim" />
              </Link>
            </span>
            <span className="footer-copy aic ">
              © {new Date().getFullYear()} Made with 💖 by rodri.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
