import react, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Button,
  CardText,
  CardTitle,
} from "reactstrap";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";
import ReactVisibilitySensor from "react-visibility-sensor";


export const data = [
  ["", ""],
  ["Individuals Sector", 72],
  ["Corporate Sector ", 28],
];

export const options = {
  title: "Revenues",
  width: "100%",
  height: "100%",
  pieHole: 0.6,
  is3D: false,
  legend: "none",
  titlePosition: "none",
  slices: {
    0: { color: "#A98445" },
    1: { color: "#D8A115" },
  },
};

export default function StrategicReports() {
  const [divActive, setDivActive] = useState("spectra");
  const [divAct2, setDivAct2] = useState("Customers");
  // let { t } = useTranslation("common");
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  });
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Container>
      <section style={{ paddingTop: "3rem" }} id="StrategicReports">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1 style={{fontSize:60}}>
                <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  Strategic{" "}
                </span>
                <span style={{ color: "#415259", fontWeight: "bold" }}>
                  {" "}
                  Reports{" "}
                </span>
              </h1>
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ paddingTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img src={"/assets/images/vision.png"}className='img-fluid' alt="vision" />
            <h5>Vision</h5>
            <p>
              Leading the human resources sector by providing comprehensive &
              integrated solutions that ensure our customers’ success, protect
              employees’ rights, and support the national development.
            </p>
          </div>
          <div className="col">
            <img src={"/assets/images/mission.png"} className='img-fluid' alt="mission" />
            <h5>Mission</h5>
            <p>
              We are working on providing innovative and integrated human
              resources solutions and services to our customers through
              institutionalized system, superior IT and strategic partnerships
              that serve our employees, customers, and community.
            </p>
          </div>
          <div className="col">
            <img src={"/assets/images/values.png"} className='img-fluid' alt="values" />
            <h5>Values</h5>
            <p>
              Creation and innovation, integrity and transparency, quality and
              excellence, teamwork spirit, customer centricity.
            </p>
          </div>
        </div>
      </section>
      <Row sm={"4"}>
        <div className="col">
          <h5 className="bottomline p-2"> Path </h5>
          <small>Nine years of leadership and innovation</small>
        </div>
      </Row>
      <section className="m-4">
        <div className="">
          <div className="container">
            <div className="steps">
              <div className="steps-container">
                <div className="content">
                  <h2>Feb 2013</h2>
                  <p>
                    “Maharah” has been incorporated as a closed joint stock
                    company with a capital of SAR 100 million.
                  </p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#A98445" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>May 2014</h2>
                  <p>The Company manpower amounted to (10.000) employees.</p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#D8A115" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Feb 2015</h2>
                  <p>Launching “Khidmah” Program.</p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#723B1C" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Dec 2016</h2>
                  <p>The Company Manpower Amounted To (30.000) Employees.</p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#BAB0B0" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>May 2017</h2>
                  <p>“Maharah” Obtained The ISO Certificate 9001:2015.</p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#A98445" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Sep 2017</h2>
                  <p>
                    Expansion In The UAE Through The Acquisition Of 85% Stake In
                    “Musanid”.
                  </p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#242E40" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Nov 2018</h2>
                  <p>“Maharah” Acquired 40% Stake In “BLOOVO”.</p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#415259" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Dec 2018</h2>
                  <p>
                    The Company Capital Has Increased To SAR (375.000.000).{" "}
                  </p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#C9C3AD" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Mar 2019</h2>
                  <p>
                    The Capital Market Authority (CMA) Approval To The Offering
                    Of 30% Of The Company Shares For Public Subscription.
                  </p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#310E13" }}
                ></div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>Jun 2019</h2>
                  <p>
                    Starting The Trade (Tadawul) Of The Company Shares In The
                    Saudi Arabia Stock Market (TASI).
                  </p>
                </div>
                <i className="step-line"></i>
                <div
                  className="date"
                  style={{ backgroundColor: "#415259" }}
                ></div>
              </div>
            </div>
          </div>
          <Row sm={"4"}>
            <div className="col">
              <h5 className="bottomline p-2"> Strategy </h5>
              <small>Creativity in exploring opportunities</small>
            </div>
          </Row>
          <div className="row py-3">
            <h4 >Strategic pillars</h4>
          </div>
          <div className="row">
            <div className="col border-end">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h1 className="px-3 strokeFont">1</h1>
                <div>
                  <b>Enhancing</b>
                  <p>Infrastructure</p>
                </div>
              </div>
            </div>
            <div className="col border-end">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h1 className="px-3 strokeFont">2</h1>
                <div>
                  <b>Developing</b>
                  <p>Current Services</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h1 className="px-3 strokeFont">3</h1>
                <div>
                  <b>Searching</b>
                  <p>For New Horizons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <Row sm={"6"}>
            <div className="col" style={{ width: "40%" }}>
              <h4 className=" p-2" style={{ whiteSpace: "nowrap" }}>
                {" "}
                Operational Model{" "}
              </h4>
            </div>
          </Row>
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <div className="row gx-5">
                <div className="row" style={{width:"40vw"}}>
                  <div
                    className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-sm-evenly align-items-center"
                    onClick={() => setDivAct2("Customers")}
                    style={{
                      color:
                        divAct2 == "Customers" ? "#C9C3AD" : "#707070",
                    }}
                  >
                    <img
                      className="img-fluid"
                      alt="image"
                      src="/assets/images/Customers.png"
                    />{" "}<p>Customers</p>
                  </div>
                </div>
                <div className="row" style={{width:"40vw"}}>
                  <div
                    className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-sm-evenly align-items-center"
                    onClick={() => setDivAct2("Channels")}
                    style={{
                      color: divAct2 == "Channels" ? "#C9C3AD" : "#707070",
                    }}
                  >
                    <img
                      alt="image"
                      className="img-fluid"
                      src="/assets/images/Channels.png"
                    />{" "}<p>Channels</p>
                  </div>
                </div>
                <div className="row" style={{width:"40vw"}}>
                  <div
                    className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-sm-evenly align-items-center"
                    onClick={() => setDivAct2("CustomersOutreachUnits")}
                    style={{
                      color: divAct2 == "CustomersOutreachUnits" ? "#C9C3AD" : "#707070",
                    }}
                  >
                    <img
                      className="img-fluid"
                      src="/assets/images/CustomersOutreachUnits.png"
                      alt="image"
                    />{" "}<p>Customers Outreach Units</p>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="col-6">
              <div
                className={`col  ${
                  divAct2 == "Customers" ? "d-block" : "d-none"
                }`}
              >
                <div
                  className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                  id="Customers"
                >
                  <ul className="esnad">
                      <li>Companies</li>
                      <li>Government al Authorities</li>
                      <li>VIP Customers</li>
                      <li>Individuals</li>
                      <li>Shareholders and owners</li>
                  </ul>
                </div>
                
              </div>
              <div
                className={`col  ${divAct2 == "Channels" ? "d-block" : "d-none"}`}
              >
                <div
                  className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                  id="Channels"
                >
                 <ul className="esnad">
                      <li>Sales and relationship Managers</li>
                      <li>Branchs</li>
                      <li>Call Centers</li>
                      <li>E-channels</li>
                      <li>Company Announcements on Tadawul</li>
                  </ul>
                </div>
               
              </div>
              <div
                className={`col  ${divAct2 == "CustomersOutreachUnits" ? "d-block" : "d-none"}`}
              >
                <div
                  className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                  id="CustomersOutreachUnits"
                >
                  
                  <ul className="esnad">
                      <li>Individuals & Corporate</li>
                      <li>Administrative and Support Operations</li>
                      <li>Project Management</li>
                      <li>Manpower services</li>
                      <li>Logistics and Operations</li>
                      <li>Marketing</li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4">
        <>
          <div className="row">
            <div className="col">
              <h4 >Digital Transformation Strategy</h4>
              <p>
                Enhancement of digital footprint at the age led by the digital
                revolution digital transformation is no longer an option.
              </p>
            </div>

            <div className="row m-5 d-flex dots">
              <div className="col-6">
                <ul className="firstCol">
                  <li>Use of Financial Technologies</li>
                  <li>Mobilization for Digital Age</li>
                  <li>Maharah Digital Marketing</li>
                  <li>Digital Preparation and Training</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="secondCol">
                  <li>Utilization of Cloud Services</li>
                  <li>Robotics</li>
                  <li>Future Forecasts</li>
                  <li>Devices Smart</li>
                </ul>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-6">
                <img
                  src="/assets/images/image.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
              <div className="col-6">
                <ul className="esnad">
                  <li>
                    Digital transformation is one of the main pillars to achieve
                    the kingdom vision 2030.
                  </li>
                  <li>
                    The national transformation program (ntp) aims to support
                    the digital transformation in the kingdom.
                  </li>
                  <li>
                    Digital technologies forced companies to change their
                    methods of work.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Acquisitions</h4>
              </div>
            </div>
            <div className="container">
              <div className="stepsmini">
                <div className="">
                  <div className="content">
                    <div className="col">
                      <div className="col">
                        <CountUp
                          
                          start={0}
                          end={90}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        >
                          {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall={true}>
                      <span
                        style={{
                          fontSize: 100,
                          fontWeight: "bolder",
                          color: "#D8A115",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                        </CountUp>
                        <br />
                        <span className="descCountUp">
                          <small>Acquisition Of Spectra Support Services Company</small>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#A98445" }}
                  ></div> */}
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>Dec 2020</h2>
                    <p>
                      “Maharah” signs mou with “spectra support services
                      company”(“spectra”) for the acquisition of the majority
                      stakes.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#A98445" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>Apr 2021</h2>
                    <p>
                      Signing an spa for the acquisition of 90% of “spectra
                      support services company” (“spectra”).
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#D8A115" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>Jun 2021</h2>
                    <p>
                      Extending the deadline for meeting the prior-to-closing
                      conditions to october 30, 2021.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#723B1C" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>Aug 2021</h2>
                    <p>
                      Completion of the sale and purchase of stakes for the
                      acquisition of 90% of “spectra”.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#BAB0B0" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="stepsmini">
                <div className="">
                  <div className="content">
                    <div className="col">
                      <div className="col">
                        <CountUp
                         
                          start={0}
                          end={85}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        >
                            {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall={true}>
                      <span
                        style={{
                          fontSize: 100,
                          fontWeight: "bolder",
                          color: "#A98445",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                        </CountUp>
                        <br />
                        <span className="descCountUp">
                          <small>Acquisition Of</small>
                          Arabian Shifa Medical Co.
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#A98445" }}
                  ></div> */}
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>September 28, 2021</h2>
                    <p>
                      Growth avenue investment company (“gac”) signs an mou for
                      the acquisition of 85 of the stakes of “arabian shifa
                      medical co.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#A98445" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>December 26, 2021</h2>
                    <p>
                      Spa signed for the acquisition of 85% of the ownership
                      stake of “SHIFA”.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#D8A115" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>January 6, 2022</h2>
                    <p>
                      (“gac”) receives a no objection statement from the general
                      authority for competition for the completion of economic
                      concentration between both companies.
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#723B1C" }}
                  ></div>
                </div>
                <div className="stepsmini-container">
                  <div className="content">
                    <h2>January 13, 2022</h2>
                    <p>
                      Transfer of ownership stakes of 85% of “arabian shifa
                      medical co.” To “growth avenue investment company” (“gac”)
                    </p>
                  </div>
                  <i className="stepsmini-line"></i>
                  <div
                    className="date"
                    style={{ backgroundColor: "#BAB0B0" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div
                className=" col d-flex justify-content-center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <CountUp
                
                  start={0}
                  end={40}
                  suffix={"%"}
                  decimals={0}
                  duration={3}
                >
                   {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall={true}>
                      <span
                        style={{
                          fontSize: 100,
                          fontWeight: "bolder",
                          color: "#A98445",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                <br />

                <span className="descCountUp " style={{ textAlign: "center" }}>
                  <small>Acquisition Of</small>
                  <br />
                  Salis For Trading & Marketing
                </span>
              </div>
              <div className="col d-flex justify-content-center">
                <img
                  src="/assets/images/salis.png"
                  alt="salis.png"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row p-3">
              <h4>Strategic Horizons Of 2022</h4>
              <div className="col-6">
                <div className="row align-items-center">
                  <div className="col-1">
                    <h1 className="pe-4 strokeFont">1</h1>
                  </div>
                  <div className="col-11">
                    <p>
                      We aim to enhance the customer satisfaction, to achieve
                      excellence in customer experience, enhance the mental
                      image and foster the quality of services provided.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-1">
                    <h1 className="pe-4 strokeFont">3</h1>
                  </div>
                  <div className="p-4 col-11">
                    <p>
                      We continue to work on the development of the manpower and
                      maintenance of efficiencies within an attracting
                      environment, in addition to excellence in digital
                      transformation.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 align-items-center">
                    <h1 className="pe-4 strokeFont">5</h1>
                  </div>
                  <div className="col-11 p-4">
                    <p>
                      We aim to achieve full harmony between the Company and
                      subsidiaries and associates.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 align-items-center">
                    <h1 className="pe-4 strokeFont">7</h1>
                  </div>
                  <div className="col-11 p-4">
                    <p>
                      We aim to achieve rewarding revenues for our honorable
                      Shareholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row" align-items-center>
                  <div className="col-1">
                    <h1 className="pe-4 strokeFont">2</h1>
                  </div>
                  <div className="col-11 p-4">
                    <p>
                      We aim at achieving the financial sustainability through
                      the increase of the market stake, the development and
                      diversification of services provided and the achievement
                      of growth in revenues and profits.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-1">
                    <h1 className="pe-4 strokeFont">4</h1>
                  </div>
                  <div className="col-11 p-4">
                    <p>
                      We work on achieving the operational excellence with
                      minimum strategic and operational risks.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-1">
                    <h1 className="pe-4 strokeFont">6</h1>
                  </div>
                  <div className="col-11 p-4">
                    <p>
                      We look for the investment opportunities that are
                      compatible with the Company strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Row sm={"4"}>
                <div className="col">
                  <h4  className="bottomline p-2"> Aspirations In 2022 </h4>
                </div>
              </Row>
              <div className="row py-3">
              <h4 >Strategic Objectives</h4>
              </div>
              <div className="row">
                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="border-start"
                  >
                    <h5 className="p-3">Financial</h5>
                  </div>
                  <div className="esnad">
                    <ul>
                      <li>Increasing market stake</li>
                      <li>Developing and diversifying services provided</li>
                      <li>Achieving growth in returns and dividends.</li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="border-start"
                  >
                    <h5 className="p-3">Customers</h5>
                  </div>
                  <div className="esnad">
                    <ul>
                      <li>
                        Enhancing customer satisfaction, experience and mental
                        image.
                      </li>
                      <li>Enhancing quality of services provided</li>
                    </ul>
                  </div>
                </div>
                <div className="col ">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="border-start"
                  >
                    <h5 className="p-3">Internal Operations</h5>
                  </div>
                  <div className="esnad">
                    <ul>
                      <li>Achieving operational excellence</li>
                      <li>Mitigating strategic and operational risks</li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="border-start"
                  >
                    <h5 className="p-3">Learning & Growth</h5>
                  </div>
                  <div className="esnad">
                    <ul>
                      <li>
                        Developing manpower and maintaining the same within an
                        attractive environment
                      </li>
                      <li>Achieving excellence in digital transformation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row py-3">
                <h3>Strategic Potentials</h3>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={"/assets/images/senior.png"}
                        //style={{ width: "20%", height: "20%" }}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>
                        Senior leadership that enjoys experience and
                        qualifications
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={"/assets/images/XMLID.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Big customer database</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={"/assets/images/strong.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Strong financial solvency</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={"/assets/images/code.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Excellent technological systems</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={"/assets/images/world.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Wide geographical spread</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Row sm={"6"}>
                <div className="col" style={{ width: "40%" }}>
                  <h4
                    className="bottomline p-2"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {" "}
                    Subsidiaries And Associates{" "}
                  </h4>
                </div>
              </Row>
              <div className="row">
                <div className="col-4">
                  <div className="row gx-5">
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("spectra")}
                        style={{
                          border:
                            divActive == "spectra"
                              ? "2px solid #C9C3AD"
                              : "none",
                        }}
                      >
                        <img
                          className="img-fluid"
                          alt="image"
                          src="/assets/images/spectra.png"
                        />{" "}
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("gaic")}
                        style={{
                          border:
                            divActive == "gaic" ? "2px solid #C9C3AD" : "none",
                        }}
                      >
                        <img
                          alt="image"
                          className="img-fluid"
                          src="/assets/images/gaic.png"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row gx-5">
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("nabd")}
                        style={{
                          border:
                            divActive == "nabd" ? "2px solid #C9C3AD" : "none",
                        }}
                      >
                        <img
                          className="img-fluid"
                          src="/assets/images/nabd.png"
                          alt="image"
                        />{" "}
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("shifa")}
                        style={{
                          border:
                            divActive == "shifa" ? "2px solid #C9C3AD" : "none",
                        }}
                      >
                        <img
                          className="img-fluid"
                          src="/assets/images/shifa.png"
                          alt="image"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row gx-5">
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("tph")}
                        style={{
                          border:
                            divActive == "tph" ? "2px solid #C9C3AD" : "none",
                        }}
                      >
                        <img
                          className="img-fluid"
                          src="/assets/images/tph.png"
                          alt="image"
                        />{" "}
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="shadow-sm p-3 mb-5 bg-body rounded-3 d-flex justify-content-center"
                        onClick={() => setDivActive("bloovo")}
                        style={{
                          border:
                            divActive == "bloovo"
                              ? "2px solid #C9C3AD"
                              : "none",
                        }}
                      >
                        <img
                          className="img-fluid"
                          alt="image"
                          src="/assets/images/bloovo.png"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className={`col  ${
                      divActive == "spectra" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="spectra"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        Spectra Support Services Company (Spectra)
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/spectraf.png"
                      />{" "}
                    </div>
                    <div>
                      <p>
                        The provision of the perfect service by offering the
                        best and latest technologies in the field of maintenance
                        including plumbing, air conditioning and power services.
                      </p>
                      <p>
                        ”Spectra Support Services Company”, was established in
                        2015, and is headquartered in Riyadh.
                      </p>
                      <p>
                        “Spectra” seeks to achieve the highest levels of quality
                        and excellence in operation, maintenance and other
                        support services through a modern system that complies
                        with the market requirements. It seeks to promote the
                        level of service provided to customers in both the
                        public and private sectors.
                      </p>
                      <p>
                        ”Maharah” acquired 90% of “Spectra” ownership on August
                        4, 2021.
                      </p>
                      <p>
                        “Spectra” is specialized in the provision of the
                        maintenance, operation, cleaning and other support
                        services in the Kingdom of Saudi Arabia
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col  ${
                      divActive == "gaic" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="gaic"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        Growth Avenue Investment Company” (“GAC”)
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/gaic.png"
                      />{" "}
                    </div>
                    <div>
                      <p>
                        “Maharah” has established “Growth Avenue Investment
                        Company” (“GAC”) on June 14, 2021, which is a limited
                        liability company, registered in Riyadh, and 100% owned
                        by Maharah Human Resources Company.
                      </p>
                      <p>
                        “Growth Avenue Investment Company” is specialized in the
                        provision of financial services other than insurance and
                        funding contractual pensions that are not classified
                        anywhere else.
                      </p>
                      <p>
                        “Growth Avenue Investment Company” has established “NABD
                        for Logistics Services” (“NABD”) on August 12, 2021,
                        which is a limited liability company, registered in
                        Riyadh, and licensed for the provision of logistic
                        services.
                      </p>
                      <p>
                        “Growth Avenue Investment Company” acquired 85% of
                        “Arabian Shifa Medical Co.” on January 13, 2022.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col  ${
                      divActive == "nabd" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="nabd"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        “NABD for Logistics Services” (“NABD”)
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/nabdf.png"
                      />{" "}
                    </div>
                    <div>
                      <p>
                        <b>Vision</b>
                        <br />
                        The provision of logistic and delivery services to our
                        customers by offering innovative solutions and developed
                        technologies to meet the increasing demand on speedy
                        trade and immediate delivery.
                      </p>
                      <p>
                        <b>Mission</b>
                        <br />
                        “Growth Avenue Investment Company” is specialized in the
                        provision of financial services other than insurance and
                        funding contractual pensions that are not classified
                        anywhere else.
                      </p>
                      <p>
                        <b>Services</b>
                        <br />• Delivery Services: expressed & scheduled
                        delivery <br />• On-demand specialized delivery: yearly,
                        monthly, per day and per hour.
                      </p>

                      <p>
                        <b>Fleet</b>
                        <br />• New vehicles (Model 2022).
                        <br />
                        • Economical in fuel consumption.
                        <br />
                        • Various types (sedan, bike, van).
                        <br />
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col  ${
                      divActive == "shifa" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="shifa"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        “Arabian Shifa Medical Co.”
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/shifaf.png"
                      />{" "}
                    </div>
                    <div>
                      <p>
                        “Shifa” has been incorporated in 2017, and is a
                        pioneering company specialized in healthcare, and
                        management and operation of hospitals in the Kingdom.
                      </p>
                      <p>
                        <b>Vision</b>
                        <br />
                        To be a benchmark for excelllence in domestic care
                        servises, extended stay hospital and hospotal operation.
                      </p>
                      <p>
                        <b>Mission</b>
                        <br />
                        To be developed in medicine with the provision of
                        comprehensive developed health services while focusing
                        on the treatment and prevenive aspects in oder to have a
                        patient-care centericity along with integrated care for
                        the entire community.
                      </p>
                      <p>
                        <b>Values</b>
                        <br />• Empowerment and Increasing Potentials
                        <br />
                        • Passion
                        <br />
                        • Loyalty
                        <br />
                        • Honesty
                        <br />
                        • Patient and Quality Centricity
                        <br />
                        • Teamwork Spirit
                        <br />
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col  ${
                      divActive == "tph" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="tph"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        Musanid Cleaning Services (TPH Group)
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/tphf.png"
                      />{" "}
                    </div>
                    <div className="row gx-5">
                      <div className="col">
                        <div className="p-3">
                          “TPH” was established in 2015 and is headquartered in
                          Dubai, United Arab Emirates.
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3 ">
                          “TPH” is specialized in the provision of buildings
                          cleaning services, and main services to real estates.
                        </div>
                      </div>
                    </div>
                    <div className="row gx-5">
                      <div className="col">
                        <div className="p-3 ">
                          More than 15.000 customers benefited from the Group
                          services on a daily basis.
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3 ">
                          More than 135.000 customers have benefited from the
                          Group services in 2021
                        </div>
                      </div>
                    </div>
                    <div className="row gx-5">
                      <div className="col">
                        <div className="p-3 ">
                          1.100 employees work in the Group
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3 ">
                          The Group offers 8 specialist training courses.
                        </div>
                      </div>
                    </div>
                    <div className="row gx-5">
                      <div className="col">
                        <div className="p-3 ">
                          “TPH” services include: domestic helpers, drivers,
                          maintenance workers like insect control workers and
                          others on part time or hourly basis, in addition to
                          outsourcing them to full time jobs.
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3 ">
                          “TPH” aims to expand its services in order to change
                          the scene in the Individuals service in United Arab
                          Emirates, and bestow upon the same an international
                          level of excellence that is not available in the
                          market.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col  ${
                      divActive == "bloovo" ? "d-block" : "d-none"
                    }`}
                  >
                    <div
                      className={`shadow-sm p-3 mb-5 bg-body rounded-3 justify-content-center d-flex align-items-center flex-column`}
                      id="bloovo"
                    >
                      <h5 style={{ color: "#A98445" }}>
                        “NABD for Logistics Services” (“NABD”)
                      </h5>
                      <br />
                      <h6>Kingdom of Saudi Arabia Subsidiary</h6>
                      <br />
                      <img
                        className="img-fluid"
                        alt="image"
                        src="/assets/images/bloovo.png"
                      />{" "}
                    </div>
                    <div>
                      <p>
                        “BLOOVO” provides a selective group of innovative and
                        smart recruitment solutions, to help employers and job
                        seekers, through AI-Powered Recruitment Technology with
                        the automated learning algorithms, which aim to pace up
                        and simplify the operations for the acquisition and
                        management of talents, and the automatic arrangement of
                        candidates, through significant matching results, that
                        saves time and costs of company owners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
    </Container>
  );
}
