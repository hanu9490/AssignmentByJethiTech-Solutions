import "./index.css";

const TeamMemberCard = props => {
  const {memberCardDetails} = props
  const {imgUrl, headerText, paragraph} = memberCardDetails
  return (
    <div className="member-card-con">
      <div className="member-card">
        <img className="member-img" alt="offerImage" src={imgUrl} />
        <h1 className="member-card-header">{headerText}</h1>
        <p className="member-card-paragraph">{paragraph}</p>
        <button className="member-card-button">View More</button>
      </div>
    </div>
  );
};

export default TeamMemberCard;