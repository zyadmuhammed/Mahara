import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function OperationalPerformance() {
  // let { t } = useTranslation("common");
  const data = [
    ["", ""],
    ["Saudis", 80],
    ["Non-Saudis ", 20],
  ];

  const options = {
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
    animation: {
      duration: 1000,
      easing: "out",
      startup: true,
    },
  };

  const dataBar = [
    [
      "Year",
      "Perecent",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["2021", 14, "color: #A98445", null],
    ["2018", 25, "color: #1A1818", null],
  ];

  const optionsBar = {
    title: "Turnover Rate",
    titleTextStyle: {
      color: "#D8A115",
    },
    animation: {
      duration: 1000,
      easing: "out",
      startup: true,
    },
    bars: "horizontal",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  };

  return (
    <Container>
      <section style={{ paddingTop: "3rem" }} id="OperationalPerformance">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1 style={{ fontSize: 60 }}>
                <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  Operational{" "}
                </span>
                <span style={{ color: "#415259", fontWeight: "bold" }}>
                  {" "}
                  Performance{" "}
                </span>
              </h1>
            </Col>
          </Row>
        </div>
      </section>

      <Row sm={"4"}>
        <h4 className="bottomline p-2"> Our Human Resources </h4>
      </Row>

      <section className="m-4">
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
            <div className="col-6">
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>
            <div className="col-6">
              <div className="overflow-hidden">
                <div className="col gx-5">
                  <div className="col">
                    <div className="p-3">
                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            width: "15%",
                            height: "15%",
                            margin: "1rem",
                          }}
                          src="/assets/images/Saudis.png"
                          alt="Saudis"
                        />
                        <CountUp
                          start={0}
                          end={80}
                          suffix={"%"}
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
                      </div>
                      <p className="descCountUp">Saudis</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            width: "15%",
                            height: "15%",
                            margin: "1rem",
                          }}
                          src="/assets/images/Non_ saudis.png"
                          alt="Non-Saudis"
                        />
                        <CountUp
                          style={{
                            fontSize: "300%",
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          start={0}
                          end={20}
                          suffix={"%"}
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
                      </div>
                      <p className="descCountUp">Non-Saudis </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4">
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
            <div className="col">
              <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={dataBar}
                options={optionsBar}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="m-4">
        <div className="policy" style={{ width: "100%" }}>
          <div className="container">
            {/* Title Section */}
            <div className="title-section mb-4" style={{ width: "60%" }}>
              <h4 className="">Competencies Of Recruitment</h4>
              <hr />
              <p>Human Capital Transformation Program</p>
            </div>
            {/* Title Section */}
            <h5 className="display-6">Key Achievements</h5>
            {/* Info Box */}
            <div className="row">
              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Enablement Of Hr</h3>
                  <div className="icon-1 icon"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Enhancement Of Shareholders Confidence</h3>
                  <div className="icon-2 icon"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Enhancement Of Internal Work Environment</h3>
                  <div className="icon-3 icon"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Enhancement Of Servvices Quality Provided To Customer</h3>
                  <div className="icon-4 icon"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Activating Of Social Resposibility</h3>
                  <div className="icon-5 icon"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mb-4">
                  <h3>Engaging Stakeholders</h3>
                  <div className="icon-6 icon"></div>
                </div>
              </div>
            </div>
            {/* Info Box */}
          </div>
        </div>
      </section>

      <section className="m-4 p-3" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="title-section mb-4" style={{ width: "60%" }}>
          <h4>Talent Development</h4>
        </div>

        <div className="talentd container-fluid p-3">
          <div className="first-col d-flex justify-content-between flex-row ">
            <div
              className="img-icon left-side me-3 row"
              style={{ backgroundColor: "transparent" }}
            ></div>
            <div
              className=" d-flex flex-row  right-side"
              style={{ backgroundColor: "transparent" }}
            >
              <div className=" w-50 ">
                <h3>2021</h3>
              </div>

              <div className=" w-50">
                <h3>2022</h3>
              </div>
            </div>
          </div>
          <div className="first-col d-flex justify-content-between flex-row ">
            <div className="img-icon left-side me-3 row">
              <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 text-center bg-img"></div>
              <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12 text-center">
                Traninig Hours
              </div>
            </div>
            <div className="second-col d-flex flex-row  right-side">
              <span className="tr-shape"></span>

              <div className="info-1 w-50 h-100">
                <span className="me-3">16683</span>
                <span>Hours</span>
              </div>

              <div className="info-2 w-50">
                <span className="me-3">986.5</span>
                <span>Hours</span>
              </div>
            </div>
          </div>
          <div className="first-col d-flex justify-content-between flex-row ">
            <div className="img-icon left-side me-3 row">
              <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 text-center bg-sec-img"></div>
              <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12 text-center">
                Completion{" "}
              </div>
            </div>
            <div className="second-col d-flex flex-row  right-side">
              <span className="tr-shape"></span>

              <div className="info-1 w-50 h-100">
                <span className="me-3">174%</span>
                <span>Percent</span>
              </div>

              <div className="info-2 w-50">
                <span className="me-3">80%</span>
                <span>Percent</span>
              </div>
            </div>
          </div>
          <div className="first-col d-flex justify-content-between flex-row ">
            <div className="img-icon left-side me-3 row">
              <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 text-center bg-thrd-img"></div>
              <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12 text-center">
                Traninee
              </div>
            </div>
            <div className="second-col d-flex flex-row  right-side">
              <span className="tr-shape"></span>

              <div className="info-1 w-50 h-100">
                <span className="me-3">1908</span>
                <span>Trainee</span>
              </div>

              <div className="info-2 w-50">
                <span className="me-3">233</span>
                <span>Trainee</span>
              </div>
            </div>
          </div>
          <div className="first-col d-flex justify-content-between flex-row ">
            <div className="img-icon left-side me-3 row">
              <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 text-center bg-forth-img"></div>
              <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12 text-center">
                Online Training
              </div>
            </div>
            <div className="second-col d-flex flex-row  right-side">
              <span className="tr-shape"></span>

              <div className="info-1 w-50 h-100">
                <span className="me-3">3763</span>
                <span>Hours</span>
              </div>

              <div className="info-2 w-50">
                <span className="me-3">986.5</span>
                <span>Hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="title-section mb-4" style={{ width: "60%" }}>
          <h4>Access to our Customers</h4>
        </div>
        <div className="row">
                <div className="col" >
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3" style={{ height: 120 }}>
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
                        src={"/assets/images/Excellence.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Excellence in Organizational Communication</p>
                    </div>
                  </div>
                </div>
                <div className="col" >
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3" style={{ height: 120 }}>
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
                        src={"/assets/images/emarket.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Effective Marketing</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="shadow-sm p-3 mb-5 bg-body rounded-3" style={{ height: 120 }}>
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
                        src={"/assets/images/digital.png"}
                        className="img-fluid"
                        alt="icon"
                      />
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
       
      </section>
    </Container>
  );
}
