interface IReview {
  review: any;
  name: string;
  position: any;
  logo?: string;
}
export const Review = ({ review, name, position, logo }: IReview) => {
  return (
    <div className="container__review--item">
      <div className="review">
        <div className="container__logo">
          <img className="logo" src={logo} alt={`logo--${name}`} />
        </div>
        <span className="paragraph_reviews">{review}</span>
        <div>
          <p className="sign__reviews">{name}</p>
          <p className="mayor__reviews">{position}</p>
        </div>
      </div>
    </div>
  );
};
