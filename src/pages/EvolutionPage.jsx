import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import AOS from "aos";
import "aos/dist/aos.css";

const EvolutionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Evolução Digital - Análise Gratuita",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  // Função para aplicar máscara de telefone
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhone,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          nome: formData.name,
          telefone: formData.phone,
          email: formData.email,
          assunto: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email enviado com sucesso:", result);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "Evolução Digital - Análise Gratuita",
        message: "",
      });

      setStatusMessage("✅ Mensagem enviada com sucesso! Entraremos em contato em breve.");

      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatusMessage(
        "❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp."
      );

      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="evolution-page">
      <Header />

      {/* Hero Section */}
      <section className="evolution-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="heading64 font700 white margin24">
              Evolução Digital: <br />
              <span className="text_linear_hor">Transforme seu Site em uma Máquina de Vendas</span>
            </h1>
            <p className="body20 font400 white margin32 max-width-900">
              Seu site atual está te custando dinheiro? Um site desatualizado não apenas prejudica sua imagem,
              mas também desperdiça oportunidades de negócio. É hora de evoluir.
            </p>
            <a
              href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20gratuita%20do%20meu%20site%20e%20saber%20mais%20sobre%20Evolu%C3%A7%C3%A3o%20Digital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn_cta1">
              <span>Solicitar Análise Gratuita</span>
              <img src="/assets/images/home/arrow-card.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="evolution-evidence">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">DADOS E EVIDÊNCIAS</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Por que sites modernos com bom SEO fazem diferença?
          </h2>

          <div className="evidence-grid">
            <div className="evidence-card" data-aos="fade-up" data-aos-delay="100">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 4L6 14V22C6 32.5 13 42.5 24 44C35 42.5 42 32.5 42 22V14L24 4Z"
                    fill="url(#gradient1)"
                    opacity="0.2"
                  />
                  <path
                    d="M24 4L6 14V22C6 32.5 13 42.5 24 44C35 42.5 42 32.5 42 22V14L24 4Z"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="6"
                      y1="4"
                      x2="42"
                      y2="44"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">Core Web Vitals = Ranking</h3>
              <p className="body16 font400 white margin16">
                O Google confirma: sites com LCP menor que 2.5s, FID menor que 100ms e CLS menor que 0.1
                rankam melhor nos resultados de busca. Performance é fator de ranqueamento oficial.
              </p>
              <span className="evidence-source">Fonte: Google Search Central</span>
            </div>

            <div className="evidence-card" data-aos="fade-up" data-aos-delay="200">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="url(#gradient2)"
                    opacity="0.2"
                  />
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 12V24L32 28"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient2"
                      x1="4"
                      y1="4"
                      x2="44"
                      y2="44"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">Tráfego Orgânico Sustentável</h3>
              <p className="body16 font400 white margin16">
                SEO gera tráfego orgânico consistente sem dependência de anúncios pagos. Essencial para
                pequenas empresas competirem com negócios maiores.
              </p>
              <span className="evidence-source">Fonte: Moz SEO Guide</span>
            </div>

            <div className="evidence-card" data-aos="fade-up" data-aos-delay="300">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42 20L24 8L6 20V38C6 39.0609 6.42143 40.0783 7.17157 40.8284C7.92172 41.5786 8.93913 42 10 42H38C39.0609 42 40.0783 41.5786 40.8284 40.8284C41.5786 40.0783 42 39.0609 42 38V20Z"
                    fill="url(#gradient3)"
                    opacity="0.2"
                  />
                  <path
                    d="M42 20L24 8L6 20V38C6 39.0609 6.42143 40.0783 7.17157 40.8284C7.92172 41.5786 8.93913 42 10 42H38C39.0609 42 40.0783 41.5786 40.8284 40.8284C41.5786 40.0783 42 39.0609 42 38V20Z"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 42V24H30V42"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient3"
                      x1="6"
                      y1="8"
                      x2="42"
                      y2="42"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">Featured Snippets +35% CTR</h3>
              <p className="body16 font400 white margin16">
                Sites otimizados aparecem em Featured Snippets e AI Overviews, aumentando a taxa de cliques em
                35%. Mais visibilidade nos primeiros resultados.
              </p>
              <span className="evidence-source">Fonte: Google Search Central</span>
            </div>

            <div className="evidence-card" data-aos="fade-up" data-aos-delay="400">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 18V38C40 39.0609 39.5786 40.0783 38.8284 40.8284C38.0783 41.5786 37.0609 42 36 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V18"
                    fill="url(#gradient4)"
                    opacity="0.2"
                  />
                  <path
                    d="M40 18V38C40 39.0609 39.5786 40.0783 38.8284 40.8284C38.0783 41.5786 37.0609 42 36 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V18"
                    stroke="url(#gradient4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 6H4V18H44V6Z"
                    stroke="url(#gradient4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 28H28"
                    stroke="url(#gradient4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient4"
                      x1="4"
                      y1="6"
                      x2="44"
                      y2="42"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">Impacto Real nos Negócios</h3>
              <p className="body16 font400 white margin16">
                Vodafone: +8% nas vendas melhorando LCP. Renault: +30% nas conversões com melhor performance.
                NDTV: -50% na taxa de rejeição. Dados reais de empresas reais.
              </p>
              <span className="evidence-source">Fonte: Web.dev Case Studies</span>
            </div>

            <div className="evidence-card" data-aos="fade-up" data-aos-delay="500">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4Z"
                    fill="url(#gradient5)"
                    opacity="0.2"
                  />
                  <path
                    d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4Z"
                    stroke="url(#gradient5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 16V24L30 30"
                    stroke="url(#gradient5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10L18 18"
                    stroke="url(#gradient5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 30L38 38"
                    stroke="url(#gradient5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient5"
                      x1="4"
                      y1="4"
                      x2="44"
                      y2="44"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">UX + SEO = Conversões</h3>
              <p className="body16 font400 white margin16">
                Sites rápidos e mobile-friendly rankam melhor E convertem mais. 60% das buscas vêm de mobile.
                Velocidade, navegação clara e design responsivo impactam rankings e vendas.
              </p>
              <span className="evidence-source">Fonte: Google Mobile-First Index</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="evolution-problem">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">O PROBLEMA</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Por que seu site atual não está funcionando?
          </h2>

          <div className="problem-grid">
            <div className="problem-card" data-aos="fade-up" data-aos-delay="100">
              <div className="problem-number">01</div>
              <h3 className="heading24 font700 white margin12">Design Ultrapassado</h3>
              <p className="body16 font400 white">
                Visitantes julgam sua empresa em menos de 3 segundos. Um design antigo transmite falta de
                profissionalismo e afasta clientes potenciais.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="200">
              <div className="problem-number">02</div>
              <h3 className="heading24 font700 white margin12">Invisível no Google</h3>
              <p className="body16 font400 white">
                Sem otimização SEO adequada, seu site não aparece nas pesquisas. Resultado? Seus concorrentes
                estão conquistando os clientes que deveriam ser seus.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="300">
              <div className="problem-number">03</div>
              <h3 className="heading24 font700 white margin12">Taxa de Conversão Baixa</h3>
              <p className="body16 font400 white">
                Recebe visitas mas não vende? O problema está na estrutura. Sites sem estratégia de conversão
                são apenas cartões de visita digitais desperdiçados.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="400">
              <div className="problem-number">04</div>
              <h3 className="heading24 font700 white margin12">Campanhas que Não Convertem</h3>
              <p className="body16 font400 white">
                Investindo em Google Ads ou Facebook Ads sem retorno? O problema não é o anúncio, é a página
                de destino que não está preparada para converter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="evolution-solution">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">A SOLUÇÃO</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Redesign Completo com Foco em Resultados
          </h2>

          <div className="solution-content">
            <div className="solution-item" data-aos="fade-right">
              <div className="solution-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#grad1)" strokeWidth="2" />
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="url(#grad1)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="grad1" x1="2" y1="12" x2="22" y2="12">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="solution-text">
                <h3 className="heading28 font700 white margin12">Design Moderno e Responsivo</h3>
                <p className="body16 font400 white">
                  Interface profissional alinhada com as últimas tendências de UX/UI. Design que funciona
                  perfeitamente em desktop, tablet e mobile, garantindo a melhor experiência em qualquer
                  dispositivo.
                </p>
              </div>
            </div>

            <div className="solution-item reverse" data-aos="fade-left">
              <div className="solution-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="url(#grad2)" strokeWidth="2" />
                  <path d="M21 21L16.65 16.65" stroke="url(#grad2)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="grad2" x1="3" y1="11" x2="21" y2="11">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="solution-text">
                <h3 className="heading28 font700 white margin12">SEO Estratégico</h3>
                <p className="body16 font400 white">
                  Otimização completa para mecanismos de busca: meta tags estratégicas, estrutura de URLs
                  semânticas, schema markup, velocidade de carregamento otimizada e conteúdo estratégico para
                  ranquear no Google.
                </p>
              </div>
            </div>

            <div className="solution-item" data-aos="fade-right">
              <div className="solution-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#grad3)" strokeWidth="2" />
                  <path d="M9 9H15M9 13H15M9 17H12" stroke="url(#grad3)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="grad3" x1="3" y1="12" x2="21" y2="12">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="solution-text">
                <h3 className="heading28 font700 white margin12">Landing Pages de Alta Conversão</h3>
                <p className="body16 font400 white">
                  Páginas de destino estrategicamente planejadas para Google Ads, Facebook Ads e campanhas de
                  marketing. Estrutura persuasiva com CTAs eficientes que transformam visitantes em leads
                  qualificados.
                </p>
              </div>
            </div>

            <div className="solution-item reverse" data-aos="fade-left">
              <div className="solution-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#grad4)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="grad4" x1="3" y1="12" x2="21" y2="12">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="solution-text">
                <h3 className="heading28 font700 white margin12">Performance Máxima</h3>
                <p className="body16 font400 white">
                  Velocidade de carregamento ultrarrápida com Core Web Vitals otimizados. Sites até 10x mais
                  rápidos melhoram o ranking no Google e aumentam drasticamente as taxas de conversão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="evolution-results">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">RESULTADOS</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            O que você ganha com a Evolução Digital?
          </h2>

          <div className="results-grid">
            <div className="result-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="result-metric text_linear_hor">Maior</div>
              <p className="body16 font700 white">Visibilidade no mercado digital</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="result-metric text_linear_hor">Melhor</div>
              <p className="body16 font700 white">Experiência para seus clientes</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="result-metric text_linear_hor">Mais</div>
              <p className="body16 font700 white">Feedbacks positivos e engajamento</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="result-metric text_linear_hor">Superior</div>
              <p className="body16 font700 white">Performance e carregamento rápido</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="evolution-cta-final">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="heading48 font700 white margin24 text-center">
              Pronto para transformar seu site em uma{" "}
              <span className="text_linear_hor">máquina de resultados</span>?
            </h2>
            <p className="body18 font400 white margin32 text-center max-width-800">
              Entre em contato agora e receba uma análise gratuita do seu site atual. Vamos mostrar exatamente
              como podemos multiplicar seus resultados online.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20gratuita%20do%20meu%20site%20e%20saber%20mais%20sobre%20Evolu%C3%A7%C3%A3o%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="btn_cta1">
                <span>Falar no WhatsApp</span>
                <img src="/assets/images/home/arrow-card.svg" alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="evolution-contact" id="contato">
        <div className="container">
          <div className="evolution-contact-content" data-aos="fade-up">
            <div className="text_style center">
              <p className="label font700 upper text_linear_hor">SOLICITE SUA ANÁLISE</p>
              <div className="line"></div>
            </div>

            <h2 className="heading40 font700 white margin24 text-center">
              Preencha o formulário e receba uma análise gratuita
            </h2>

            <p className="body16 font400 white margin32 text-center max-width-800">
              Nossa equipe entrará em contato para entender suas necessidades e mostrar como podemos
              transformar seu site em uma verdadeira máquina de vendas.
            </p>
          </div>

          <div className="evolution-form-wrapper" data-aos="fade-up" data-aos-delay="200">
            {statusMessage && (
              <div className={`status-message ${statusMessage.includes("✅") ? "success" : "error"}`}>
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="evolution-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nome *"
                    className="body16 font400"
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Telefone *"
                    className="body16 font400"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-mail *"
                  className="body16 font400"
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Conte-nos sobre seu projeto atual *"
                  className="body16 font400"
                  disabled={isLoading}></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Solicitar Análise Gratuita"}
              </button>
            </form>

            <div className="contact-info">
              <p className="body14 font400 white text-center">Ou entre em contato diretamente:</p>
              <div className="contact-links">
                <a href="tel:+5513982051521" className="contact-link">
                  <img src="/assets/images/home/phone-contact.svg" alt="telefone" />
                </a>
                <a
                  href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Evolu%C3%A7%C3%A3o%20Digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link">
                  <img src="/assets/images/home/wpp-contact.svg" alt="whatsapp" />
                </a>
                <a href="mailto:victorrochadev0@gmail.com" className="contact-link">
                  <img src="/assets/images/home/email-contact.svg" alt="e-mail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EvolutionPage;
