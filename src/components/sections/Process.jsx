import CTAButton from "../ui/CTAButton";

const Process = () => {
  const processSteps = [
    {
      number: "01.",
      description:
        "Após a escolha do projeto e a negociação, você deve fornecer todas as informações e materiais necessários para o site. Com o envio completo, começará a segunda etapa.",
    },
    {
      number: "02.",
      description:
        "Inicia-se o design conforme o prazo negociado. Após a conclusão, será marcada uma reunião para apresentação. O cliente pode solicitar alterações dentro do escopo acordado. A próxima etapa começa após a sua aprovação final.",
    },
    {
      number: "03.",
      description:
        "Inicia-se o desenvolvimento do projeto, incluindo criação, testes e otimizações. Após a conclusão, o site é entregue e, se necessário, podemos colocá-lo em produção, desde que a tecnologia esteja disponível na hospedagem ou ele pode ser hospedado em nossa hospedagem.",
    },
    {
      number: "04.",
      description:
        "Você valida todo conteudo, e caso não tenha nenhuma ressalva, o projeto é totalmente finalizado.",
    },
  ];

  return (
    <section className="section_process" id="processos">
      <div className="container">
        <div className="top_process" data-aos="fade-up">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">PROCESSOS</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 white font700">
            Como funciona todo o processo para adquirir um website ?
          </h2>
        </div>
        <div className="mid_process">
          {processSteps.map((step, index) => (
            <div key={index} className="card_process" data-aos="fade-up">
              <p className="number_card">{step.number}</p>
              <p className="body16 white font400">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mid_process" data-aos="fade-up">
          <CTAButton variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Process;
