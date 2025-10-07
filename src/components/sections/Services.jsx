import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CTAButton from "../ui/CTAButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  const services = [
    {
      title: "Modelos de varios tipos",
      description: "Modelo de varios tipos de sites, criado para ser um produto mais acessível",
      image: "/assets/images/home/card-modelos.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20os%20modelos!",
    },
    {
      title: "Site Instrucional",
      description: "Múltiplas paginas, focado na apresentação da empresa",
      image: "/assets/images/home/card-institucional.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20os%20sites%20institucionais!",
    },
    {
      title: "Landing Page",
      description: "Página única, voltada para conversão de marketing",
      image: "/assets/images/home/card-landing.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20Landing%20Page!",
    },
    {
      title: "Blog",
      description: "Site de conteúdo regular, com foco em tráfego e engajamento",
      image: "/assets/images/home/card-blog.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20Blogs!",
    },
    {
      title: "Portfólio",
      description: "Exibe amostras de trabalhos de profissionais.",
      image: "/assets/images/home/card-portfolio.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20Portf%C3%B3lios!",
    },
    {
      title: "Sistema WEB",
      description: "Site interativo com funcionalidades de software - (sistema no geral)",
      image: "/assets/images/home/card-sistemas.png",
      whatsappText: "Gostaria%20de%20saber%20mais%20sobre%20Sistemas!",
    },
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!wrapper || !scrollContainer) return;

    const sections = gsap.utils.toArray(scrollContainer.querySelectorAll("section"));

    if (sections.length === 0) return;

    // Cleanup previous ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === wrapper) {
        trigger.kill();
      }
    });

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 80px",
        end: () => `+=${scrollContainer.scrollWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.3,
          ease: "power1.inOut",
        },
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === wrapper) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <>
      <section className="section_services wrapper" id="servicos" ref={wrapperRef}>
        <div className="container_scroll scrollx" ref={scrollContainerRef}>
          <section className="left_services">
            <div className="text_style">
              <p className="label font700 upper text_linear_hor">SERVIÇOS</p>
              <div className="line"></div>
            </div>
            <h2 className="heading40 white font700 margin12">
              Confira nossos projetos e <span className="text_linear_hor">contrate o seu!</span>
            </h2>
            <p className="body16 font400 white">
              Nossa especialidade é a <strong>construção de sites modernos,</strong> trazendo um design{" "}
              <strong>limpo e elegante</strong>, se destacando de outros, com um preço justo em relação a sua
              qualidade.
            </p>
          </section>
          <div className="right_services">
            {services.map((service, index) => (
              <section key={index} className="card_services">
                <div className="top_card_services">
                  <div className="left_card_services">
                    <h3 className="heading24 font700 white margin4">{service.title}</h3>
                    <p className="body14 white font400">{service.description}</p>
                  </div>
                  <div className="right_card_services">
                    <a
                      href={`https://wa.me/5513982051521?text=${service.whatsappText}`}
                      className="body10 ajust_gap8 white font400"
                      target="_blank"
                      rel="noopener noreferrer">
                      Quero este projeto{" "}
                      <img src="/assets/images/home/arrow-card.svg" alt="seta para contato deste serviço" />
                    </a>
                  </div>
                </div>
                <div className="bottom_card_services">
                  <img src={service.image} alt="site modelo" />
                </div>
              </section>
            ))}

            <section className="last_card_services">
              <h3 className="heading40 font700 white">Não encontrou o que procura ?</h3>
              <p className="body14 white font400 margin24">Entre em contato com a gente!</p>
              <CTAButton variant="primary" />
            </section>
          </div>
        </div>
      </section>

      <section className="section_services_mobile">
        <section className="top_services">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">SERVIÇOS</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 white font700 margin12">
            Confira nossos projetos e <span className="text_linear_hor">contrate o seu!</span>
          </h2>
          <p className="body16 font400 white">
            Nossa especialidade é a <strong>construção de sites modernos,</strong> trazendo um design{" "}
            <strong>limpo e elegante</strong>, se destacando de outros, com um preço justo em relação a sua
            qualidade.
          </p>
        </section>

        <div className="swiper mySwiper3" data-aos="fade-up">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            className="mySwiper3">
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="card_services">
                  <div className="top_card_services">
                    <div className="left_card_services">
                      <h3 className="heading24 font700 white margin4">{service.title}</h3>
                      <p className="body14 white font400">{service.description}</p>
                    </div>
                    <div className="right_card_services">
                      <a
                        href={`https://wa.me/5513982051521?text=${service.whatsappText}`}
                        className="body10 ajust_gap8 white font400"
                        target="_blank"
                        rel="noopener noreferrer">
                        Quero este projeto{" "}
                        <img src="/assets/images/home/arrow-card.svg" alt="seta para contato deste serviço" />
                      </a>
                    </div>
                  </div>
                  <div className="bottom_card_services">
                    <img src={service.image} alt="site modelo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="last_card_services">
                <h3 className="heading40 font700 white">Não encontrou o que procura ?</h3>
                <p className="body14 white font400 margin24">Entre em contato com a gente!</p>
                <CTAButton variant="primary" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
