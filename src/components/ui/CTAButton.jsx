const CTAButton = ({ variant = "primary", text, customText }) => {
  const whatsappUrl =
    "https://wa.me/5513982051521?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tipos%20de%20site.";

  const getButtonText = () => {
    if (customText) return customText;
    if (text) return text;

    switch (variant) {
      case "primary":
        return "Fale com a gente agora!";
      case "secondary":
        return "Mande uma mensagem!";
      default:
        return "Fale com a gente agora!";
    }
  };

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fit_content">
      <button className="button_primary body14 font700">{getButtonText()}</button>
    </a>
  );
};

export default CTAButton;
