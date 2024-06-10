"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "@/hooks/useFetchData";
import { Spinner } from "../Spinner";

let settingsSlider = {
  infinite: true,
  centerMode: true,
  // autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 1500,
  centerPadding: "5px",

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const Reviews = () => {
  const {
    data: testimonials,
    loading,
    error,
  } = useFetchData<Testimonial>("/data/testimonials.json");

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <!--reviews start --> */}
      <section id="reviews" className="reviews">
        <div className="section-header">
          <h2>clients reviews</h2>
          <p>What our client say about us</p>
        </div>

        {loading ? (
          <Spinner pixel={100} />
        ) : (
          <div className="reviews-content">
            <div className="testimonial-carousel">
              <Slider {...settingsSlider}>
                {testimonials.map((item, index) => (
                  <div key={index} className="single-testimonial-box">
                    <div className="testimonial-description">
                      <div className="testimonial-info">
                        <div className="testimonial-img">
                          <img src={item.imgSrc} alt="clients" />
                        </div>
                        {/* <!--/.testimonial-img--> */}
                        <div className="testimonial-person">
                          <h2>{item.name}</h2>
                          <h4>{item.location}</h4>
                          <div className="testimonial-person-star">
                            {[...Array(item.rating)].map((_, index) => (
                              <i className="fa fa-star" key={index}></i>
                            ))}
                          </div>
                        </div>
                        {/* <!--/.testimonial-person--> */}
                      </div>
                      {/* <!--/.testimonial-info--> */}
                      <div className="testimonial-comment">
                        <p>{item.comment}</p>
                      </div>
                      {/* <!--/.testimonial-comment--> */}
                    </div>
                    {/* <!--/.testimonial-description--> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </section>
      {/* <!--/.reviews--> */}
      {/* <!--reviews end --> */}
    </>
  );
};
