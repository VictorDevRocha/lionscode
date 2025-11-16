import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import AOS from "aos";
import "aos/dist/aos.css";

const CreateWebsitePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Criação de Site - Orçamento Gratuito",
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
        subject: "Criação de Site - Orçamento Gratuito",
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
              Criação de Site Profissional: <br />
              <span className="text_linear_hor">Transforme Sua Ideia em Realidade Digital</span>
            </h1>
            <p className="body20 font400 white margin32 max-width-900">
              Ainda não tem um site para o seu negócio? Está na hora de marcar presença online! Criamos sites
              modernos, rápidos e prontos para aparecer no Google, conquistar clientes e fazer sua empresa
              crescer.
            </p>
            <a
              href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20criar%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="btn_cta1">
              <span>Solicitar Orçamento Gratuito</span>
              <img src="/assets/images/home/arrow-card.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="evolution-evidence">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">POR QUE TER UM SITE?</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Por que sites bem feitos fazem diferença para seu negócio?
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
              <h3 className="heading24 font700 white margin12">Apareça nas Buscas do Google</h3>
              <p className="body16 font400 white margin16">
                Sites rápidos e bem estruturados aparecem nas primeiras posições quando alguém pesquisa por
                serviços como o seu no Google. Isso significa mais clientes te encontrando organicamente.
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
              <h3 className="heading24 font700 white margin12">Trabalhe Enquanto Dorme</h3>
              <p className="body16 font400 white margin16">
                Seu site fica disponível 24 horas por dia, 7 dias por semana. Clientes podem conhecer seus
                serviços, ver preços e entrar em contato mesmo fora do horário comercial.
              </p>
              <span className="evidence-source">Fonte: Pesquisa de Mercado Digital</span>
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
              <h3 className="heading24 font700 white margin12">Mais Credibilidade para Seu Negócio</h3>
              <p className="body16 font400 white margin16">
                81% dos consumidores pesquisam online antes de comprar. Ter um site profissional transmite
                confiança e mostra que sua empresa é séria e atualizada.
              </p>
              <span className="evidence-source">Fonte: BrightLocal Consumer Review</span>
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
              <h3 className="heading24 font700 white margin12">Competir de Igual para Igual</h3>
              <p className="body16 font400 white margin16">
                Seus concorrentes já têm site? Então você está perdendo clientes para eles. Um site bem feito
                nivela o jogo e até te coloca na frente de empresas maiores no Google.
              </p>
              <span className="evidence-source">Fonte: Estudos de Comportamento do Consumidor</span>
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
              <h3 className="heading24 font700 white margin12">Funciona no Celular</h3>
              <p className="body16 font400 white margin16">
                Mais de 60% das pessoas acessam sites pelo celular. Criamos sites que funcionam perfeitamente
                em qualquer dispositivo: computador, tablet ou smartphone.
              </p>
              <span className="evidence-source">Fonte: Google Mobile-First Index</span>
            </div>

            <div className="evidence-card" data-aos="fade-up" data-aos-delay="600">
              <div className="evidence-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 2V8"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 40V46"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.92 8.92L13.76 13.76"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.24 34.24L39.08 39.08"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 24H8"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 24H46"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.92 39.08L13.76 34.24"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.24 13.76L39.08 8.92"
                    stroke="url(#gradient6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="24" r="8" fill="url(#gradient6)" opacity="0.2" />
                  <circle cx="24" cy="24" r="8" stroke="url(#gradient6)" strokeWidth="2" />
                  <defs>
                    <linearGradient
                      id="gradient6"
                      x1="2"
                      y1="2"
                      x2="46"
                      y2="46"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B00" />
                      <stop offset="1" stopColor="#FFB800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="heading24 font700 white margin12">Sites Rápidos Vendem Mais</h3>
              <p className="body16 font400 white margin16">
                Se seu site demora mais de 3 segundos para carregar, você perde clientes. Criamos sites
                ultrarrápidos que mantêm os visitantes navegando e aumentam suas vendas.
              </p>
              <span className="evidence-source">Fonte: Google/SOASTA Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="evolution-problem">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">SEM SITE, VOCÊ PERDE</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            O que acontece quando você não tem um site?
          </h2>

          <div className="problem-grid">
            <div className="problem-card" data-aos="fade-up" data-aos-delay="100">
              <div className="problem-number">01</div>
              <h3 className="heading24 font700 white margin12">Clientes Não Te Encontram</h3>
              <p className="body16 font400 white">
                Quando alguém pesquisa no Google por serviços como o seu, quem aparece são seus concorrentes.
                Sem site, você é invisível para novos clientes que estão procurando exatamente o que você
                oferece.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="200">
              <div className="problem-number">02</div>
              <h3 className="heading24 font700 white margin12">Parece Desatualizado</h3>
              <p className="body16 font400 white">
                Em 2025, não ter um site faz sua empresa parecer desatualizada ou até mesmo não confiável.
                Clientes esperam encontrar informações online antes de fazer negócio com qualquer empresa.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="300">
              <div className="problem-number">03</div>
              <h3 className="heading24 font700 white margin12">Perde Vendas Fora do Horário</h3>
              <p className="body16 font400 white">
                Você só vende quando está aberto? Sem site, você perde todos os clientes que pesquisam à
                noite, nos fins de semana ou em qualquer momento fora do seu horário comercial.
              </p>
            </div>

            <div className="problem-card" data-aos="fade-up" data-aos-delay="400">
              <div className="problem-number">04</div>
              <h3 className="heading24 font700 white margin12">Depende Só de Indicações</h3>
              <p className="body16 font400 white">
                Sem presença online, você depende apenas de indicações e clientes que já te conhecem. Um site
                te abre um mercado muito maior de pessoas que nunca ouviram falar de você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="evolution-solution">
        <div className="container">
          <div className="text_style center" data-aos="fade-up">
            <p className="label font700 upper text_linear_hor">O QUE VOCÊ RECEBE</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            Como criamos seu site profissional
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
                <h3 className="heading28 font700 white margin12">Design Profissional e Bonito</h3>
                <p className="body16 font400 white">
                  Criamos um layout moderno e atraente que funciona perfeitamente em qualquer dispositivo:
                  computador, tablet e celular. Seu site vai impressionar visitantes e transmitir
                  profissionalismo.
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
                <h3 className="heading28 font700 white margin12">Preparado para Aparecer no Google</h3>
                <p className="body16 font400 white">
                  Otimizamos seu site para que ele apareça quando clientes pesquisarem por serviços como o seu
                  no Google. Isso significa mais visitas de pessoas realmente interessadas no que você
                  oferece.
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
                <h3 className="heading28 font700 white margin12">Formulário de Contato Funcional</h3>
                <p className="body16 font400 white">
                  Incluímos formulários para clientes entrarem em contato, botões de WhatsApp e todas as
                  informações importantes. Facilitamos ao máximo para o cliente te encontrar e falar com você.
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
                <h3 className="heading28 font700 white margin12">Carregamento Super Rápido</h3>
                <p className="body16 font400 white">
                  Ninguém gosta de esperar! Criamos sites que carregam rapidinho, em menos de 2 segundos. Isso
                  mantém os visitantes no seu site e melhora sua posição no Google.
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
            <p className="label font700 upper text_linear_hor">BENEFÍCIOS</p>
            <div className="line"></div>
          </div>

          <h2 className="heading40 font700 white margin24 text-center" data-aos="fade-up">
            O que você ganha tendo um site profissional?
          </h2>

          <div className="results-grid">
            <div className="result-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="result-metric text_linear_hor">24/7</div>
              <p className="body16 font700 white">Seu negócio aberto o tempo todo</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="result-metric text_linear_hor">Mais</div>
              <p className="body16 font700 white">Clientes te encontrando no Google</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="result-metric text_linear_hor">Maior</div>
              <p className="body16 font700 white">Credibilidade e confiança</p>
            </div>

            <div className="result-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="result-metric text_linear_hor">Melhor</div>
              <p className="body16 font700 white">Apresentação dos seus serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="evolution-cta-final">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="heading48 font700 white margin24 text-center">
              Pronto para criar seu site e <span className="text_linear_hor">conquistar novos clientes</span>?
            </h2>
            <p className="body18 font400 white margin32 text-center max-width-800">
              Entre em contato agora e receba um orçamento gratuito. Vamos conversar sobre seu negócio e criar
              um site que realmente faça diferença para você.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20criar%20meu%20site."
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
              <p className="label font700 upper text_linear_hor">FALE CONOSCO</p>
              <div className="line"></div>
            </div>

            <h2 className="heading40 font700 white margin24 text-center">
              Preencha o formulário e receba seu orçamento gratuito
            </h2>

            <p className="body16 font400 white margin32 text-center max-width-800">
              Nossa equipe entrará em contato para entender o que você precisa e criar o site perfeito para o
              seu negócio.
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
                  placeholder="Conte-nos sobre seu negócio e o que você precisa *"
                  className="body16 font400"
                  disabled={isLoading}></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Solicitar Orçamento Gratuito"}
              </button>
            </form>

            <div className="contact-info">
              <p className="body14 font400 white text-center">Ou entre em contato diretamente:</p>
              <div className="contact-links">
                <a href="tel:+5513982051521" className="contact-link">
                  <img src="/assets/images/home/phone-contact.svg" alt="telefone" />
                </a>
                <a
                  href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20criar%20meu%20site."
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

export default CreateWebsitePage;
