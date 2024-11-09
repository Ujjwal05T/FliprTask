
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>

    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded-md">
        <div className='space-y-4 my-4 py-4'>
            <h3 className='text-lg font-semibold text-center'>Contact Us</h3>
            <h1 className='text-4xl font-semibold text-center'> Let's Start a Conversation</h1>
            <p className='text-gray-600 my-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus a ipsa eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates?</p>
        </div>
        <div className='bg-purple-900 text-white flex flex-row justify-evenly py-9 my-6 space-y-4'>
            <div>
                <h1 className='text-[#F4F4F4] mb-4'>Working Hours</h1>
                <hr className='my-2 border-t-2 border-1 text-[#F4F4F4]' />
                <p className='text-xl font-semibold my-4'>Monday - Friday: <br /> 9:00 AM - 8:00 PM</p>
                <p className='text-[#F4F0F8]'>Our Support Team is available 24/7 </p>
            </div>
            <div>
                <h1 className='text-[#F4F4F4] mb-4'>Contact Us</h1>
                <hr className='my-2 border-t-2 border-1 text-[#F4F4F4]' />
                <p className='text-xl font-semibold my-4'> 020 7993 2905</p>
                <p className='text-[#F4F0F8] my-4'>hello@finsweet.com</p>
                
            </div>
        </div>
      <form>
        <div className="mb-4 border-2">
          <input
            type="text"
            id="name"
            required
            placeholder='Full Name'
            className='w-full p-3'
          />
        </div>
        <div className="mb-4 border-2">
          
          <input
            type="email"
            id="email"
            required
            placeholder='Your Email'
            className='w-full p-3'
          />
        </div>
        <div className="mb-4 border-2">
          
          <input
            type="query"
            id="query"
            required
            placeholder='Query Related'
            className='w-full p-3'
            />
        </div>
        <div className="mb-4 border-2">
          
          <textarea
            id="message"
            rows={4}
            required
            placeholder='Message'
            className='w-full p-3'
          />
        </div>
        <button
          type="submit"
            className="bg-yellow-400 text-black p-3 w-full rounded-md font-semibold"
            >
          Send Message
        </button>
      </form>
      
    </div>
    <Footer/>
            </>
  );
};

export default ContactUs;