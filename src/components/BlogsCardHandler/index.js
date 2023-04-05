import "./index.css";
import BlogCard from "../BlogCard";

const blogsDetails = [
    {
      id: 1,
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/bac5/6256/ce4eb039199c7ba47d354e95c16929ef?Expires=1681689600&Signature=Gdz8tP0bIKCcCDJHb7i~Q~djgtK7LPdfByrBFUP9GgvACvsVAeeCW36PQtVog6Ti30OzYAF-wSp5ICyeK9dXazk229x5s2Uq~iQ5kofhS2jmxqe7fKrKJog0tHeaj1by1Dzs~9sQUoF8VU6kGn4IgNpCAEc52wkU3fGdILLaz2V83TpxBolK-gRqC0YHRfZlQ5iVFki0rY4VZOiqP~0Bdt~NlKflQ6ZB7DsOqEbzlPh3cUW5-y-jpMxRhpUd0xrPBORtkhLC2ELC2izvrwjjx6n0YXeU65hB5W5wEcO4Q4PmmMwrWfwgXPU6czKWD2rf6atGhb2rGfMMB55djjybnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      headerText: "Guide for personal property Buying",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
    {
      id: 2,
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/15f6/2f2a/dd782045f11d8692e96200b1f2c9b67e?Expires=1681689600&Signature=PlLBUl490a4VpplK7pByVwpVcOYfpmApqJlJt~ziv3~KUABdw7SsGDGUTyYEiNelJuqnqRVPGgDu3ohkyq9OwyrtOoIfDWHlucIVK2JWA5vuh0TA50HZpaCOy44W-1NDgEewY5yhg5FjOLfZI1un4nyx-Fi9MOPn2BFeexU5nRA5W07MGgbUT5SaeO4PRkK~NI7FTWE3QUmQ3uqCxQpQYrKMx3pA1u0vyBH2orltal9AyNLXeIkgapjZPv48ZW~W~W3U8lccdgApPjOK9C7n6aQqFKdshkC8udHkRH5PdWRLLtXBmeJOt0BsMyZ56NmRqifLFHvrikdQIkE~1SZPng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      headerText: "Guide for personal property Buying",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
    {
      id: 3,
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/9983/742f/12ec4e8cf7e8213698c7e2f1d28c7956?Expires=1681689600&Signature=Bz9vhM2M3Dc9Sb4~tWNEuIruzn3LKRYW3nOgNKy4aHiaBuLkU7WmK9n2fDiKbzuX6ZArUQCNQ6wQqmbJLAQI-igXEJES38EOSBPZhW0k6ENzNq4e~Cbcc4UWwdoLbXaKDY0jFb96iHDpi~bb6CZGzKNODlQipvw0rUxnUIJVOlKFhqBiGM10Nc~~n2reMy6BWirQFmRXEohodJLBDOMTToWf7Plh5BR~1IDNY-zdCG~D2XcejzUCAtBx~ndPL94MTmh8UsisLCqoEvV0LmtnLnfme~1XrhCHBk0rRk7lJknhLLf0ms8VhsecRri~Ij0gRCRb5ggQJckeVy5jA4UDNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      headerText: "Guide for personal property Buying",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
  ];

  const BlogsCardHandler = () => {
    return (
      <div className="blogs-bg-container">
        <h1 className="blogs-main-header">Blogs</h1>
        <div className="blogs-card-container">
          {blogsDetails.map((eachBlogCard) => (
            <BlogCard
              key={eachBlogCard.id}
              blogCardDetails={eachBlogCard}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default BlogsCardHandler;
