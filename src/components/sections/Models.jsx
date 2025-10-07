import CTAButton from "../ui/CTAButton";

const Models = () => {
  return (
    <section className="section_models" id="modelos">
      <div className="container">
        <div className="left_models" data-aos="fade-up">
          <img src="/assets/images/home/image-models.png" alt="site de modelo" />
        </div>
        <div className="right_models" data-aos="fade-up">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">MODELOS</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 white font700 margin8">Projetos de sites a um custo reduzido</h2>
          <p className="body16 font400 white margin24">
            Oferecemos modelos de sites prontos com um <strong>custo mais acessível</strong>, sem abrir mão de
            nossos elevados <strong>padrões de qualidade</strong>. Esses projetos são desenvolvidos com foco
            em eficiência, mantendo o{" "}
            <strong>design moderno e a funcionalidade que são marcas registradas da nossa empresa</strong>.
            Entre em contato e descubra como podemos entregar soluções sob medida para suas necessidades, com
            rapidez e economia
          </p>
          <CTAButton variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Models;
