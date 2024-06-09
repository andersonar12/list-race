"use client";

import { useEffect, useState } from "react";

export const Explore = () => {
  const [exploreItems, setExploreItems] = useState<ExploreItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/exploreItems.json");
        const data = await response.json();
        console.log(data);
        setExploreItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {/* <!--explore start --> */}
      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>explore</h2>
            <p>Explore New place, food, culture around the world and many more</p>
          </div>
          {/* <!--/.section-header--> */}
          <div className="explore-content">
            <div className="row">
              {exploreItems.map((item, index) => (
                <div key={index} className=" col-md-4 col-sm-6">
                  <div className="single-explore-item">
                    <div className="single-explore-img">
                      <img src={item.imgSrc} alt="explore image" />
                      <div className="single-explore-img-info">
                        <button>{item.buttonText}</button>
                        <div className="single-explore-image-icon-box">
                          <ul>
                            <li>
                              <div className="single-explore-image-icon">
                                <i className="fa fa-arrows-alt"></i>
                              </div>
                            </li>
                            <li>
                              <div className="single-explore-image-icon">
                                <i className="fa fa-bookmark-o"></i>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="single-explore-txt bg-theme-1">
                      <h2>
                        <a href="#">{item.title}</a>
                      </h2>
                      <p className="explore-rating-price">
                        <span className="explore-rating">{item.rating.toFixed(1)}</span>
                        <a href="#"> {item.ratingsCount} ratings</a>
                        <span className="explore-price-box">
                          form
                          <span className="explore-price">${item.priceRange}</span>
                        </span>
                        <a href="#">{item.category}</a>
                      </p>
                      <div className="explore-person">
                        <div className="row">
                          <div className="col-sm-2">
                            <div className="explore-person-img">
                              <a href="#">
                                <img src={item.personImgSrc} alt="explore person" />
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-10">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="explore-open-close-part">
                        <div className="row">
                          <div className="col-sm-5">
                            <button className="close-btn">{item.status}</button>
                          </div>
                          <div className="col-sm-7">
                            <div className="explore-map-icon">
                              <a href="#">
                                <i data-feather="map-pin"></i>
                              </a>
                              <a href="#">
                                <i data-feather="upload"></i>
                              </a>
                              <a href="#">
                                <i data-feather="heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/.explore--> */}
      {/* <!--explore end --> */}
    </>
  );
};
