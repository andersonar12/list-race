"use client";

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
