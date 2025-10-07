import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Função para aplicar máscara de telefone
  const formatPhoneNumber = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara conforme o tamanho
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

    // Aplica máscara apenas no campo de telefone
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
      // Enviar email usando EmailJS
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

      // Resetar o formulário
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatusMessage("✅ Mensagem enviada com sucesso! Entraremos em contato em breve.");

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatusMessage(
        "❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp."
      );

      // Limpar mensagem de erro após 5 segundos
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section_contact" id="contato">
      <div className="container">
        <div className="left_contact" data-aos="fade-up">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">Contato</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 white font700 margin8">Fale conosco</h2>
          <p className="body16 font400 white margin24">
            Caso tenha alguma dúvida, critica ou sugestão preencha o formulário que em breve entraremos em
            contato.
          </p>
          <div className="ajust_gap12">
            <a href="tel:+5513982051521">
              <img src="/assets/images/home/phone-contact.svg" alt="telefone" />
            </a>
            <a
              href="https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tipos%20de%20site."
              target="_blank"
              rel="noopener noreferrer">
              <img src="/assets/images/home/wpp-contact.svg" alt="whatsapp" />
            </a>
            <a href="mailto:victorrochadev0@gmail.com">
              <img src="/assets/images/home/email-contact.svg" alt="e-mail" />
            </a>
          </div>
        </div>

        <div className="right_contact" data-aos="fade-up">
          <h3 className="heading24 primary font700 margin16">Envie-nos um e-mail!</h3>

          {statusMessage && (
            <div className={`status-message ${statusMessage.includes("✅") ? "success" : "error"}`}>
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nome *"
                className="body16 gray1 font400"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Telefone *"
                className="body16 gray1 font400"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="E-mail *"
                className="body16 gray1 font400"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Assunto *"
                className="body16 gray1 font400"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Mensagem *"
                className="body16 gray1 font400"
                disabled={isLoading}></textarea>
            </div>

            <button type="submit" className="button_primary body14 font700" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
