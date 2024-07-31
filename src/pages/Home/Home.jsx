import React from "react";
import CookieConsent from "react-cookie-consent";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBookmark,
  FaFacebook,
  FaFile,
  FaInstagram,
  FaLink,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import CustomSlider from "../../components/Slider/CustomSlider";

const Home = () => {
  const [active, setActive] = React.useState("cso");
  const [recent, setRecent] = React.useState([]);

  const fetchMostRecentEvent = () => {
    axios
      .get(
        `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
      )
      .then((response) => {
        setRecent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchMostRecentEvent();
  }, []);
  return (
    <>
      <CustomSlider />
      <section className="container-fluid aboutContainer gx-0">
        <div className="container aboutSection">
          <div className="row aboutRow">
            <div className="col-md-8 col-sm-12">
              <h6 className="sectionHeader">
                About the Uganda - Saxony Partnership
              </h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is funded by the free
                state of Saxony, through the Entwicklungspolitisches Netzwerk
                Sachsen, ENS e.V (Development Policy Network Saxony); The
                partnership project seeks to strengthen cooperation of actors in
                Uganda and Saxony that work in different areas of sustainable
                development including Civil Society Organisations (CSOs),
                schools, cultural institutions sciences, business sector and
                municipalities interested in social and sustainable development.
                The project directly contirbutes to the implementation of SDG
                17: “Partnerships to achieve the sustainable Development Goals”
              </p>
              <p className="sectionParaText">
                Katosi Women Development Trust is coordinating the Uganda-Saxony
                partnership, a project which cooprates with the Development
                Policy Network Saxony. The partnership seeks to strengthen
                cooperation of civil society organizations in uganda and saxony
                that work in different areas such as development cooperation or
                education for sustainable development.
              </p>

              <div>
                <Link to="/about_us" className="sectionLink">
                  <FaLink color="#1E8E2C" size={18} />
                  <span className="linkText">Read more..</span>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <h6 className="sectionHeader">Social Media</h6>
              <>
                <h6 className="sectionSubHeader">
                  Follow the Uganda Saxony Partnership
                </h6>
                <hr></hr>
                <div className="follow-links">
                  <p className="sectionSubText">Saxony Uganda</p>
                  <ul>
                    <li>
                      <FaTwitter
                        size={24}
                        className="followIcon"
                        color="#433f3f"
                      />
                      <a
                        href="https://twitter.com/uganda_saxony"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>

                    <li>
                      <FaFacebook
                        size={24}
                        className="followIcon"
                        color="#433f3f"
                      />
                      <a
                        href="https://www.facebook.com/profile.php?id=100094606894335"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>

                    <li>
                      <FaInstagram
                        size={24}
                        className="followIcon"
                        color="#433f3f"
                      />
                      <a
                        href="https://www.instagram.com/uganda_saxony_partnership/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="follow-links">
                  <p className="sectionSubText">Saxony Germany</p>
                  <ul>
                    <li>
                      <FaFacebook
                        size={24}
                        className="followIcon"
                        color="#433f3f"
                      />
                      <a
                        href="https://www.facebook.com/profile.php?id=100094409740783"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>

                    <li>
                      <FaInstagram
                        size={24}
                        className="followIcon"
                        color="#433f3f"
                      />
                      <a
                        href="https://www.instagram.com/ugandasachsenpartnerschaft/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
              <hr></hr>
              <div>
                {recent.length !== 0 ? (
                  <div>
                    {(recent.slice(0,1)).map((item, index) => (
                      <div className="newzTop" key={item.id}>
                        <img
                          src={item.acf.featured_image}
                          className="img-fluid newzCardImage"
                          alt=""
                        />
                        <div className="dateWrapper">
                          <span>{item.acf.event_date}</span>
                        </div>
                        <div className="titleWrapper">
                          <p className="newz-title">{item.acf.event_title}</p>
                        </div>
                      </div>
                    ))}

                    <div>
                      <Link to="/events" className="sectionLink">
                        <FaLink color="#1E8E2C" size={18} />
                        <span className="linkText">View all events</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="newzTop emptyNewzTop">
                    <span>No Recent Events</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container-fluid membersContainer">
        <div className="container membersWrapper gx-0">
          <h6 className="sectionHeader">Coordinating Partners</h6>
          <p className="sectionParaText">
            The partnership seeks to collaborate Civil Society Organisations in
            Uganda and Germany, as well as schools, municipalities people from
            the science and business sector, who does what?
          </p>
          <div className="member-wrapper">
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/ENS_LOGO_Official.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/saxony-logo.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/katosi-logo.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid saxonyContainer">
        <div className="container saxonyWrapper gx-0">
          <img
            className="img-fluid img-thumbnail"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Free-State-of-Saxony-Logo.jpeg"
            height={780}
            width={900}
            alt=""
          />
        </div>
      </section>

      <section className="container-fluid galleryContainer">
        <div className="container galleryWrapper gx-0">
          <h6 className="sectionHeader">Project Gallery</h6>
          <p className="sectionParaText">
            We are always onto something, workshops, discussion, plus any other
            activities and this is how we keep you posted.
          </p>

          <div className="gallery-container">
            <div className="gallery-row">
              <div className="gallery-column">
                <img
                  className="img-thumbnail"
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/PXL_20230714_063057105-scaled.jpg"
                  alt="Image 1"
                />
              </div>

              <div className="gallery-column">
                <img
                  className="img-thumbnail"
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/14_7_2023_12-scaled.jpg"
                  alt="Image 5"
                />
              </div>

              <div className="gallery-column">
                <img
                  className="img-thumbnail"
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/PXL_20230714_091336892-scaled.jpg"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid interestContainer">
        <div className="container interestWrapper gx-0">
          <h6 className="sectionHeader">Express Interest</h6>
          <p className="sectionParaText">
            Civil Society and Schools that need to express interest in
            partnering with the German organization under the Uganda-Saxony
            Partnership
          </p>
          <div className="interestCardWrapper">
            <div className="d-flex interestCard ">
              <Link to='join_partnership'><FaFile size={18} color="#1e8e2c" /></Link>
              <span>Download Registration Template</span>
            </div>

              {/* <div className="d-flex interestCard">
                <FaBookmark size={18} color="#1e8e2c" />
                <span>Fill Onlines Template</span>
              </div> */}
          </div>
        </div>
      </section>

      <CookieConsent
        location="bottom"
        overlay
        enableDeclineButton
        flipButtons
        buttonText="I Understand"
        cookieName="usersData"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
};

export default Home;
