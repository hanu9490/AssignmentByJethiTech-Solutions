import "./index.css";

const OurOfferings = () => {
  return (
    <div className="our-offering-bg-container">
      <div className="our-offering-con">
        <h1 className="our-offering-header">Our Offerings</h1>
        <p>
          the whole purchase journey can be devided into three stages. for more,
          <span className="span"> Click Here</span>
        </p>
      </div>
      <div className="booking-tabs-con">
        <div className="tab-con">
          <div className="num-con">1</div>
          <h1 className="tab-header">Pre-Booking</h1>
        </div>
        <div className="tab-con tab-2">
          <div className="num-con">2</div>
          <h1 className="tab-header">
            Post-Booking &
            <br />
            Pre-Registration
          </h1>
        </div>
        <div className="tab-con">
          <div className="num-con">3</div>
          <h1 className="tab-header">Post-Registration</h1>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
