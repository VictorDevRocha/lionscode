const About = () => {
  return (
    <section className="section_about" id="sobre">
      <div className="container">
        <div className="left_about" data-aos="fade-up">
          <img src="/assets/images/home/about.gif" alt="escolha qual seu tipo de site" />
        </div>
        <div className="right_about" data-aos="fade-up">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">SOBRE NÓS</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 font700 white margin12">Soluções de websites modernos e eficientes</h2>
          <p className="body16 font400 white margin12">
            Na LionCode, criamos{" "}
            <strong>
              websites com design moderno, otimizados para desempenho, SEO e com foco em atender as reais
              necessidades do mercado
            </strong>
            . Fundamos nossa empresa com o propósito de oferecer soluções de alta qualidade a um{" "}
            <strong>custo-benefício justo</strong>, onde muitas agências cobram valores exorbitantes por
            resultados inferiores.
          </p>
          <p className="body16 font400 white">
            Nosso compromisso é entregar{" "}
            <strong>sites funcionais e bem projetados por um preço acessível</strong>, garantindo sempre a
            satisfação dos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
