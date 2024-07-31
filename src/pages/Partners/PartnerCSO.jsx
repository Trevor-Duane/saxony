import React from "react";
import axios from "axios";
import "./Partner.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";

const PartnerCSO = () => {
  const [organisations, setOrganisations] = React.useState([])

  const [selectedContent, setSelectedContent] = React.useState("NGO");

  // const [active, setActive] = React.useState("NGO")

  React.useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations"
        );
        console.log("organisations", response.data)
        setOrganisations(response.data);
      } catch (err) {}
    };
    fetchSchools();
  }, []);

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const NGO = () => {
    return (
      <div>
        {(organisations.filter(organisation => organisation.acf.registration_status === 'ngo')).map((organisation, index) => (
          <OrganisationCard key={organisation.id} organisation={organisation}/>
        ))}
      </div>
    );
  };

  const CBO = () => {
    return (
      <div>
        {(organisations.filter(organisation => organisation.acf.registration_status === 'cbo')).map((organisation, index) => (
          <OrganisationCard key={organisation.id} organisation={organisation}/>
        ))}
      </div>
    );
  };

  

  return (
    <div className="container partnership-page gx-0">
      <div className="partner-side-links">
        <div className="side-links">
          <NavLink onClick={() => handleLinkClick("NGO")} className={selectedContent === "NGO" ? "side-link-active" : "side-link"}>
            Non Government Organisations {selectedContent === "NGO" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
          </NavLink>
          <NavLink onClick={() => handleLinkClick("CBO")} className={selectedContent === "CBO" ? "side-link-active" : "side-link"}>
            Community Based Organisations {selectedContent === "CBO" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
          </NavLink>
        </div>
      </div>
      <div className="partner-content">
        {selectedContent === "NGO" ? <NGO /> : <CBO />}
      </div>
    </div>
  );
};

export default PartnerCSO;
