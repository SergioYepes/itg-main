import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ServiceItem } from "../atoms/ServiceItem";
import { FormattedMessage } from "react-intl";

import maintenanceDesktop from "../../../assets/img/soporte-desktop.png";
import trainingDesktop from "../../../assets/img/entranamiento-desktop.png";
import uiDesktop from "../../../assets/img/diseñoUx-slider-desktop.png";
import diagnosisDesktop from "../../../assets/img/diagnoticos-slider-desktop.png";
import creationDesktop from "../../../assets/img/creacion-de-Ecommerce-new-desktop.png";
import "../../../styles/service.scss";

export const ServiceList = () => {
  type TypeOrientation = "vertical" | "horizontal" | undefined;

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [orientation, setOrientation] = useState<TypeOrientation>("vertical");

  useEffect(() => {
    setOrientation(isMobile ? "horizontal" : "vertical");

    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, orientation]);

  return (
    <div className="service">
      <div className="service__intro">
        <FormattedMessage id="value-services">
          {(message) => <p className="service__paragraph">{message}</p>}
        </FormattedMessage>
        <FormattedMessage id="value-services-level">
          {(message) => (
            <span className="service__paragraph--level">{message}</span>
          )}
        </FormattedMessage>
      </div>
      <div className="container_link service__container">
        <p className="service__link">
          <strong>ITGLOBERS</strong>.com/services
        </p>
      </div>
      <div className="container service__container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          direction={orientation}
          // autoplay={{
          //   delay: 3000,
          // }}
          speed={800}
          slidesPerView={1}
          //loop={true}
          className="slider__services"
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <ServiceItem
              title="slider-title-create"
              text="slider-paragraph-create"
              desktopImage={creationDesktop}
              image={creationDesktop}
              altText="soporte y mantenimiento"
              nextBtn="slider-title-Technical"
              nextSecondBtn="slider-title-design"
              nextThirdBtn="slider-tittle-support"
              nextFourthBtn="slider-title-trainings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              title="slider-title-Technical"
              text="slider-paragraph-Technical"
              desktopImage={diagnosisDesktop}
              image={diagnosisDesktop}
              altText="diagnóstico técnico para el ecommerce"
              nextBtn="slider-title-design"
              nextSecondBtn="slider-tittle-support"
              nextThirdBtn="slider-title-trainings"
              nextFourthBtn="slider-title-create"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              title="slider-title-design"
              text="slider-paragrah-design"
              desktopImage={uiDesktop}
              image={uiDesktop}
              altText="Diseño UX/UI para el Ecommerce"
              nextBtn="slider-tittle-support"
              nextSecondBtn="slider-title-trainings"
              nextThirdBtn="slider-title-create"
              nextFourthBtn="slider-title-Technical"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              title="slider-tittle-support"
              text="slider-paragraph-support"
              desktopImage={maintenanceDesktop}
              image={maintenanceDesktop}
              altText="Soporte y Mantenimiento"
              nextBtn="slider-title-trainings"
              nextSecondBtn="slider-title-create"
              nextThirdBtn="slider-title-Technical"
              nextFourthBtn="slider-title-design"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              title="slider-title-trainings"
              text="slider-paragraph-trainings"
              desktopImage={trainingDesktop}
              image={trainingDesktop}
              altText="Soporte y Mantenimiento"
              nextBtn="slider-title-create"
              nextSecondBtn="slider-title-Technical"
              nextThirdBtn="slider-title-design"
              nextFourthBtn="slider-tittle-support"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
