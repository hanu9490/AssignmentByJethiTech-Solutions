import "./index.css";

const OurOfferingCard = props => {
  const {cardDetails} = props
  const {imgUrl, headerText, paragraph} = cardDetails
  return (
    <div className="offering-card-con">
      <div className="offering-card">
        <img className="offer-img" alt="offerImage" src={imgUrl} />
        <h1 className="offer-card-header">{headerText}</h1>
        <p className="offer-card-paragraph">{paragraph}</p>
        <button className="offer-buuton">Contact us</button>
      </div>
    </div>
  );
};

export default OurOfferingCard;
