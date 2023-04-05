import "./index.css";
import TeamMemberCard from "../TeamMemberCard";

const OurTeamMembersDetails = [
  {
    id: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1050/7402/26acd2ae5e1ec6bfc35355fffeda5ec3?Expires=1681689600&Signature=LoJfEwvElNcCA51ZYSGrEKKgiWCUP5E47w2PX5EX5hcvmrGZ4Apc1FTTW2qku-WVsO3wSw7eznL9IuYBS6gnrgNNxNZ2MxOBO4F10VC5VHLBb6UfPt-hsji3wMDuAr48FDzLTT0jg5hfq3t6Z7twp-8OJPRTBb19qTkkkuxhwQ4wPSWIf-BW65lygL6WOjKSkUV~kVlScg5zhEer0yvpIZ0x8WEJVqmg4iFR-aLbUb-9XysdqL94iVSFhHbTAk7Q5Mhik4H6R5~6kZkAYrcnWeHZy4vC~rfHb5Q69SFxFtgrHLsDdLf1SZOh-Fo6tQTzUpyx2zOvHbkCGZZd9cQUqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Brajesh Pathak",
    paragraph:
      "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",
  },
  {
    id: 2,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/805d/1c5a/ec010126ddad4bed7601825c4aaaf063?Expires=1681689600&Signature=h6PA~GV41GnTkzeJS-FjMzPuRmZgAY681XMHaiweY6PW3RQWVecXctJzkundg72Fy1WZn3h1lzPNHHcu~4sF6pP1~xoao5G5J30Yx0T~0qs~IsZRo9G0uz0E-PQ9jrmVidFECZVExWAO1vjWo4PEXKB16MfU-wYMiLV5dqgzT8vIvQfBwif~ae-5g6SfcaxL~5OES64pAQ51-euEMBMY3QBNbnesTK3rhr2WDvWp1PeJl8vb1ne1sRp4OcM4zESiK87gbCgxHMoBA378PQoXQKB6ITYtDpS1j9xep0gyOLPKrcbiq1c3MNw0c98UbGZzDXD2~lyfGd8T4boSkVjKkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Deepak Shukla",
    paragraph:
      "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience..",
  },
  {
    id: 3,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/0e1d/65d4/b495e86ca290dce75cf334bd3ee67e50?Expires=1681689600&Signature=g7VpwyxN6gmYoeQqxU9MCj7uw3M5gW5xWUDTy7~3uZBxTtdihx3Rn8ges6ZNscYOqvi9B8KOeRcgjA~Kzb0lSt7B3dCGZSkdiwEUExVWDVOOEEObLJK9OY3Y~LHJTfNnoYR89Z3lfUgPWjHwQmr4t8XUB5huVoHu3zambIWyXjK4rjL6JX5o6vH2zPYeBmCWVzU7ztUUBR9jzqXPTRAd2bVs~Vw57vqpvHWCNt4r4W1llRqoMMYQtndUpx88g0Cb44kyrTr7nN9ij3M77EKWiQx8zz-b0cld7eC6l0zLzTI6YWzCI5hh5TQ9-YKTbtR7TmC36T63TuPTsTPJD6e-Rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    headerText: "Alok Kumar Singh",
    paragraph:
      "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real..",
  },
];

const OurTeamMemberCardsHandler = () => {
  return (
    <div className="our-members-bg-container">
      <h1 className="our-team-main-header">Our Team Members</h1>
      <div className="our-members-card-container">
        {OurTeamMembersDetails.map((eachMemberCard) => (
          <TeamMemberCard
            key={eachMemberCard.id}
            memberCardDetails={eachMemberCard}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeamMemberCardsHandler;
