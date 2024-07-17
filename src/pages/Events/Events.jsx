import React from "react";
import "./Events.css";
// import Calendar from "react-calendar";
import EventsCard from "../../components/EventsCard/EventsCard";
// import { EventsData } from "../components/header/EventData";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCalendar } from "react-icons/fa";

const Events = () => {
  const [gallery, setGallery] = React.useState([]);
  const [selected, setSelected] = React.useState("School Visit");

  // const [events, setEvents] = React.useState([]);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const events = [
    {
      id: 1,
      name: "Pre-visits to schools/CBOs",
      value: "School Visit",
    },
    {
      id: 2,
      name: "Delegation visits",
      value: "Delegation Visit",
    },
    {
      id: 3,
      name: "Partner visits",
      value: "Partner Visit",
    },
    {
      id: 4,
      name: "Partner visits",
      value: "Partner Visit",
    },
  ];

  // const handleChange = (event) => {
  //   const selectedType = event.target.value
  //   setSelected(selectedType)
  // };

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const fetchEvents = () => {
    axios
      .get(
        `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
      )
      .then((response) => {
        // console.log("Events", response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <section className="eventsHero container-fluid">
        <div className="container eventsPageTitle">
          <h6 className="sectionHeader">Events/News</h6>
        </div>
      </section>

      <section>
        <div className="eventsWrapper container">
          {events.map((event, index) => {
            return (
              <div className="eventContainer">

                <div className="left">
                  <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/05/667A7864-scaled.jpg" alt="" />
                </div>

                <div className="middle">
                  <div className="eventCardTitle">
                    <h6>Kololo High School</h6>
                  </div>

                  <div className="eventCategory">
                    <span>school visit</span>
                    <button onClick={() => {}}>Gallery</button>
                  </div>

                  <div className="eventDayTime">
                    <FaCalendar color="#1e8e2c" size={12} />
                    <span>22/02/2024</span>
                  </div>

                  <div className="eventCardText">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (
                          <p>
                            Irure ad pariatur in mollit quis pariatur Lorem amet
                            adipisicing mollit pariatur. Elit ut veniam elit
                            reprehenderit do. Eu sunt Lorem aliqua proident
                            sint. Ullamco Lorem cupidatat cillum ad mollit est
                            cillum voluptate esse aliqua. In qui velit elit nisi
                            velit in.
                          </p>
                        ),
                      }}
                    ></div>
                  </div>
                </div>

                <div className="right">
                      <button>Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="filterComponent">
        <div className="container filterWrapper">
          <div className="row eventRow">
            <div className="col-4 eventsDisplay">
              <div className="filterRow">
                <div className="customSelect">
                  <label className="eventSelectLabel">Event Type</label>
                  <select
                    name="event-types"
                    id="eventSelect"
                    value={selected}
                    onChange={(e) => {
                      setSelected(e.target.value)
                      setGallery([])
                    }}
                  >
                    {eventTypesData.map((type, index) => (
                      <option value={type.value}>{type.name}</option>
                    ))}
                  </select>
                </div>

                <div className="filterButtonWrapper">
                  <button className="filterButton">Filter</button>
                </div>
              </div>

              <div className="eventCardDisplay">
                {events
                  .filter((data) => data.acf.event_type === selected)
                  .map((event, index) => (
                    <EventsCard
                      key={event.id}
                      onClick={() => setGallery(event.acf.event_images)}
                      category_name={event.acf.event_type}
                      event_name={event.acf.event_title}
                      slang={event.acf.event_type}
                      date={event.acf.event_date}
                      bio={event.acf.event_details}
                    />
                  ))}
              </div>
            </div>
            <div className="col-8 snapsDisplay">
              <div>
                {gallery.length !== 0 ? (
                  <div className="row imageRow">
                    {gallery &&
                      gallery.map((snap, index) => (
                        <div className="column imageColumn" key={snap.id}>
                          <img src={snap} className="columnImage" />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div>
                    <span></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Events;
