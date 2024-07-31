import React from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';
import "./EventsCard.css";

const EventsCard = ({ event }) => {
  const navigate = useNavigate();

  const navigateToDetails = ()=> {
      navigate(`/event_details/${event.id}_2ea070`,{ state: {event}})
    }
  return (
    <div className="eventsCard" onClick={navigateToDetails}>
      <div className="eventCardTop">
        <div className="eventTitle">
          <h6>{event.acf.event_title}</h6>
        </div>
        <hr/>
        <div
          className="eventBody"
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(event.acf.event_details)}}
        ></div>
      </div>

      <div className="eventCardBottom">
        <div className="eventSlang">
          <p>{event.acf.event_type}</p>
        </div>
        <div className="eventDate">
          <span>{event.acf.event_date}</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
