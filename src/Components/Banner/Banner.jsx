import React from 'react'
import BannerImg from "../../assets/4547829.jpg"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in" className="">
            <img className="max-w-[400px] h-[350px] w-full mx-auto object-cover" src={BannerImg} alt="BannerImage" />
          </div>
          <div className="flex flex-col gap-6 justify-center sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Winter Sale Upto 50% Off</h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus at eaque mollitia iure, eveniet sed accusamus, cum quia, a labore neque molestias odit blanditiis nostrum provident aut omnis tenetur excepturi?</p>
             <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-orange-100 dark:bg-orange-400' />
                <p className="">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-orange-100 dark:bg-orange-400' />
                <p className="">Easy Payment Methods</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-orange-100 dark:bg-orange-400' />
                <p className="">Get Offers</p>
              </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner