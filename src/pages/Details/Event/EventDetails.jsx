import React from "react";
import "./EventDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import CustomSlider from "../../../components/Slider/CustomSlider";
import Gallery from "../../../components/Gallery/Gallery";

const EventDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;


  return (
    <>
      <CustomSlider />
      <div className="container events-details-wrapper gx-0">
        <div className="event-details">
          <div className="event-image">
            <img
              className="img-thumbnail"
              src={event.acf.featured_image}
              alt=""
            />
          </div>

          <div className="title-date">
            <p className="event-title">{event.acf.event_title}</p>
            <p className="event-date">{event.acf.event_date}</p>
          </div>
          <hr />
          <p
            className="event-bio"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(event.acf.event_details),
            }}
          ></p>
        </div>

        {/* <div className="event-gallery">
          <div className="event-gallery-photo-container">
            {event.acf.event_images.map((image, index) => {
              <img key={image.id} src={image} alt="" />;
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default EventDetails;
