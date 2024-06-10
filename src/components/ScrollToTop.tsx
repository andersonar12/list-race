"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div id="scroll-Top">
          <div className="return-to-top" onClick={scrollToTop}>
            <i
              className="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              data-original-title="Back to Top"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
