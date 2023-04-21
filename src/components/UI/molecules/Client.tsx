import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper";
import { FormattedMessage } from "react-intl";
import ReactMarkdown from "react-markdown";
import "swiper/css/grid";
import "../../../styles/client.scss";
import imageClients from "../../../assets/img/clients/data";

export const Client = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [grid, setGrid] = useState<number>(6);

  useEffect(() => {
    setGrid(isMobile ? 1.5 : 6);
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, grid]);

  return (
    <div id="Our-clients" className="client">
      <div className="container">
        <FormattedMessage id="clients-title">
          {(message) => (
            <ReactMarkdown className="client__testimony">
              {`${message}`}
            </ReactMarkdown>
          )}
        </FormattedMessage>
      </div>
      <div>
        <Swiper
          autoplay={{
            delay: 6000,
          }}
          slidesPerView={grid}
          grid={{
            rows: 3,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 2,
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="client__slider--grid"
        >
          <Swiper>
            {imageClients.map((image, index) => (
              <SwiperSlide key={index}>
                <picture className="client__image">
                  <a href={image.link} target="_blank" rel="noreferrer">
                    <img src={image.src} alt={image.alt} />
                  </a>
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </Swiper>
      </div>
    </div>
  );
};
