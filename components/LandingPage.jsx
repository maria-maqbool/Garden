'use client'
import React from 'react'
import Link from 'next/link'


const LandingPage = () => {

    return (
        <>
            <div className='lg:flex md:block sm:block block justify-center lg:m-12 md:m-10 sm:m-8 m-6 bg-[#F4F4F4] '>
                <div className='lg:w-1/3  md:w-full sm:w-full w-full lg:p-10 md:p-8  sm:p-7 p-5  text-[#004170] '>
                    <h1 className='text-lg lg:text-5xl  md:text-3xl sm:text-xl font-semibold lg:font-light md:font-medium sm:font-semibold	leading-normal'>Ziptrak® Design Your Blind platform	</h1>
                    <ul className='list-disc pl-4  text-xs lg:text-sm  md:text-sm sm:text-xs my-2 sm:my-4'	>
                        <li>Create your Ziptrak® outdoor blind in minutes.</li>
                        <li>Customise, visualise, and send your design to your closest retailer for quotation.</li>
                    </ul>
                    {/* <button  className='my-4 p-1 px-4 bg-[#FFC03C] rounded-2xl' onClick={() => router.push('/design')}>START DESIGNING</button> */}
                    <Link  className='lg:px-4 md:px-3 sm:px-2 px-2 p-1  bg-[#FFC03C] rounded-2xl lg:text-sm text-xs ' href={'/design'} >START DESIGNING</Link>
                </div>
                <div className='lg:w-2/3 md:w-full sm:w-full  w-full'>
                    <img className='w-full' src="/assets/Design-your-blind-FA.gif" alt="Design" />
                </div>
            </div>
        </>
    )
}

export default LandingPage