import "./index.css";

const BlogCard = props => {
  const {blogCardDetails} = props
  const {imgUrl, headerText, paragraph} = blogCardDetails
  return (
    <div className="blog-card-con">
      <div className="blog-card">
        <img className="blog-img" alt="offerImage" src={imgUrl} />
        <p className="blog-estate-p">Real Estate, Analysis</p>
        <div className="date-admin-con">
            <p className="blog-date-admin">09 jun 2022</p>
            <p className="blog-date-admin">By Admin</p>
        </div>
        <h1 className="blog-card-header">{headerText}</h1>
        <p className="blog-card-paragraph">{paragraph}</p>
        <button className="blog-card-button">View More</button>
      </div>
    </div>
  );
};

export default BlogCard;
