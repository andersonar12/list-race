"use client";

import { useEffect } from "react";

const navbarScrollspy = (): void => {
  const navScrollSpy = document.querySelector(".navbar-scrollspy") as HTMLElement;
  const getNav = document.querySelector("nav.navbar.bootsnav") as HTMLElement;

  if (!getNav || !navScrollSpy) return;

  const offset = getNav.offsetHeight;

  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll<HTMLElement>(".navbar-scrollspy section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        document.querySelectorAll<HTMLElement>(".scroll").forEach((link) => {
          link.classList.remove("active");
          const anchor = link.querySelector("a");
          if (anchor && section.getAttribute("id") === anchor.hash.substring(1)) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  document.querySelectorAll<HTMLElement>(".scroll").forEach((link) => {
    link.addEventListener("click", function (event: Event) {
      event.preventDefault();
      console.log("Scrolling...");

      document
        .querySelectorAll<HTMLElement>(".scroll")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      document
        .querySelectorAll<HTMLElement>(".navbar-collapse")
        .forEach((nav) => nav.classList.remove("in"));

      document.querySelectorAll<HTMLElement>(".navbar-toggle .fa").forEach((icon) => {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });

      const anchor = this.querySelector("a");
      if (!anchor) return;
      const section = document.querySelector<HTMLElement>(anchor.getAttribute("href") || "");
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const minusDesktop = parseInt(getNav.getAttribute("data-minus-value-desktop") || "0", 10);
      const minusMobile = parseInt(getNav.getAttribute("data-minus-value-mobile") || "0", 10);
      const speed = parseInt(getNav.getAttribute("data-speed") || "500", 10);
      const windowWidth = window.innerWidth;
      const position = sectionTop - (windowWidth > 992 ? minusDesktop : minusMobile);

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });

  let resizeTimer: NodeJS.Timeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newOffset = getNav.offsetHeight;
      const data = { options: { offset: newOffset } }; // Simulación de actualización de datos
      document.dispatchEvent(new CustomEvent("bs.scrollspy", { detail: data }));
    }, 200);
  });
};

export const Header = () => {
  const currency = [
    { value: "usd", label: "USD" },
    { value: "bdt", label: "BDT" },
    { value: "euro", label: "Euro" },
  ];

  const language = [
    { value: "defaul", label: "EN" },
    { value: "Bangla", label: "BN" },
    { value: "Arabic", label: "AB" },
  ];

  useEffect(() => {
    navbarScrollspy();
  }, []);

  return (
    <>
      {/* <!--header-top start --> */}
      <header id="header-top" className="header-top">
        <ul>
          <li>
            <div className="header-top-left">
              <ul>
                <li className="select-opt">
                  <select name="language" id="language">
                    {language.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </li>
                <li className="select-opt">
                  <select name="currency" id="currency">
                    {currency.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </li>
                <li className="select-opt">
                  <a href="#">
                    <span className="lnr lnr-magnifier"></span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="head-responsive-right pull-right">
            <div className="header-top-right">
              <ul>
                <li className="header-top-contact">+1 222 777 6565</li>
                <li className="header-top-contact">
                  <a href="#">sign in</a>
                </li>
                <li className="header-top-contact">
                  <a href="#">register</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </header>
      {/* <!--/.header-top--> */}
      {/* <!--header-top end --> */}

      {/* <!-- top-area Start --> */}
      <section className="top-area">
        <div className="header-area">
          {/* <!-- Start Navigation --> */}
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="container">
              {/* <!-- Start Header Navigation --> */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                  list<span>race</span>
                </a>
              </div>
              {/* <!--/.navbar-header--> */}
              {/* <!-- End Header Navigation --> */}

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
                style={{ visibility: "visible" }}
              >
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="scroll active">
                    <a href="#home">home</a>
                  </li>
                  <li className="scroll">
                    <a href="#works">how it works</a>
                  </li>
                  <li className="scroll">
                    <a href="#explore">explore</a>
                  </li>
                  <li className="scroll">
                    <a href="#reviews">review</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
                {/* <!--/.nav --> */}
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
            {/* <!--/.container--> */}
          </nav>
          {/* <!--/nav--> */}
          {/* <!-- End Navigation --> */}
        </div>
        {/* <!--/.header-area--> */}
        <div className="clearfix"></div>
      </section>
      {/* <!-- /.top-area--> */}
      {/* <!-- top-area End --> */}
    </>
  );
};
