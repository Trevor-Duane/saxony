import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { ParticipantCard } from "../../components/ParticipantCard/ParticipantCard";
import './Resources.css'
import axios from "axios";
import CustomSlider from "../../components/Slider/CustomSlider";

const Resources = () => {
  const [participants, setParticipants] = React.useState([]);
  const [organisations, setOrganisations] = React.useState([]);

  const [activeButton, setActiveButton] = React.useState(0);

  const fetchParticipants = () => {
    axios
      .all([
        axios.get(
          `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisation-types`
        ),
        axios.get(
          `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations`
        ),
      ])
      .then(axios.spread((response1, response2) => {
        console.log("participants", response1.data)
        setParticipants(response1.data.reverse());
        console.log("organisations", response2.data)
        setOrganisations(response2.data)
      }))

  };

  React.useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <>
      <CustomSlider/>

      <section className="resourceContentSection container-fluid">
        <div className="container resourceContentWrapper">
          <div className="participantTitle">
            <h6 className="sectionHeader">Participating Organisations in Uganda</h6>
          </div>

          <div className="participantsNavWrapper">
            <nav className="participantsNav">
              {participants.map((item, index) => (
                <button
                  onClick={() => setActiveButton(item.acf.organisation_type_name)}
                  className={`${
                    activeButton === item.acf.organisation_type_name
                      ? "activeParticipantButton"
                      : "participantButton"
                  }`}
                  key={item.id}
                >
                  {item.acf.organisation_type_name}
                </button>
              ))}
            </nav>
          </div>

          {activeButton === 0 ? (
            <div className="participantsCards">
              {organisations.map((item, index) => (
                <ParticipantCard
                  key={item.id}
                  id={item.id}
                  image={item.acf.organisation_logo}
                  organisation_name={item.acf.orgainsation_name}
                  organisation_type={item.acf.organisation_status}
                  actor_type={item.acf.organisation_type}
                  bio={item.acf.organisation_details}
                />
              ))}
            </div>
          ) : (
            <div className="participantsCards">
              {organisations &&
                organisations
                  .filter(
                    (organisation) =>
                      organisation.acf.organisation_type === activeButton
                  )
                  .map((item, index) => (
                    <ParticipantCard
                      key={item.id}
                      id={item.id}
                      image={item.acf.organisation_logo}
                      organisation_name={item.acf.organisation_name}
                      organisation_type={item.acf.organisation_status}
                      actor_type={item.acf.organisation_type}
                      bio={item.acf.organisation_details}
                    />
                  ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
