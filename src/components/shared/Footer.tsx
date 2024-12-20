import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#151515] '>
        <div className="container md:mx-auto">
         <div className='mx-auto max-w-7xl'>
         <div className="grid md:grid-cols-4 gap-4 md:py-28 py-10">
             <div className="md:col-start-1 md:col-end-3">
                 <div className="space-y-3">
                 <Image src="/assets/logo-white.svg" width={70} height={70} alt="logo" />
                 <div className=''>
                 <p className='text-white font-normal leading-6 md:text-base tracking-wider'>
                 Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                 </div>
                 </div>
                 
             </div>
             <div className='space-y-6'>
                 <h3 className='text-white font-medium text-xl leading-8 tracking-wider'>About</h3>
                 <div>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white mt-4 hover:text-[#FF3811] transition duration-300 ease-in-out'>Home</h4>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>Service</h4>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>Contact</h4>
                 </div>
             </div>
             <div className='space-y-6'>
                 <h3 className='text-white font-medium text-xl leading-8 tracking-wider'>Company</h3>
                 <div>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white mt-4 hover:text-[#FF3811] transition duration-300 ease-in-out'>Why Car Doctor</h4>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>About</h4>
                 </div>
             </div>
             <div className='md:col-end-7 md:col-span-2 space-y-4'>
                 <h3 className='text-white font-medium text-xl leading-8 tracking-wider'>Support</h3>
                 <div>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>Support Center</h4>
                 <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>Feedback</h4>
                  <h4 className='text-base font-normal leading-8 tracking-wider text-white hover:text-[#FF3811] transition duration-300 ease-in-out'>Accessability</h4>
                 </div>
           </div>
         </div>
         </div>
        </div> 
     </div>
    );
};

export default Footer;