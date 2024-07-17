import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import "./About.css";
import CustomSlider from "../../components/Slider/CustomSlider";

const About = () => {
  return (
    <>
      <CustomSlider/>  
      <section className="aboutUsContent container-fluid">
        <div className="container">
          <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Project Background</h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is a project funded by the Free
                State of Saxony, through the Entwicklungspolitisches Netzwerk
                Sachsen, ENS e.V. (Development Policy Network Saxony) The
                partnership project seeks to strengthen cooperation of actors in
                Uganda and Saxony that work in different areas of sustainable
                development including Civil Society Organisations (CSOs),
                schools, cultural institutions, social institutions, sciences,
                business sector and municipalities interested in social and
                sustainable development. The project directly contributes to the
                implementation of SDG 17: “Partnerships to achieve the
                Sustainable Development Goals"
              </p>
            </div>
          </div>

          <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Objective</h6>
              <p className="sectionParaText">
                The partnership project seeks to strengthen cooperation of
                actors in Uganda and Saxony that work in different areas of
                sustainable development including Civil Society Organisations
                (CSOs), schools, cultural institutions, social institutions,
                sciences, business sector and municipalities interested in
                social and sustainable development
              </p>
            </div>

            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Goal</h6>
              <p className="sectionParaText">
                The closer cooperation/partnership of the Free State of Saxony
                with Uganda is professionally supported and accompanied by civil
                society. Participating civil society actors are strengthened and
                advised. A network partner in Uganda contributes its expertise
                to the partnership.
              </p>
            </div>
          </div>

          <div className="aboutUsSectionText">
            <h6 className="sectionHeader">Members</h6>
          </div>

          <div className="aboutUsSectionTextWrapper">

          <div className="aboutUsSectionTextOther">
              <div className="memberSubSection">
                <p className="sectionParaText">Katosi Women Development Trust(KWDT)</p>
                <a href="https://katosi.org/" target="_blank" rel="noreferrer">
                  <RiExternalLinkFill size={24} color="#1e8e2c" />
                </a>
              </div>
              <p className="sectionParaText">
                Katosi Women Development Trust (KWDT) is a registered non profit
                organisation aiming to improve living standards of poor & rural
                 fisher communities in Uganda by empowering them to engage in
                their development processes. KWDT has been working with rural
                and fisher women for over 25 years and has been instrumental in
                creating change in the lives of the rural & fisher women and
                their communities.
              </p>
            </div>
            
            <div className="aboutUsSectionTextOther">
              <div className="memberSubSection">
                <p className="sectionParaText">The Development Policy Network Saxony(ENS)</p>
                <a href="https://www.einewelt-sachsen.de/en/ens-homepage/" target="_blank" rel="noreferrer">
                  <RiExternalLinkFill size={24} color="#1e8e2c" />
                  </a>
              </div>  
              <p className="sectionParaText">
                The Development Policy Network Saxony (ENS), founded in 1995, is
                an association of more than 60 Saxon associations and
                initiatives. As an umbrella organisation, the ENS aims to bundle
                the interests of development policy organisations in the Free
                State of Saxony and to represent them vis- à-vis the public, the
                state government, the state parliament as well as the political
                parties and the media. In order to inform people in Saxony about
                the problems of the so-called developing countries and to raise
                their awareness, the ENS carries out intensive educational work.
                This includes campaigns, conferences, discussion evenings,
                advice and information for groups and interested parties,
                organisation of exhibitions as well as specialist and
                educational publications. The primary purpose of the ENS is to
                promote international understanding between developing countries
                and Germany with a focus on the Free State of Saxony. This
                results in many domestic activities, which are described below
                for the sake of completeness. In addition, the ENS also
                represents the interests of non-governmental organisations
                (NGOs) that are exclusively dedicated to development projects in
                countries of the Global South
              </p>
            </div>

            
          </div>
        </div>
      </section>

      <section className="container-fluid participantsSection">
        <div className="container participantsWrapper">
          <div className="participantGroupings">
            <h6 className="sectionHeader">Participant Groupings</h6>
          </div>

          <table>
            <tr>
              <th>Main Group</th>
              <th>Subgroups</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>Civil Society Organisations</td>
              <td>
                <ul>
                  <li>Non Government Organisations</li>
                  <li>Community Based Organisations</li>
                </ul>
              </td>
              <td>NGOs & CBOs</td>
            </tr>
            <tr>
              <td>Schools</td>
              <td>
                <ul>
                  <li>Primary Schools</li>
                  <li>Secondary Schools</li>
                  <li>Vocational Institutes</li>
                </ul>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Others</td>
              <td>
                <ul>
                  <li>Cultural Institutions</li>
                  <li>Social Institutions</li>
                  <li>Business Sectors</li>
                  <li>Municipalities</li>
                </ul>
              </td>
              <td>All other interested in social and sustainable development</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default About;
