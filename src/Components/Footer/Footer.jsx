import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { FaLocationDot, FaMapLocation, FaMapLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa"

const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#about"
  },
  {
    title: "Contact",
    link: "/#contact"
  },
  {
    title: "Blog",
    link: "/#blog"
  }
]

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-24 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              Shoporia
            </h1>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est delectus rem vero distinctio minus voluptatibus modi facere deleniti accusantium, dolorem odio eligendi inventore similique temporibus pariatur cupiditate minima vel illo deserunt. Aspernatur.</p>
          </div>
          <div className="">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 ">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {
                  FooterLinks.map((link)=> (
                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                      {link.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 ">Links</h1>
              <ul className="flex flex-col gap-3">
                {
                  FooterLinks.map((link)=> (
                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                      {link.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="">
                <FaInstagram className='text-3xl' />
              </a>
              <a href="#" className="">
                <FaFacebook className='text-3xl' />
              </a>
              <a href="#" className="">
                <FaLinkedin className='text-3xl' />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaMapLocationDot />
                <p className="">Delhi, New Delhi</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <IoCall />
                <p className="">+91 12345 56789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer