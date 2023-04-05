import "./index.css";

const ContactUs = () => {
  return (
    <div className="contactus-bg-container">
      <div className="contact-us-container">
        <h1 className="cotact-us-header">Get In Touch With us To Connect</h1>
        <p className="contact-us-para">Contact Us</p>
        <div className="input-container">
          <div class="input-wrapper">
            <label for="first">Full name</label>
            <input placeholder="|" type="text" />
          </div>
          <div class="input-wrapper">
            <label for="first">Email address</label>
            <input placeholder="lorem@gmail.com" type="text" />
          </div>
          <div class="input-wrapper">
            <label for="first">Phone number</label>
            <input placeholder="+91 9874334467" type="text" />
          </div>
          <div class="input-wrapper">
            <label placeholder="Bangalore" for="first">Country</label>
            <input type="text" />
          </div>
          <div class="input-wrapper">
            <label for="first">Stages</label>
            <input placeholder="i have booked but regisration is not done" type="text" />
          </div>
        </div>
        <button>Submit</button>
      </div>
      <div>
        <img
          className="contact-us-img"
          alt="contactUsIMg"
          src="https://s3-alpha-sig.figma.com/img/9b43/f7bf/7915be8ea97c7781fbb609b097a48e11?Expires=1681689600&Signature=EoUNy8eGrbl~BkUt0-rxmh97hlEvkPlCNXSrHMLNiXGsTvg0Rcp4EtbscSQgDYP4bqnQNpglZEvA9K30RyMAEWHP54G1r2HgGknrb2LPpPr2~2Zs5Y1mwymM-LpOt1LimPWws1x3gGO0rI-F93strL43rMwUxvOTJPNUIVfGaAtYmrIEjQBd-LcCOLr81QUUoM0Hx6vDKiioTGReyVhsFa6dCOOXKF76Jneun8iowVZb1WQFezywmX9bUIeEU0TKip1mdECgOn8sIimX5r7vmk4Q-S3yZatR2UpG5QPZKHp77cme9JBr2pBFmX-zc6CHicTTteRNbJTVpxYQpgMEvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </div>
  );
};

export default ContactUs;
