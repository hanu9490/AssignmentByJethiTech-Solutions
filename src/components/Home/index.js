import { Component } from "react";
import Navbar from "../NavbarSection";
import Header from "../Header";
import HwoWeAre from "../HwoWeAreCard";
import OurOfferings from "../OurOfferingsTab";
import OurOfferingCardsHandler from "../OurOfferingCardsHandler";
import OurTeamMemberCardsHandler from "../OurTeamMembersCardHandler";
import BlogsCardHandler from "../BlogsCardHandler";
import ContactUs from "../ContactUs";
import FooterComp from "../Footer"

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Navbar />
        <div className="middle-cont">
          <Header />
          <HwoWeAre />
          <OurOfferings />
          <OurOfferingCardsHandler />
          <OurTeamMemberCardsHandler />
        </div>
        <BlogsCardHandler />
        <div className="contact-us-con">
          <ContactUs />
        </div>
        <FooterComp/>
      </div>
    );
  }
}

export default Home;
