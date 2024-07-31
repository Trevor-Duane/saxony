import React from "react";
import "./Events.css";
import EventsCard from "../../components/EventsCard/EventsCard";
import axios from "axios";
import CustomSlider from "../../components/Slider/CustomSlider";

const Events = () => {

  const [events, setEvents] = React.useState([]);
  const [firstEvent, setFirstEvent] = React.useState({})


  React.useEffect(() => {
    const fetchEvents = async () => {
      axios
        .get(
          `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
        )
        .then((response) => {
          console.log("Events", response.data);
          setEvents(response.data);
  
        })
        .catch((error) => {
          console.log("Error", error);
        });
    };

    fetchEvents();
  }, []);

  return (
    <>
      <CustomSlider />
      <div className="container events-page gx-0">
        <section className="events-left">
          <div className="eventsTitle">
            <h6 className="sectionHeader">Events/News</h6>
            <p className="sectionParaText">
              We proudly present, happening in and all around
            </p>
          </div>

          <div className="events-content">
            {events?.map((event, index) => (
              <EventsCard key={event.id} event={event} />))}
          </div>
          
        </section>

        <section className="events-right">
          <div className="trending-content">
              <p className="trending-para">Trending</p>

            <div>
              {(events.slice(0,1)).map((item, index) => (
                <EventsCard key={item.id} event={item}/>
              ))}
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
