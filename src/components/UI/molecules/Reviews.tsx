import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';

import { Review } from '../atoms/Review';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/reviews.scss';
import reviewClient from '../../../assets/img/reviews/data';

export const Reviews = () => {
  const [isTablet, setTablet] = useState<boolean>(window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    setSlidesPerView(isMobile ? 1 : isTablet ? 2 : 3);
    function handleResize() {
      setTablet(window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isTablet, isMobile]);
  return (
    <div className='reviews'>
      <div className='container__text'>
        <FormattedMessage id='reviews-title'>
          {message => (
            <ReactMarkdown className='reviews__title'>
              {`${message}`}
            </ReactMarkdown>
          )}
        </FormattedMessage>
      </div>
      <div className='container'>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          spaceBetween={22}
          slidesPerView={slidesPerView}
          navigation
          autoplay={{
            delay: 6000,
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
        >
          {reviewClient.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Review
                review={
                  <FormattedMessage id={item.id}>
                    {message => <ReactMarkdown>{`${message}`}</ReactMarkdown>}
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
