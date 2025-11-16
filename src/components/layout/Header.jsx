import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CTAButton from "../ui/CTAButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path, sectionId = null) => {
    closeMenu();

    // Se estamos na página atual e há uma seção, fazer scroll
    if (location.pathname === path && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Se for para home com seção específica
    else if (path === "/" && sectionId) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    // Se for para outra página
    else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <nav className="container">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
          <ul className="links_header">
            <a
              href="#"
              onClick={() => handleNavigation("/", "inicio")}
              className="body14 white font700 upper">
              Início
            </a>
            <a href="#" onClick={() => handleNavigation("/", "sobre")} className="body14 white font700 upper">
              Sobre nós
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/", "servicos")}
              className="body14 white font700 upper">
              Serviços
            </a>
            <a href="#" onClick={() => handleNavigation("/portfolio")} className="body14 white font700 upper">
              Portfólio
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/criacao-de-site")}
              className="body14 white font700 upper">
              Criação de Site
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/evolucao-digital")}
              className="body14 white font700 upper">
              Evolução de Site
            </a>
            <a
              href="#"
              onClick={() => handleNavigation(location.pathname, "contato")}
              className="body14 white font700 upper">
              Contato
            </a>
          </ul>
          <div className="ajust_gap12">
            <CTAButton variant="secondary" />
            <div className="menu" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`menu_mobile ${isMenuOpen ? "active" : ""}`}>
        <div className="top_content_mobile">
          <h5 className="heading24 purple font700 primary">
            <img
              className="close_menu"
              src="/assets/images/mobile/arrow-left.svg"
              alt="arrow left purple"
              onClick={closeMenu}
            />
            Menu
          </h5>
        </div>
        <div className="mid_content_mobile">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/", "inicio")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="url(#gradient-home)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="url(#gradient-home)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-home"
                      x1="3"
                      y1="2"
                      x2="21"
                      y2="22"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/", "sobre")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="url(#gradient-sobre)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="url(#gradient-sobre)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-sobre"
                      x1="4"
                      y1="3"
                      x2="20"
                      y2="21"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/", "servicos")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="url(#gradient-servicos)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="url(#gradient-servicos)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="url(#gradient-servicos)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-servicos"
                      x1="2"
                      y1="2"
                      x2="22"
                      y2="22"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/portfolio")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                    stroke="url(#gradient-portfolio)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-portfolio"
                      x1="2"
                      y1="3"
                      x2="22"
                      y2="21"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/criacao-de-site")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="url(#gradient-criacao)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17M2 12L12 17L22 12"
                    stroke="url(#gradient-criacao)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-criacao"
                      x1="2"
                      y1="2"
                      x2="22"
                      y2="22"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Criação de Site
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/evolucao-digital")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="url(#gradient-evolucao)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-evolucao"
                      x1="3"
                      y1="2"
                      x2="21"
                      y2="22"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Evolução de Site
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation(location.pathname, "contato")}
                className="link_mobile font500 body18 gray2 close_menu">
                <svg
                  className="icon_link_mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="url(#gradient-contato)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-contato"
                      x1="3"
                      y1="3"
                      x2="21"
                      y2="21"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom_content_mobile">
          {/* Uncomment if social media needed */}
          {/* 
          <p className="heading18 primary">Nos acompanhe</p>
          <div className="socials_mobile">
            <div className="box_icon_social">
              <img src="/assets/images/mobile/facebook.svg" alt="facebook" />
            </div>
            <div className="box_icon_social">
              <img src="/assets/images/mobile/instagram.svg" alt="instagram" />
            </div>
          </div> 
          */}
        </div>
        <div className="footer_mobile"></div>
      </div>
    </>
  );
};

export default Header;
