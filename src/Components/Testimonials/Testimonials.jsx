import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
  {
    id: 1,
    name: "Vipul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, quidem nulla, molestiae quo inventore eligendi, impedit obcaecati natus delectus doloremque quos dolore quibusdam maiores?",
    img: "https://picsum.photos/101/101"
  },
  {
    id: 2,
    name: "Satyam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, quidem nulla, molestiae quo inventore eligendi, impedit obcaecati natus delectus doloremque quos dolore quibusdam maiores?",
    img: "https://picsum.photos/102/102"
  },
  {
    id: 3,
    name: "Mayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, quidem nulla, molestiae quo inventore eligendi, impedit obcaecati natus delectus doloremque quos dolore quibusdam maiores?",
    img: "https://picsum.photos/103/103"
  },
  {
    id: 4,
    name: "Krish",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, quidem nulla, molestiae quo inventore eligendi, impedit obcaecati natus delectus doloremque quos dolore quibusdam maiores?",
    img: "https://picsum.photos/104/104"
  },
  {
    id: 5,
    name: "Priyank",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, quidem nulla, molestiae quo inventore eligendi, impedit obcaecati natus delectus doloremque quos dolore quibusdam maiores?",
    img: "https://picsum.photos/105/105"
  },
]

const Testimonials = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
          infinite: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
          infinite: true
        }
      }
    ] 
  }

  return (
    <div className='py-10 mb-10'>
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying..</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eius a, qui, adipisci sed in iure alias architecto odio nobis sit.</p>
        </div>
        <div data-aos="zoom-in" className="">
          <Slider {...settings}>
            {
              TestimonialsData.map((data) => (
                <div className="my-6">
                  <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                    <div className="mb-4">
                      <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs dark:text-slate-300 text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 ">{data.name}</h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials