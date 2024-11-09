import groupPhoto from "../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import handPhoto from "../assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg";
import groupPhoto2 from "../assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg";
import Footer from "./Footer";
function AboutUs() {
  const author = [
    {
      name: "Floyd Miles",
      role: "Content Writer",
      imgSrc: "/images/author1.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Content Writer",
      imgSrc: "/images/author2.jpg",
    },
    {
      name: "Jenny Wilson",
      role: "Editor",
      imgSrc: "/images/author3.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Content Writer",
      imgSrc: "/images/author4.jpg",
    },
    {
      name: "Floyd Miles",
      role: "Content Writer",
      imgSrc: "/images/author1.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Content Writer",
      imgSrc: "/images/author2.jpg",
    },
    {
      name: "Jenny Wilson",
      role: "Editor",
      imgSrc: "/images/author3.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Content Writer",
      imgSrc: "/images/author4.jpg",}
  ];
  return (
    <>
      <div className="flex lg:flex-wrap lg:mt-16 flex-col lg:flex-row justify-center items-center">
        <div className="bg-gray-200 p-6 w-[495px] pb-12 z-10">
          <h1 className="px-8">About Us</h1>
          <p className="px-8  lg:text-[34px] font-semibold">
            We are a team of content writers who share their learnings
          </p>
        </div>
        <div className=" w-full lg:w-[40%] lg:ml-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            laudantium deserunt velit explicabo eius, deleniti, consequuntur
            beatae quod voluptates odit quidem natus, omnis fuga minima ad
            magnam cupiditate quibusdam aspernatur maiores assumenda sit. Enim
            cum sunt modi exercitationem vel sed a quaerat vero saepe odit!
          </p>
        </div>
        <div className="w-full lg:mx-9 text-center ">
          <img
            src={groupPhoto}
            alt="hello"
            className="relative lg:-top-12 z-0 "
          />
        </div>
        <div className="flex bg-yellow-400 lg:relative lg:-top-[176px] space-x-4 p-6">
          <div>
            <h2 className="text-2xl font-bold">12+</h2>
            <p>Blogs Published</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">18K+</h2>
            <p>Views on Finsweet</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">30K+</h2>
            <p>Total active users</p>
          </div>
        </div>
        <div className="flex  relative lg:-top-[112px] lg:-left-[440px]">
          <div className="lg:bg-purple-800 bg-inherit lg:w-[220px] text-transparent ">
            sample text
          </div>
          <div className="bg-yellow-400 lg:w-[440px]"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row bg-[#F4F4F4] space-x-5 px-8 py-4 max-w-[95%] justify-evenly pb-12 relative lg:-top-[152px]">
          <div className="flex flex-col justify-start max-w-[45%] space-y-4 ml-14 mt-3">
            <h1>OUR MISSION</h1>
            <h3 className="font-semibold text-2xl">
              Creating Valuable content for creatives all around the world
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              placeat iusto sunt dolorem similique quod ullam perferendis
              veritatis quo labore enim officia dolorum tempore, ut, quae, non
              vitae. Sint obcaecati nesciunt ducimus exercitationem.
            </p>
          </div>
          <div className="flex flex-col justify-start max-w-[45%] space-y-4 mx-8 mt-3">
            <h1>OUR VISION</h1>
            <h3 className="font-semibold text-2xl">
              A plateform that empowers individuals to improve
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.eligendi
              nulla, nesciunt quod illum dicta eaque minima deleniti veritatis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              sint vel sunt.
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row items-center justify-evenly relative lg:-top-[65px]">
        <div className="max-w-2xl mx-6 px-6 space-y-4">
          <h1 className="font-bold text-2xl">Our team of creatives</h1>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            distinctio vel numquam non asperiores? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis hic eveniet totam.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            dolor, tenetur voluptates possimus tempora at nihil suscipit, quas
            quae dolores ipsam voluptatum vitae similique nesciunt numquam.
            Placeat, consectetur harum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatum aut alias doloremque!
          </p>
        </div>
        <div className="box text-transparent lg:bg-yellow-400 lg:w-[70px] lg:h-[65px] rounded-ss-3xl relative lg:left-[80px] lg:-top-[85px] ">
          box
        </div>
        <div className="mx-6 px-4">
          <img src={handPhoto} alt="hello" />
        </div>
      </div>
      <div className="flex lg:flex-row items-center justify-between relative ">
        <div className="max-w-3xl mx-6 px-4">
          <img src={groupPhoto2} alt="hello" />
        </div>
        <div className="box text-transparent lg:bg-purple-900 lg:w-[130px] lg:h-[60px] rounded-full relative lg:right-[600px] lg:top-[150px] ">
          box
        </div>
        <div className="max-w-2xl mx-6 px-6 space-y-4">
          <h1 className="font-bold text-2xl">Why we started this blog</h1>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            distinctio vel numquam non asperiores? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis hic eveniet totam.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            dolor, tenetur voluptates possimus tempora at nihil suscipit, quas
            quae dolores ipsam voluptatum vitae similique nesciunt numquam.
            Placeat, consectetur harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum aut alias doloremque!
          </p>
        </div>
        
      </div>
      <div className="text-center flex justify-center">
        <div className="flex flex-col justify-center mx-5 space-y-5 pt-16 lg:w-[40%]">
          <h1 className="font-bold text-[30px] text-center">
            Join Our team to be a part of our story
          </h1>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui unde
            repudiandae optio?
          </h3>
          <div className="pt-8">
            <button className="bg-yellow-400 text-black m-2 p-3">
              Join Now
            </button>
          </div>
        </div>
        
      </div>
      <div className="max-w-5xl mx-auto mb-16 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            List of Authors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Author Card */}
            {author.map((auth:string | any, index:number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-[#FBF6EA]">
                <img
                  src={auth.imgSrc}
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
        </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
