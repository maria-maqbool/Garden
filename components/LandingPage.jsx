'use client'
import React from 'react'
import Link from 'next/link'


const LandingPage = () => {

    return (
        <>
            <div className='lg:flex md:flex md:flex-wrap-reverse sm:flex sm:flex-wrap-reverse flex flex-wrap-reverse justify-center  lg:mt-32 lg:mx-24 md:m-10 md:mt-16 sm:mx-8 sm:mt-20 mx-6 mt-20 bg-[#F4F4F4] '>
                <div className='lg:w-1/3  md:w-full sm:w-full w-full lg:p-10 md:p-8  sm:p-7 p-5 bg-[#a0c965db]  text-[#0c2510] '>
                    <h1 className='text-lg lg:text-5xl  md:text-3xl sm:text-xl font-semibold lg:font-light md:font-medium sm:font-semibold	leading-normal'>Design Your Garden	</h1>
                    <ul className='list-disc pl-4  text-xs lg:text-sm  md:text-sm sm:text-xs my-2 sm:my-4'	>
                        <li>Create your Garden in minutes.</li>
                        <li>Customise, visualise, and send your design to your closest retailer for quotation.</li>
                    </ul>
                    {/* <button  className='my-4 p-1 px-4 bg-[#FFC03C] rounded-2xl' onClick={() => router.push('/design')}>START DESIGNING</button> */}
                    {/* <Link  className='lg:px-4 md:px-3 sm:px-2 px-2 p-2  bg-[#FFC03C] rounded-2xl lg:text-sm text-xs ' href={'/design'} >START DESIGNING</Link> */}
                    <Link className='lg:px-4 md:px-3 sm:px-2 px-2 p-2 bg-[#FFC03C] rounded-2xl lg:text-sm text-xs hover:bg-[#e0a825] hover:text-white transition duration-300' href={'/design'} >
                        START DESIGNING
                    </Link>
                </div>
                <div className='lg:w-2/3 md:w-full sm:w-full  w-full'>
                    <img className='w-full h-full' src="/assets/garden.gif" alt="Design" />
                </div>
            </div>
        </>
    )
}

export default LandingPage