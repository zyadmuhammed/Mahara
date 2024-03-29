import react, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";
import * as Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "@highcharts/map-collection/countries/sa/sa-all.geo.json";
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

export const dataMap = [
  ["sa-4293", null],
  ["sa-tb", 101],
  ["sa-jz", null],
  ["sa-nj", null],
  ["sa-ri", 8],
  ["sa-md", 1],
  ["sa-ha", 1],
  ["sa-qs", 3],
  ["sa-hs", null],
  ["sa-jf", null],
  ["sa-sh", 1],
  ["sa-ba", null],
  ["sa-as", 1],
  ["sa-mk", 5],
];

export default function Services_Solution() {
  // let { t } = useTranslation("common");
  const [topology, settopology] = useState([]);
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

  const optionss = {
    title: {
      text: "",
    },

    series: [
      {
        type: "map",
        nullColor: "rgba(200, 200, 200, 0.3)",
        mapData: mapDataWorld,
        data: dataMap,
      },
    ],
  };

  return (
    <Container>
      <section style={{ paddingTop: "3rem" }} id="Services_Solution">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1 style={{ fontSize: 60 }}>
                <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  Services &{" "}
                </span>
                <span style={{ color: "#415259", fontWeight: "bold" }}>
                  {" "}
                  Solutions{" "}
                </span>
              </h1>
            </Col>
          </Row>
        </div>
      </section>
      <Row sm={"4"}>
        <div className="col">
          <h4 className="bottomline p-2"> Corporate Sector </h4>
        </div>
      </Row>
      <Row sm={"4"} style={{ paddingTop: "3rem" }}>
        <h4> Manpower Services </h4>
      </Row>
      <section style={{ paddingTop: "3rem" }}>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 border-end ">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/Retail.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Retail Sector</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border-end ">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/Hospitality.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Hospitality & Entertainment Sector</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="p-3  ">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/MedicalSector.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Medical Sector</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border-end">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/Industrial.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Industrial & Operational Sector</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border-end">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/Commercial.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Commercial & Banking Sector</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img
                  src={"/assets/images/GovernmentSector.png"}
                  style={{ width: "20%", height: "20%" }}
                  alt="icon"
                />
                <p>Government Sector</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Row sm={"4"} style={{ paddingTop: "3rem" }}>
        <h4> Geographic Distribution </h4>
      </Row>

      <div>
        <HighchartsReact
          options={optionss}
          highcharts={Highcharts}
          constructorType={"mapChart"}
        />
      </div>

      <section className="m-4">
        <div className="row">
          <div className="row">
            <h5 className="p-2"> Esnad Maharah </h5>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-4">
              <img src={"/assets/images/Esnad-Logo.png"} alt="Esnad" />
            </div>
            <div className="col-8 esnad ">
              <ul>
                <li>The provision of national cadres to companies.</li>
                <li>Outsource the HR services</li>
                <li>The recruitment of efficient cadres and development.</li>
                <li>Seasonal employment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="m-4">
        <div className="row">
          <Row sm={"4"}>
            <h4 className="bottomline p-2"> Individuals Sector </h4>
          </Row>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6">
              <p>Provided Packages</p>
            </div>
            <div className="col-6">
              <p>(Khidmah) Application</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6">
              <div className="row">
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <div className="col-4">
                    <img
                      src={"/assets/images/md-home.png"}
                      style={{ width: "50%", height: "50%" }}
                      alt="icon"
                    />
                  </div>
                  <div className="col-6">
                    <h6>Full time services</h6>
                    <small>
                      Service provider&apos;s residence in the customers&apos;
                      homes
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <div className="col-4">
                    <img
                      src={"/assets/images/timer.png"}
                      style={{ width: "50%", height: "50%" }}
                      alt="icon"
                    />
                  </div>
                  <div className="col-6">
                    <h6>Part Time Services</h6>
                    <small>Khidmah Program</small>
                    <ul className="esnad">
                      <li>Working for limited Hours</li>
                      <li>Varied Monthly Packages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <span>
                    <CountUp
                      start={0}
                      end={500000}
                      prefix={"+"}
                      separator={","}
                      decimals={0}
                      duration={3}
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor
                          onChange={start}
                          delayedCall={true}
                        >
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
                    <p> Beneficiaries cutomers</p>
                  </span>
                </div>
                <div className="col">
                  <img
                    src={"/assets/images/mobile.png"}
                    style={{ width: "65%", height: "80%" }}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-4">
        <Row sm={"6"}>
          <div className="col" style={{ width: "40%" }}>
            <h4 className="bottomline p-2" style={{ whiteSpace: "nowrap" }}>
              {" "}
              Revenues Of The Main Activities Of The Company{" "}
            </h4>
          </div>
        </Row>
        <div className="row">
          <div
            className="shadow p-3 mb-5 bg-body rounded"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div className="row" style={{ width: "100%" }}>
              <div className="col-6 d-flex align-items-center justify-content-center flex-column">
                <span>Total Revenues</span>
                <div className="p-3 ">
                  <span>
                    <CountUp
                      start={0}
                      end={1318.73}
                      separator=","
                      decimals={2}
                      duration={3}
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor
                          onChange={start}
                          delayedCall={true}
                        >
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
                  </span>
                </div>
                <span className="descCountUp">Million Saudi Riyals </span>
              </div>
              <div className="col-6">
                <img
                  src={"/assets/images/piechart.png"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4">
        <Row className="d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-items-center">
            <p className=" p-2" style={{ whiteSpace: "nowrap" }}>
              {" "}
              * All Values in Million Saudi Riyals{" "}
            </p>
          </div>
        </Row>
        <div>
          <div className="overflow-hidden">
            <div className="row gx-5">
              <div className="col">
              <span style={{marginInlineStart:"10rem"}}>Individuals</span>
                <div className="p-3 ">
                
                <div style={{backgroundColor:'#A98445' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={374.59} decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={28.4} suffix={"%"} decimals={1}  duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
              <div className="col">
              <span style={{marginInlineStart:"6rem"}}>Industrial And Operational </span>
                <div className="p-3 d-flex  align-items-center">
                
                <div style={{backgroundColor:'#A98445' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={259.81}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={19.7} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="row gx-5">   
                       

              <div className="col">
                <span style={{marginInlineStart:"10rem"}}>Retail </span>
                <div className="p-3 d-flex  align-items-center">
                
                <div style={{backgroundColor:'#59676B' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={213.48}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={16.2} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
              <div className="col">
              <span style={{marginInlineStart:"10rem"}}>Hospitality  </span>
                <div className="p-3 d-flex  align-items-center">
                
                <div style={{backgroundColor:'#C7C2AF' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={189.21}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={14.3} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="row gx-5">
              <div className="col">
              <span style={{marginInlineStart:"10rem"}}>Healthcare   </span>
                <div className="p-3 d-flex  align-items-center">
               
                <div style={{backgroundColor:'#D3A734' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={170.15}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={12.9} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
              <div className="col">
              <span style={{marginInlineStart:"10rem"}}>Commercial  </span>
                <div className="p-3 d-flex  align-items-center">
                
                <div style={{backgroundColor:'#81543A' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={105.03}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={8.0} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="row gx-5">
              <div className="col">
              <span style={{marginInlineStart:"10rem"}}>Esnad Sector</span>
                <div className="p-3 d-flex  align-items-center">
               
                <div style={{backgroundColor:'#414957' , width:25,height:50,display:'inline-flex',borderRadius:8}}></div>

                <span>
                  <CountUp start={0} end={6.44}decimals={2} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 80,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                <span>
                  <CountUp start={0} end={0.5} suffix={"%"} decimals={1} duration={3}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor
                        onChange={start}
                        delayedCall={true}
                      >
                        <span
                          style={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            color: "#415259",
                          }}
                          ref={countUpRef}
                        />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </span>
                
                </div>
              </div>
              <div className="col">
                <div className="p-3 d-flex  align-items-center">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
