import logo from '../assets/Client-First - IMAGES/Logo.svg'

function Navbar() {
  return (
   <div>
    <div className='flex justify-between bg-black'>
        <div>
            <img src={logo} alt="logo" className="p-3 mx-6 min-w-14" />
        </div>
        <div className='font-semibold text-white mx-3 flex space-x-4'>
            <ul className="flex justify-center space-x-4 p-2">
                <li className="p-2"><a href="#">Home</a></li>
                <li className="p-2"><a href="#">About</a></li>
                <li className="p-2"><a href="#">Services</a></li>
                <li className="p-2"><a href="#">Contact Us</a></li>
            </ul>
            <div className='bg-white text-black w-28 text-center p-2 m-2 '>
                <a className=' w-9' href="#">Subscribe</a>
            </div>
        </div>  
    </div>
   </div>
  )
}

export default Navbar