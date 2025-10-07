import CTAButton from "../ui/CTAButton";
import Header from "../layout/Header";

const Hero = () => {
  return (
    <section className="section_hero background_center" id="inicio">
      <Header />
      <div className="container container_hero">
        <div data-aos="fade-up">
          <h1 className="heading48 white font700 margin12">
            <span className="text_linear_vert">&gt;&gt;</span> Adquira <br />
            <span className="text_linear_vert">seu Website Profissional com a LionCode</span>
          </h1>
          <p className="body16 white margin12 font400">
            Sites modernos, design limpo, desempenho aprimorado, SEO, com o melhor custo-benefício e
            performance garantida!
          </p>
          <CTAButton variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
