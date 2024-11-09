import profilePhoto from "../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg";
import photo from "../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";
import rocketLogo from "../assets/Client-First - icons/Icon (2).svg";
import Footer from "./Footer";

function BlogPost({
  username = "Ujjwal Tamrakar",
}: {
  username: string;
}): JSX.Element {
  return (
    <>
      <div className="flex items-center py-14 justify-center">
        <div className="w-16">
          <img src={profilePhoto} alt="profile photo" />
        </div>
        <div className="p-3">
          <h1 className="mb-2 text-purple-900 font-bold">{username}</h1>
          <h3 className="text-gray-600 text-sm font-semibold">
            Posted on Date XYZ
          </h3>
        </div>
      </div>
      <div className="flex flex-col space-y-3  justify-center mx-9">
        <h1 className="font-bold text-[25px] text-center">
          Step-by-step guide to choosing great font pairs
        </h1>
        <div className="flex justify-start mx-6 py-6">
          <img src={rocketLogo} alt="Hello" />
          <h3>Startup</h3>
        </div>
      </div>
      <div className="p-2 flex justify-center">
        <img src={photo} alt="" className="w-full max-w-[90%] h-auto" />
      </div>
      <div className="flex justify-center">
        <div className="mt-7 px-9 flex flex-col justify-center space-y-3 lg:px-20 w-[70%]">
          <h1 className="font-bold text-2xl pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            possimus aperiam facilis.
          </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            sapiente voluptates omnis modi nam doloribus, temporibus quia
            aliquam, nulla nesciunt ratione sunt ab consequuntur deserunt
            blanditiis eaque soluta, laboriosam dolor dolorem suscipit
            exercitationem eveniet natus? Quisquam similique fugit laborum
            corporis, debitis animi ullam laboriosam repellendus!
          </p>
          <h1 className="font-bold text-2xl pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            possimus aperiam facilis.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            suscipit quisquam possimus sed optio libero id aliquid. Architecto
            dignissimos est assumenda quasi vero. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis quasi error quas nisi at et iste,
            atque mollitia. Dolorem illo odit nobis blanditiis suscipit.
            Suscipit debitis, eius sed vitae qui vero corporis aspernatur
            distinctio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            doloremque maiores excepturi porro quo vel sequi et at quos? Eos
            placeat aliquid accusantium voluptatibus consequatur, atque numquam
            delectus adipisci officia optio veniam dolorem hic eligendi beatae?
            Necessitatibus voluptatem corporis mollitia cumque eos ipsa unde,
            ratione id dicta quasi tempora sequi odio dolores, esse, natus minus
            deleniti eveniet laboriosam maxime asperiores ut in? Optio earum,
            cupiditate, mollitia vitae magni cumque, doloribus eos ex distinctio
            deleniti adipisci laboriosam.
          </p>
          <ul className="font-bold space-y-2 list-disc ml-6">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              rerum esse dolorum?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              consequuntur natus nihil!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quas?
            </li>
          </ul>
          <h1 className="font-bold text-2xl pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            possimus aperiam facilis.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            suscipit quisquam possimus sed optio libero id aliquid. Architecto
            dignissimos est assumenda quasi vero. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis quasi error quas nisi at et iste,
            atque mollitia. Dolorem illo odit nobis blanditiis suscipit.
            Suscipit debitis, eius sed vitae qui vero corporis aspernatur
            distinctio?
          </p>
        </div>
      </div>
      <div className="font-bold m-7 text-lg flex justify-center">
        <h1>What to read next</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row justify-evenly space-x-4 p-3 w-[80%]">
          <div className="flex flex-col w-[90%] space-y-3">
            <div>
              <img src={photo} alt="" />
            </div>
            <div className="m-4 w-[80%]">
              <h3 className="text-gray-400 font-semibold">
                By <span className="text-purple-800">John Doe</span> | Aug 23
                2021
              </h3>
              <h1 className="font-semibold text-xl">
                A UX Case Study creating a studious Environment for Students
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                voluptas eos eum maiores praesentium dignissimos sed laborum,
                dolorem odio aut culpa omnis harum deserunt illum at vero!
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[90%] space-y-3">
            <div>
              <img src={photo} alt="" />
            </div>
            <div className="m-4 w-[80%]">
              <h3 className="text-gray-400 font-semibold">
                By <span className="text-purple-800">John Doe</span> | Aug 23
                2021
              </h3>
              <h1 className="font-semibold text-xl">
                A UX Case Study creating a studious Environment for Students
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                voluptas eos eum maiores praesentium dignissimos sed laborum,
                dolorem odio aut culpa omnis harum deserunt illum at vero!
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[90%] space-y-3 ">
            <div>
              <img src={photo} alt="" />
            </div>
            <div className="m-4 w-[80%]">
              <h3 className="text-gray-400 font-semibold">
                By <span className="text-purple-800">John Doe</span> | Aug 23
                2021
              </h3>
              <h1 className="font-semibold text-xl">
                A UX Case Study creating a studious Environment for Students
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                voluptas eos eum maiores praesentium dignissimos sed laborum,
                dolorem odio aut culpa omnis harum deserunt illum at vero!
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 mx-6 border-t-2 border-gray-300" />

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
      <Footer />
    </>
  );
}

export default BlogPost;
