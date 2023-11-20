"use client";
import "./style.css";
import Image from "../Image";
import logo from "@/app/assets/img/brand/logo.svg";
import Link from "next/link";
import Icon from "../Icon";
const Navbar = () => {
  return (
    <header
      className="navbar--container aic"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#homepage"
    >
      <div className="navbar-content aic">
        <div className="navbar-brand aic anim">
          <Image
            src={logo}
            className="navbar-brand-img hover star-rotate"
            priority
            alt="rodrigo's brand logo icon"
          />
        </div>
        <div className="navbar-links aic">
          <div className="navbar-row aic">
            <ul className="navbar-row-links aic">
              <Link className="navbar-link underline" href="/">
                Projects
              </Link>
              <Link className="navbar-link underline" href="/about">
                About
              </Link>
              <Link className="navbar-link underline" href="/team">
                Team
              </Link>
              <Link className="navbar-link underline" href="/contact">
                Contact
              </Link>
            </ul>
            <button className="navbar-row-menu aic anim" type="button">
              <Icon name="menu-04" className="navbar-row-menu-icon" />
            </button>
          </div>
          <div className="navbar-row2 aic ">
            <span className="navbar-row2-link  anim aic">
              <Link className="navbar-link underline aic" href="/">
                <Icon size="20" name="pencil-01" /> Blog
              </Link>
            </span>
            <span className="navbar-row2-link  anim aic">
              <Link className="navbar-link underline aic" href="/">
                <Icon size="20" name="calendar" /> Get in touch
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
