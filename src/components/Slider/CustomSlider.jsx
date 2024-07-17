import React from "react";
import Slider from "react-slick";


const CustomSlider = () => {
  const settings = {
    dots: false,
    lazyload: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid homeContainer gx-0 gy-0 p-0 m-0">
      <Slider {...settings} className="sliderWrapper">
        <div className="slidesContainer">
          <img
            className="img-fluid w-100"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider1.jpg"
            alt="First slide"
          />
          <div className="heroContent">
            <div className="heroText container row">
              <div className="col-sm-5 gradient-head">
                <h2>
                  Building Partnerships<br></br>Uganda - Saxony
                </h2>
              </div>

              <div className="col-sm-7 gradient-text">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="slidesContainer">
          <img
            className="img-fluid w-100"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider2.jpg"
            alt="First slide"
          />

          <div className="heroContent">
            <div className="heroText container row">
              <div className="col-sm-5 gradient-head">
                <h2>
                  Welcome<br></br> Uganda-Saxony
                </h2>
              </div>

              <div className="col-sm-7 gradient-text">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="slidesContainer">
          <img
            className="img-fluid w-100"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider3-scaled.jpg"
            alt="First slide"
          />

          <div className="heroContent">
            <div className="heroText container row">
              <div className="col-sm-5 gradient-head">
                <h2>
                  Partnership<br></br>Workshops
                </h2>
              </div>

              <div className="col-sm-7 gradient-text">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="slidesContainer">
          <img
            className="img-fluid w-100"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/The-Nile-Bridge-Jinja-4-optimized-1-1024x575-1.jpg"
            alt="First slide"
          />

          <div className="heroContent">
            <div className="heroText container row">
              <div className="col-sm-5 gradient-head">
                <h2>
                  The Nile<br></br>Bridge Jinja
                </h2>
              </div>

              <div className="col-sm-7 gradient-text">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="slidesContainer">
          <img
            className="img-fluid w-100"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/wakanda-scaled.jpg"
            alt="First slide"
          />

          <div className="heroContent">
            <div className="heroText container row">
              <div className="col-sm-5 gradient-head">
                <h2>
                  Lake Bunyonyi<br></br>Uganda
                </h2>
              </div>

              <div className="col-sm-7 gradient-text">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
