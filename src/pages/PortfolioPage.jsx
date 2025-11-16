import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      name: "Anna Center",
      slug: "anna",
      category: "One Page",
      thumbnail: "/assets/images/portfolio/anna-capa.png",
      fullImage: "/assets/images/portfolio/anna-min.png",
      url: "https://annacenter.renovedigital.com.br",
    },
    {
      id: 2,
      name: "Decks By Caio",
      slug: "decks",
      category: "Institucional",
      thumbnail: "/assets/images/portfolio/decks-capa.png",
      fullImage: "/assets/images/portfolio/decks-min.png",
      url: "https://decksbycaio.com",
    },
    {
      id: 3,
      name: "Evollo",
      slug: "evollo",
      category: "Institucional",
      thumbnail: "/assets/images/portfolio/evollo-capa.png",
      fullImage: "/assets/images/portfolio/evollo-min.png",
      url: "https://evollo.com.br",
    },
    {
      id: 4,
      name: "HexaDigital",
      slug: "hexadigital",
      category: "Institucional",
      thumbnail: "/assets/images/portfolio/hexadigital-capa.png",
      fullImage: "/assets/images/portfolio/hexadigital-min.png",
      url: "https://hexadigital.com.br",
    },
    {
      id: 5,
      name: "WaeBot",
      slug: "waebot",
      category: "One Page",
      thumbnail: "/assets/images/portfolio/waebot-capa.png",
      fullImage: "/assets/images/portfolio/waebot-min.png",
      url: "https://waebot.com.br",
    },
    {
      id: 6,
      name: "Wae Tecnologia",
      slug: "wae",
      category: "Institucional",
      thumbnail: "/assets/images/portfolio/wae-capa.png",
      fullImage: "/assets/images/portfolio/wae-min.png",
      url: "https://waetecnologia.com.br",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Previne scroll do body
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restaura scroll do body
  };

  return (
    <div className="portfolio-page">
      <Header />

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="heading64 font700 white margin24">
              Nossos Projetos: <br />
              <span className="text_linear_hor">Transformando Ideias em Realidade Digital</span>
            </h1>
            <p className="body20 font400 white margin32 max-width-900">
              Conheça alguns dos sites que desenvolvemos com excelência, design moderno e performance
              otimizada. Cada projeto é único e desenvolvido com dedicação para atender as necessidades
              específicas de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">PORTFÓLIO</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Projetos que Fazem a Diferença
          </h2>

          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => openModal(project)}>
                <div className="portfolio-card-header">
                  <span className="portfolio-category label font700 upper text_linear_hor">
                    {project.category}
                  </span>
                  <h3 className="heading24 font700 white">{project.name}</h3>
                </div>
                <div className="portfolio-card-image">
                  <img src={project.thumbnail} alt={project.name} loading="lazy" />
                  <div className="portfolio-card-overlay">
                    <span className="body16 white font700">Ver Projeto Completo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="portfolio-cta-container" data-aos="fade-up">
            <p className="body18 font400 white text-center margin16">
              Esses são apenas alguns dos nossos projetos. Temos muito mais trabalhos realizados com
              excelência e dedicação. Entre em contato para conhecer todo o nosso portfólio!
            </p>
            <a
              href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tipos%20de%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-cta-button">
              <span>Fale com a gente agora!</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={closeModal} aria-label="Fechar modal">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="portfolio-modal-header">
              <div>
                <span className="portfolio-modal-category label font700 upper text_linear_hor">
                  {selectedProject.category}
                </span>
                <h3 className="heading30 font700 white margin8">{selectedProject.name}</h3>
              </div>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-modal-link body14 font700"
                onClick={(e) => e.stopPropagation()}>
                Visitar Site
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="portfolio-modal-image-wrapper">
              <img
                src={selectedProject.fullImage}
                alt={`${selectedProject.name} - Visualização completa`}
                className="portfolio-modal-image"
              />
            </div>

            {/* CTA Button no Modal */}
            <div className="portfolio-modal-cta">
              <a
                href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tipos%20de%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-modal-cta-button"
                onClick={(e) => e.stopPropagation()}>
                <span>Fale com a gente agora!</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioPage;
