import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId = null) => {
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
      <footer>
        <div className="container">
          <div className="top_footer">
            <ul className="links_footer" data-aos="fade-up">
              <a
                href="#"
                onClick={() => handleNavigation("/", "inicio")}
                className="body14 white font700 upper">
                Início
              </a>
              <a
                href="#"
                onClick={() => handleNavigation("/", "sobre")}
                className="body14 white font700 upper">
                Sobre nós
              </a>
              <a
                href="#"
                onClick={() => handleNavigation("/", "servicos")}
                className="body14 white font700 upper">
                Serviços
              </a>
              <a
                href="#"
                onClick={() => handleNavigation("/portfolio")}
                className="body14 white font700 upper">
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
          </div>
          <hr className="divider_footer" data-aos="fade-up" />
          <div className="bottom_footer" data-aos="fade-up">
            <img src="/assets/images/logo.svg" alt="logo" />
            <p className="body16 white font400 margin12">Strength in Code, Power in Solutions</p>
            <div className="links_contact ajust_gap16">
              <a href="tel:+5513982051521" className="ajust_gap4 label white font400">
                <img src="/assets/images/home/phone-footer.svg" alt="telefone" />
                (13) 98205-1521
              </a>
              <a
                href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tipos%20de%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="ajust_gap4 label white font400">
                <img src="/assets/images/home/wpp-footer.svg" alt="whatsapp" />
                (13) 98205-1521
              </a>
              <a href="mailto:victorrochadev0@gmail.com" className="ajust_gap4 label white font400">
                <img src="/assets/images/home/email-footer.svg" alt="e-mail" />
                contato@lioncode.com.br
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy">
        <p className="label white font400">© 2025 LionsCode - Todos os direitos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
