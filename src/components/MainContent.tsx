import { useState } from "react";
import Footer from "./Footer";
import photo1 from "../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg";
import photo2 from "../assets/Client-First - IMAGES/white-concrete-building-1838640.svg"
import logo from "../assets/Client-First - IMAGES/Image.svg"
import icon1 from "../assets/Client-First - IMAGES/Logo 1.svg"
import icon2 from "../assets/Client-First - IMAGES/Logo 2.svg"
import icon3 from "../assets/Client-First - IMAGES/Logo 3.svg"
import icon4 from "../assets/Client-First - IMAGES/Logo 4.svg"
import icon5 from "../assets/Client-First - IMAGES/Logo 5.svg"
/**
 *
 *
 * @return {*} 
 */
const MainContent = () => {
  const [showFullText, setShowFullText] = useState(false);
  const author = [
    {
      name: "Floyd Miles",
      role: "Content Writer",
    },
    {
      name: "Dianne Russell",
      role: "Content Writer",
    },
    {
      name: "Jenny Wilson",
      role: "Editor",
    },
    {
      name: "Leslie Alexander",
      role: "Content Writer",
    },
  ];
  const posts = [
    {
      id: 1,
      title: "8 Figma design systems that you can download for free today.",
      author: "Jane Doe",
      date: "Aug 23, 2022",
    },
    {
      id: 2,
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 23, 2022",
    },
    {
      id: 3,
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 23, 2022",
    },
    {
      id: 4,
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 23, 2022",
    },
    {
      id: 5,
      title: "8 Figma design systems that you can download for free today.",
      author: "Jane Doe",
      date: "Aug 23, 2022",
    },
    {
      id: 6,
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 23, 2022",
    },

  ];

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? posts : posts.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <section
        className="bg-gray-800 text-white py-20 px-4 md:px-20 flex flex-col items-start md:items-center"
        style={{
          backgroundImage: "url({photo1})",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="mr-auto">
          <p className="text-sm uppercase text-yellow-500 mb-2">
            Posted on Startup
          </p>
          <h1 className="text-4xl font-bold mb-4">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            By James West | May 23, 2022
          </p>
          <p className="text-gray-400 mb-8">
            This is a placeholder for the article description. It provides a
            quick overview of what the article entails, drawing readers in with
            its intriguing topic.
            {showFullText && (
              <span>
                {" "}
                Additional text that will be shown when the button is clicked.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                reiciendis porro quisquam, maxime repellat ex tempora fuga
                atque! Deserunt accusamus aliquid omnis fugiat consequuntur
                error eum dolor voluptatum, laborum eius.
              </span>
            )}
          </p>
          <button
            onClick={handleReadMore}
            className="bg-yellow-400 text-gray-900 px-6 py-3 font-bold rounded-md">
            {showFullText ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
        {/* Featured Post Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Featured Post</h1>
          <section className="p-6 border border-gray-300 rounded-md shadow-md bg-white">
            <img
              src={photo2} 
              alt="Featured Post"
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                By John Doe | May 23, 2022
              </p>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h2>
              <p className="text-gray-600 mb-4">
                This is a placeholder for the post description. It gives a quick
                overview of the topic, enticing readers to learn more.
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">
                Read More
              </button>
            </div>
          </section>
        </div>

        {/* All Posts Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Posts</h2>
            <button
              onClick={toggleShowAll}
              className="hover:text-gray-400 text-blue-500 text-sm">
              {showAll ? "View All" : "View Less"}
            </button>
          </div>
          <div className="overflow max-h-96">
            <ul>
              {displayedPosts.map((post) => (
                <li
                  key={post.id}
                  className="border-b border-gray-300 py-4 flex space-x-4 hover:bg-customCream ">
                  <div>
                    <p className="text-sm text-gray-500">
                      By {post.author} | {post.date}
                    </p>
                    <h3 className="text-lg font-medium text-gray-800">
                      {post.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-8">
        {/* Double-Colored Line Divider */}
        <div className="flex max-w-5xl mx-auto">
          {/* Left half of the line */}
          <div></div>
          <div className="h-1 w-3/4 ml-44  py-2 bg-yellow-400"></div>
          {/* Right half of the line */}
          <div className="h-1 w-1/4 py-2 bg-purple-700"></div>
        </div>

        {/* About Us & Our Mission Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-gray-300 bg-gray-200 shadow-md">
            {/* About Us */}
            <div className="bg-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                About Us
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                We are a community of content writers who share their learnings
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-gray-700 text-sm font-semibold">
                Read More {">"}
              </a>
            </div>

            {/* Our Mission */}
            <div className="bg-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Our Mission
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Choose A Category Section */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-semibold text-gray-800">
            Choose A Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Category Cards */}
          <div className="p-6 border border-gray-300 rounded-md shadow-md bg-white hover:bg-yellow-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Business
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur ad pisicing elit.
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-md shadow-md bg-white hover:bg-yellow-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Startup
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur ad pisicing elit.
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-md shadow-md bg-white hover:bg-yellow-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Economy
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur ad pisicing elit.
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-md shadow-md bg-white hover:bg-yellow-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technology
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur ad pisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8">
        {/* Why We Started Section */}
        <section className="max-w-5xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={photo1}
              alt="Why We Started"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="relative lg:-left-[150px] lg:top-[60px] bg-white p-8">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
              Why We Started
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 font-semibold rounded-md">
              Discover our story &rarr;
            </button>
          </div>
        </section>

        {/* List of Authors Section */}
        <section className="max-w-5xl mx-auto mb-16 py-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            List of Authors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Author Card */}
            {author.map((auth:string | any, index:number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-[#FBF6EA]">
                <img
                  src={logo}
                  alt={auth.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {auth.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{auth.role}</p>
                <div className="flex justify-center space-x-2 text-gray-600">
                  <a href="#" className="hover:text-blue-500">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured In Section */}
        <section className="text-left py-8">
          <div className="flex justify-center space-x-6">
            <p className="text-gray-500 mb-4">
              We were <br />
              <span className="font-bold">Featured in</span>
            </p>

            <img src={icon1} alt="Logo 1" className="h-8" />
            <img src={icon2} alt="Logo 2" className="h-8" />
            <img src={icon3} alt="Logo 3" className="h-8" />
            <img src={icon4} alt="Logo 4" className="h-8" />
            <img src={icon5} alt="Logo 5" className="h-8" />
          </div>
        </section>
      </div>

      <div className="bg-gray-100 p-8 space-y-16">
        {/* Testimonials Section */}
        <section className="bg-[#FBF6EA] p-8 rounded-lg max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Heading and Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Testimonials
            </h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What people say about our blog
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          {/* Right Column: Testimonial Content */}
          <div className="flex flex-col justify-between space-y-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">Jonathan Vallem</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <span className="sr-only">Previous</span>
                &#8592;
              </button>
              <button className="p-2 bg-black text-white rounded-full hover:bg-gray-500">
                <span className="sr-only">Next</span>
                &#8594;
              </button>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="text-center max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Join our team to be a part of our story
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 font-semibold rounded-md hover:bg-yellow-600">
            Join Now
          </button>
        </section>
      </div>
      
      <Footer />
    </div>
    
  );
};

export default MainContent;
