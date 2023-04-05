import OurOfferingCard from "../OfferCard";
import "./index.css";

const OurOfferingsDetails = [
  {
    id: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/31c0/8948/93c5446b19ca2e081d1c1e4ba2a68907?Expires=1681689600&Signature=bnYQ0ZwtPABChxt5ZW-zGmhmK5AQlbHSum40iRqEwACzgVjLVLJgXOCQVFZgbb2TGUl7MD6XmI6ngtjceZAZBW50sW2npoFMUliifQFY8irbzlx3u3vTm5lCBbHv9TIJ01lJ2IT7wtMmyutlO0YyEnx8OcqcVPv7RIHWrFrBTKCXDTQxCYWo5zwmlqNxTB7~lI3o0mObDcH2Ap~DTlg5Oy8jublNpiG-EmBZN~~FhYIRz02ssFRy2B8FLFLJ~ufPBGtadfBC~PQBjPQ3BTupjIeUv~HlaVwi5pE07GCqMZkH9GYXlJEx-Nt8r68KpgPlzXD9wCE963OyAzXRjMarMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Background verification",
    paragraph:
      "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
  },
  {
    id: 2,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1368/12d4/d1b948a59f112edeee0579ac8ed77549?Expires=1681689600&Signature=KOZ9iV2meUA3WvzeRZJCyRq4VIJ0oiaMXvVkRNZ7kdfX8x8GeItP319K1dPeEBr-WDIdG7r7emspd6SJnTebmGUTpJXdQGdJ19B0BTFRvCwk4RWls3UOIOJ4eMq4Njz9vEG~NfH3p4oAbjaS0iBPUfwN3wPafC-43p23sjZ97tqeXg6kDtQmmWC0i4YYIV5RNAo8o~xkqdxE8zzKPB1v8Q9gj6QDc0Faukq-pYC2cVO-rMjK6S8Y7uyxueA~VBngC9K0gFwPv2cDKr619a~FY8PGot7rvlvNyZ-GSvfFUJimwofgeHO8jxCPWNK2EbrLyht-nd25Xk~p4L0vNnMcpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Virtual site visit",
    paragraph:
      "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
  },
  {
    id: 3,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/e4e5/4cca/e714e681ffa4c7ff93e332caad33ed48?Expires=1681689600&Signature=c4eGjS19Mltknt9irj74yFhdTrEV38IEfQ48wp~ekOZMUgJ5swXkXKh77qLuuBuP62QyCRxfYLmxJZaczwD85g9VdXjJkdaCOY5U6uYNhE13RVc5Ev5pnM66-ezenUbWTKv5FEpMIeOPqjAeBeqCYhvRTy3ksXBZf5rz6qbIgmbgdEukbHFa-6vOC-T5RNO1p6EroVcWxEAT4S4aYCwJBcKu3ZrwCUXUeabrN30dPfAhBb37JpX8o-SyXzLNFqKYb3sXf8kNg1~iVfjzMoRFyTNKWbpqFqFb7XHoFa2UWC4fGYdFEpRDVywQrNzzgiXSevs~2s4qTm8krJHmv7InHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Title diligence",
    paragraph:
      "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
  },
];

const OurOfferingCardsHandler = () => {
  return (
    <div className="our-offering-card-container">
      {OurOfferingsDetails.map((eachCard) => (
        <OurOfferingCard key={eachCard.appId} cardDetails={eachCard} />
      ))}
    </div>
  );
};

export default OurOfferingCardsHandler;
