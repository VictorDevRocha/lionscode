import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  const partners = [
    { name: "Cloudflare", logo: "/assets/images/home/cloudfare.svg" },
    { name: "AWS", logo: "/assets/images/home/aws.svg" },
    { name: "Gmail", logo: "/assets/images/home/gmail.svg" },
    { name: "Hostinger", logo: "/assets/images/home/hostinger.svg" },
    { name: "WordPress", logo: "/assets/images/home/wordpress.svg" },
  ];

  return (
    <section className="section_partner" id="parceiros">
      <div className="container">
        <div className="top_partner" data-aos="fade-up">
          <div className="text_style">
            <p className="label font700 upper text_linear_hor">PARCEIROS</p>
            <div className="line"></div>
          </div>
          <h2 className="heading40 white font700">Confira nossos parceiros!</h2>
        </div>
        <div className="bottom_partner" data-aos="fade-up">
          {partners.map((partner, index) => (
            <img key={index} src={partner.logo} alt="parceiro" />
          ))}
        </div>
      </div>

      {/* Mobile Swiper */}
      <div className="swiper mySwiper2" data-aos="fade-up">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          className="mySwiper2">
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <img src={partner.logo} alt="parceiro" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
