import logo from "../assets/Client-First - IMAGES/Logo.svg";

function Footer() {
  return (
    <>
      <div className="bg-black pb-8">
        <div className="flex justify-between mt-5">
          <div className="mt-6">
            <img src={logo} alt="logo" className="p-3 mx-6 min-w-14" />
          </div>
          <div className="font-semibold text-white mt-6 mx-3 flex space-x-4">
            <ul className="flex justify-center space-x-4 p-2">
              <li className="p-2">
                <a href="#">Home</a>
              </li>
              <li className="p-2">
                <a href="#">About</a>
              </li>
              <li className="p-2">
                <a href="#">Services</a>
              </li>
              <li className="p-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="p-2">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 p-9 m-10 text-white flex justify-between">
          <div className="m-3 mx-6 text-[20px] lg:text-[24px] text-bold lg:w-80">
            <h2>Subscribe to our newsletter to get latest updates and news</h2>
          </div>
          <div className="flex ">
            <input
              type="text"
              placeholder="Enter your Email"
              className="bg-inherit border rounded my-7 mx-3 lg:mx-0 lg:px-9"
            />
            <button className="bg-yellow-500 text-black my-7 px-7 lg:mx-10 p-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-gray-100 mx-10">
          <h2>Finstreet 11B 2561 Fintown</h2>
          <h2>Hello@finstreet.com 020 7993 2905</h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
