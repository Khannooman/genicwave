// components/TestimonialsSection.tsx

import React from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialData {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    dotsClass: "slick-dots mt-12 block",
    centerMode: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2> */}
        <Slider {...settings} className="h-full my-1 overflow-visible">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="my-4">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
