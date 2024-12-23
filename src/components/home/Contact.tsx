import React from 'react';
import timeTable from "../../../public/assets/icons/001-timetable.svg"
import telephone from "../../../public/assets/icons/Group 34.svg"
import location from "../../../public/assets/icons/Group 35.svg"
import Image from 'next/image';

const Contact = () => {
    return (
        <div className='mx-auto max-w-7xl bg-[#151515] rounded-lg my-16 py-28'>
            <div className='flex justify-around'>
                <div className='flex gap-4'>
                    <Image src={timeTable} alt='time-table' width={40} height={40} />
                    <div className='text-white space-y-2'>
                    <p className='text-sm font-medium'>We are open monday-friday</p>
                    <h5 className='text-2xl font-bold'>7:00 am - 9:00 pm</h5>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Image src={telephone} alt='time-table' width={40} height={40} />
                    <div className='text-white space-y-2'>
                    <p className='text-sm font-medium'>Have a question?</p>
                    <h5 className='text-2xl font-bold'>+2546 251 2658</h5>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Image src={location} alt='time-table' width={40} height={40} />
                    <div className='text-white space-y-2'>
                    <p className='text-sm font-medium'>Need a repair? our address</p>
                    <h5 className='text-2xl font-bold'>Liza Street, New York</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;