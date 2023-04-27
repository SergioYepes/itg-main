import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import '../../../styles/testimony.scss';
import { FormattedMessage } from 'react-intl';
import flecha from '../../../assets/img/flecha-derecha.svg';
import testimonyShopping from '../../../assets/img/succesStories/data';

export const Testimony = () => {
  return (
    <div id='success-histories' className='testimony'>
      <div>
        <FormattedMessage id='silder-title'>
          {message => <h1 className='slider-title'>{message}</h1>}
        </FormattedMessage>
      </div>
      <Swiper
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='testimony'
      >
        {testimonyShopping.map(item => {
          return (
            <SwiperSlide>
              <div key={item.name} className='testimony__image'>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={item.className}
                />
                <div className='testimony__banner'>
                  <section>
                    <p className='testimony__title'> {item.name} </p>

                    <FormattedMessage id={item.description}>
                      {message => (
                        <p className='testimony__description'>{message}</p>
                      )}
                    </FormattedMessage>
                  </section>
                  <button>
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      <FormattedMessage id='slider-arrow'>
                        {message => <h1>{message}</h1>}
                      </FormattedMessage>
                      <img src={flecha} alt='flecha hacia la derecha' />
                    </a>
                  </button>
                </div>
                <div className='testimony__bannerLeft'>
                  <p className='testimony__title'> {item.name} </p>
                </div>
                <div className='testimony__bannerRight'>
                  <p className='testimony__title'> {item.name} </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
