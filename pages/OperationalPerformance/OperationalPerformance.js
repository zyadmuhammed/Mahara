
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";

import CountUp from "react-countup";
import { Chart } from "react-google-charts";


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
  };

  //  const dataBar = [
  //     ["", "2021","2018", { role: 'style' }],
  //     ["xAxis",14 ,25,"#1A1818"],

  //   ];
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
    chart: {
      title: "Turnover Rate",
      //   subtitle: "Based on most recent and previous census data",
    },
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
      title: "",
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
              <h1>
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
        <h5 className="bottomline p-2"> Our Human Resources </h5>
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
                          style={{
                            fontSize: 60,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          start={0}
                          end={80}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        ></CountUp>
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
                            fontSize: 60,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          start={0}
                          end={20}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        ></CountUp>
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
              <h5 className="display-6">Competencies Of Recruitment</h5>
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

      <section className="m-4">
      <div className="talent-development container">
      <div>
        <h3 className="text-left">Talent Development</h3>
      </div>

      <div className="row">

        <div className="row row-style shadow-sm">
          <div className="col-md-3 col-3 col-lg-3 col-sm-3 st ">
            <div className="row">
              <div className="col-3">
                <img  src="/assets/images/row1.png" className="img-style" alt="Iamge"/>
              </div>
              <div className="col-9"> Training hours</div>
            </div>
          </div>
          <div className="col-md-9 col-9 col-lg-9 col-sm-9 st ">
            <div className="row ">
              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>

              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>
            </div>
          </div>

        </div>


        <div className="row row-style shadow-sm">

          <div className="col-md-3 col-3 col-lg-3 col-sm-3 st">
            <div className="row">
              <div className="col-3">
                <img  src="/assets/images/row2.png" className="img-style" alt="Iamge"/>
              </div>
              <div className="col-9">Completion</div>
            </div>{" "}
          </div>
          <div className="col-md-9 col-9 col-lg-9 col-sm-9 st">
            <div className="row">
              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>

              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>
            </div>
          </div>

        </div>

        <div className="row row-style shadow-sm">

          <div className="col-md-3 col-3 col-lg-3 col-sm-3 st">
            <div className="row">
              <div className="col-3">
                <img  src="/assets/images/row3.png" className="img-style" alt="Iamge"/>
              </div>
              <div className="col-9"> Trainee </div>
            </div>{" "}
          </div>
          <div className="col-md-9 col-9 col-lg-9 col-sm-9 st">
            <div className="row">
              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>

              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>
            </div>
          </div>

        </div>

        <div className="row row-style shadow-sm">

          <div className="col-md-3 col-3 col-lg-3 col-sm-3 st">
            <div className="row">
              <div className="col-3">
                <img  src="/assets/images/row4.png" className="img-style"alt="Iamge" />
              </div>
              <div className="col-9"> Online Training</div>
            </div>{" "}
          </div>
          <div className="col-md-9 col-9 col-lg-9 col-sm-9 st">
            <div className="row">
              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>

              <div className="col-md-6 col-6 col-lg-6 col-sm-6">
                <span> 16683</span>
                <span> Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </Container>
  );
}
