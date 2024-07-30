import { CiGlobe } from 'react-icons/ci'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (<div>
    <div className='flex justify-center bg-[#2C3E50] text-white py-20'>
        <div className=" w-4/12 text-center ">
            <h3 className='text-3xl pb-2'>LOCATION</h3>
            <p className='p-2'>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
        </div>
        <div className=" w-4/12 text-center">
            <h3 className='text-3xl pb-2'>AROUND THE WEB</h3>
            <div className="icons flex justify-center">
                <div  className='border border-white-600 rounded-full p-2 mx-2 '>
            <FaFacebook />
                </div>
            <div className='border border-white-600 rounded-full p-2 mx-2 '><FaTwitter /></div>
            <div className='border border-white-600 rounded-full p-2 mx-2 '><FaLinkedin /></div>
            <div className='border border-white-600 rounded-full p-2 mx-2 '><CiGlobe /></div>
                
            </div>
        </div>
        <div className=" w-4/12 text-center pe-2">
            <h3 className='text-3xl pb-2'>ABOUT FREELANCER</h3>
            <p className='p-2'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
        </div>
      
    </div>
    <div className='text-center bg-[#1A252F]'>
        <h6 className='text-white py-6'>Copyright © Your Website 2021</h6>
    </div>
  </div>

  )
}
