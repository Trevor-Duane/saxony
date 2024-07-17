import React from "react";
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
        const recentPost = [];
        recentPost.push(response.data[0]);
        console.log("most recent post", recentPost);

        setRecent(recentPost);
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
    <CustomSlider/>
      <section className="container-fluid aboutContainer gx-0">
        <div className="container aboutSection">
          <div className="row aboutRow">
            <div className="col-md-8 col-sm-12">
              <h6 className="sectionHeader">
                About the Uganda - Saxony Partnership
              </h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is a project funded by the free
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
                <Link to="/our_work" className="sectionLink">
                  <FaLink color="#1E8E2C" size={18} />
                  <span className="linkText">Read more..</span>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <h6 className="sectionHeader">Events</h6>

              <div>
                {recent.length !== 0 ? (
                  <div>
                    {recent.map((item, index) => (
                      <div className="newzTop" key={item.id}>
                        <img
                          src={item.acf.event_images[0]}
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

              <hr></hr>

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
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid actorsContainer">
        <div className="container actorsWrapper">
          <h6 className="sectionHeader">Actors in Uganda</h6>
          <p className="sectionParaText">
            The role of the partnership is to bring actors in Saxony and Uganda
            together and the following are the target actor groups
          </p>

          <div className="actorButtonGroup">
            <button
              onClick={() => setActive("cso")}
              id="actorButton1"
              className={`${
                active === "cso" ? "activeActorButton" : "actorButton"
              }`}
            >
              Civil Society Organisations
            </button>
            <button
              onClick={() => setActive("schools")}
              id="actorButton2"
              className={`${
                active === "schools" ? "activeActorButton" : "actorButton"
              }`}
            >
              Schools
            </button>
          </div>

          {active === "cso" && (
            <div className="actorsComponent">
              <div className="actorCard">
                <p>
                  Non Government Organisation<br></br>NGO's
                </p>
              </div>
              <div className="actorCard">
                <p>
                  Community Based Organisation<br></br>CBO's
                </p>
              </div>
            </div>
          )}

          {active === "schools" && (
            <div className="actorsComponent">
              <div className="actorCard">
                <p>Primary Schools</p>
              </div>
              <div className="actorCard">
                <p>Secondary Schools</p>
              </div>
              <div className="actorCard">
                <p>Vocational Institutes</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container-fluid membersContainer">
        <div className="container membersWrapper">
          <h6 className="sectionHeader">Coordinating Partners</h6>
          <p className="sectionParaText">
            The partnership seeks to collaborate Civil Society Organisations in
            Uganda and Germany, as well as schools, municipalities people from
            the science and business sector, who does what?
          </p>
          <div className="d-flex gap-5 mt-5">
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/KWDT_LOGO.jpg"
                height="120"
                width="100"
                alt=""
              />
              <h6 className="memberName sectionParaText">
                Project Coordinator
              </h6>
            </div>
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/ENS-Logo.png"
                height="120"
                width="120"
                alt=""
              />
              <h6 className="memberName sectionParaText">
                Collaborative Partner
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid interestContainer">
        <div className="container interestWrapper">
          <h6 className="sectionHeader">Express Interest</h6>
          <p className="sectionParaText">
            Civil Society and Schools that need to express interest in
            partnering with the German organization under the Uganda-Saxony
            Partnership
          </p>
          <div className="interestCardWrapper">
            <div className="d-flex interestCard ">
              <FaFile size={18} color="#1e8e2c" />
              <span>Download Registration Template</span>
            </div>

            <div className="d-flex interestCard">
              <FaBookmark size={18} color="#1e8e2c" />
              <span>Fill Onlines Template</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid galleryContainer">
        <div className="container galleryWrapper">
          <h6 className="sectionHeader">Project Gallery</h6>
          <p className="sectionParaText">
            We are always onto something, workshops, discussion, plus any other
            activities and this is how we keep you posted.
          </p>

          <div className="gallery-link">
            <Link className="galleryLink">
              <FaLink color="#FAF9f6" size={18} />
              <span>Gallery</span>
            </Link>
          </div>

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
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/event-scaled.jpg"
                  alt="Image 3"
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

            <div className="gallery-row">
              <div className="gallery-column">
                <img
                  className="img-thumbnail"
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/IMG_1792-scaled.jpg"
                  alt="Image 4"
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
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/IMG_1688-scaled.jpg"
                  alt="Image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid saxonyContainer">
        <div className="container saxonyWrapper">
          <img
            className="img-fluid"
            src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Free-State-of-Saxony-Logo.jpeg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Home;
