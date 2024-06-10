"use client";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Alert } from "../Alert";
import useSearchPlaces from "@/hooks/useSearchPlaces";
import { Spinner } from "../Spinner";

export const WelcomeHero = () => {
  const [location, setLocation] = useState("");

  const { result, postRequest, open, setOpen, loading } = useSearchPlaces();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postRequest(location);
  };
  return (
    <>
      {/* <!--welcome-hero start --> */}
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>
              best place to find and explore <br /> that all you need
            </h2>
            <p>
              Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
            </p>
          </div>
          <form onSubmit={handleSubmit} className="welcome-hero-serch-box">
            <div className="welcome-hero-form">
              <div className="single-welcome-hero-form">
                <h3>what?</h3>
                <input type="text" placeholder="Ex: place, restaurant, food, automobile" />
                <div className="welcome-hero-form-icon">
                  <i className="flaticon-list-with-dots"></i>
                </div>
              </div>
              <div className="single-welcome-hero-form">
                <h3>location</h3>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: london, new york, rome"
                />

                <div className="welcome-hero-form-icon">
                  <i className="flaticon-gps-fixed-indicator"></i>
                </div>
              </div>
            </div>
            <div className="welcome-hero-serch">
              <button className="welcome-hero-btn" type="submit" disabled={loading}>
                {loading && <Spinner pixel={40} />}
                search <i data-feather="search"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* <!--/.welcome-hero--> */}
      {/* <!--welcome-hero end --> */}

      {/* Result */}
      <Alert
        result={result}
        successMessage="Some places found!✅"
        errorMessage="No places found! ⛔"
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
