import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import { Review } from "../atoms/Review";
import { FormattedMessage } from "react-intl";
import ReactMarkdown from "react-markdown";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/reviews.scss";
import reviewClient from "../../../assets/img/reviews/data";

export const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container__text">
        <FormattedMessage id="reviews-title">
          {(message) => (
            <ReactMarkdown className="reviews__title">
              {`${message}`}
            </ReactMarkdown>
          )}
        </FormattedMessage>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          spaceBetween={22}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          autoplay={{
            delay: 6000,
          }}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          {reviewClient.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Review
                review={
                  <FormattedMessage id={item.id}>
                    {(message) => <ReactMarkdown>{`${message}`}</ReactMarkdown>}
                  </FormattedMessage>
                }
                name={item.name}
                logo={item.logo}
                position={item.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
