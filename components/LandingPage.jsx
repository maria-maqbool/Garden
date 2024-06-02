'use client'
import React from 'react'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'


const LandingPage = () => {
    // const router = useRouter();

    return (
        <>
            <div className='lg:flex md:block sm:block block justify-center mt-8 mx-12 bg-[#F4F4F4] '>
                <div className='lg:w-1/3  md:w-full sm:w-full w-full p-10  text-[#004170] '>
                    <h1 className='text-5xl font-light	leading-normal'>Ziptrak® Design Your Blind platform	</h1>
                    <ul className='list-disc pl-4 text-sm my-[20px]'	>
                        <li>Create your Ziptrak® outdoor blind in minutes.</li>
                        <li>Customise, visualise, and send your design to your closest retailer for quotation.</li>
                    </ul>
                    {/* <button  className='my-4 p-1 px-4 bg-[#FFC03C] rounded-2xl' onClick={() => router.push('/design')}>START DESIGNING</button> */}
                    <Link  className=' p-1 px-4 bg-[#FFC03C] rounded-2xl ' href={'/design'} >START DESIGNING</Link>
                </div>
                <div className='lg:w-2/3 md:w-full sm:w-full  w-full'>
                    <img className='w-full' src="/assets/Design-your-blind-FA.gif" alt="Design" />
                </div>
            </div>
        </>
    )
}

export default LandingPage