import { FormattedMessage } from "react-intl";
interface IServiceItem {
  title: string;
  text: string;
  nextSecondBtn: string;
  nextThirdBtn: string;
  nextFourthBtn: string;
  nextBtn: string;
  desktopImage: any;
  image: any;
  altText: string;
}

export const ServiceItem = ({
  title,
  text,
  nextBtn,
  nextSecondBtn,
  nextThirdBtn,
  nextFourthBtn,
  desktopImage,
  image,
  altText,
}: IServiceItem) => {
  return (
    <div className="service__item">
      <div className="service__item-left">
        <div className="slider__services--btns">
          <div className="service__text">
            <FormattedMessage id={title}>
              {(message) => <h2 className="service__title">{message}</h2>}
            </FormattedMessage>
            <FormattedMessage id="slider-subtitle-general">
              {(message) => <p className="service__subtitle">{message}</p>}
            </FormattedMessage>

            <FormattedMessage id={text}>
              {(message) => (
                <p className="paragraph_service--description">{message}</p>
              )}
            </FormattedMessage>
          </div>
          <div className="slider__services--btns--seccion">
            <button>
              <FormattedMessage id={nextBtn}>
                {(message) => <p className="paragraph_service">{message}</p>}
              </FormattedMessage>
            </button>
            <button>
              <FormattedMessage id={nextSecondBtn}>
                {(message) => <p className="paragraph_service">{message}</p>}
              </FormattedMessage>
            </button>
            <button>
              <FormattedMessage id={nextThirdBtn}>
                {(message) => <p className="paragraph_service">{message}</p>}
              </FormattedMessage>
            </button>
            <button>
              <FormattedMessage id={nextFourthBtn}>
                {(message) => <p className="paragraph_service">{message}</p>}
              </FormattedMessage>
            </button>
          </div>
        </div>
      </div>
      <picture className="service__image">
        <source srcSet={desktopImage} media="(min-width: 768px)" />
        <img src={image} alt={altText} className="image_slider__service" />
      </picture>
    </div>
  );
};
