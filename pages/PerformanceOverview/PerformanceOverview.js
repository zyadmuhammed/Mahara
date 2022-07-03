import react, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import chairman from "../../public/assets/images/chairman.png";
import chiefExecutive from "../../public/assets/images/chiefExecutive.png";
import { FaUserTie } from "react-icons/fa";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

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

export default function PerformanceOverview() {
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
  return (
    <Container>
      <section style={{ paddingTop: "3rem" }} id="PerformanceOverview">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1>
                <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  2021 Performance{" "}
                </span>
                <span style={{ color: "#415259", fontWeight: "bold" }}>
                  {" "}
                  Overview{" "}
                </span>
              </h1>
            </Col>
          </Row>
        </div>
      </section>

      <Row sm={"4"}>
        <h5 className="bottomline p-2"> Financial Indicators </h5>
      </Row>
      <section style={{ paddingTop: "3rem" }}>
        <div
          style={{ display: "flex", alignItems: "flex-end" }}
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
        >
          <div className="col">
            <span className="">Company Revenues</span>
            <div className="p-3 ">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#D8A115",
                  }}
                  start={0}
                  end={1.3}
                  decimals={1}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Billion Saudi Riyals</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#A98445",
                  }}
                  start={0}
                  end={25}
                  suffix={"%"}
                  decimals={0}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Return On Equity (ROE)</span>
              </span>
            </div>
          </div>

          <div className="col">
            <div className=" "></div>
          </div>
          <div className="col">
            <span className="">Total Assets</span>
            <div className="p-3 ">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#D8A115",
                  }}
                  start={0}
                  end={1036}
                  separator=","
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Million Saudi Riyals</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#A98445",
                  }}
                  start={0}
                  end={65}
                  suffix={"%"}
                  decimals={0}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp"> As Current Assets</span>
              </span>
            </div>
          </div>
          <div className="col">
            <span>Operating Profit</span>
            <div className="p-4 ">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#D8A115",
                  }}
                  start={0}
                  end={146.7}
                  decimals={1}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Million Saudi Riyals</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#A98445",
                  }}
                  start={0}
                  end={97}
                  suffix={"%"}
                  decimals={0}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Realized Profit Distributed</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <span>Net Income</span>
            <div className="p-4">
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#D8A115",
                  }}
                  start={0}
                  end={144.9}
                  decimals={1}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">Million Saudi Riyals</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="p" style={{ marginTop: "-1.5rem" }}>
              <span>
                <CountUp
                  style={{
                    fontSize: 60,
                    fontWeight: "bolder",
                    color: "#A98445",
                  }}
                  start={0}
                  end={11}
                  suffix={"%"}
                  decimals={0}
                  duration={3}
                ></CountUp>
                <div className="bottomline2"></div>
                <span className="descCountUp">
                  Net Income Of Shareholders Of The Parent Company
                </span>
              </span>
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
                          src="/assets/images/Individuals_Sector.png"
                          alt="Individuals Sector"
                        />
                        <CountUp
                          style={{
                            fontSize: 60,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          start={0}
                          end={72}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        ></CountUp>
                      </div>
                      <p className="descCountUp">Individuals Sector</p>
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
                          src="/assets/images/Corporate_Sector.png"
                          alt="Individuals Sector"
                        />
                        <CountUp
                          style={{
                            fontSize: 60,
                            fontWeight: "bolder",
                            color: "#D8A115",
                          }}
                          start={0}
                          end={28}
                          suffix={"%"}
                          decimals={0}
                          duration={3}
                        ></CountUp>
                      </div>
                      <p className="descCountUp">Corporate Sector </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Row sm={"4"}>
        <h5 className="bottomline p-2"> Operational Performance </h5>
      </Row>
      <section className="m-4">
        <div className="mx-5 overflow-hidden">
          <div className="row gy-5 ">
            <div className="col-6">
              <div className="p-3  ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#415259",
                    }}
                    start={0}
                    end={900}
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                More than 900 Customers in the Corporate Sector{" "}
              </span>
            </div>
            <div className="col-6">
              <div className="p-3 ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#723B1C",
                    }}
                    start={0}
                    end={90000}
                    separator=","
                    decimals={0}
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                More than 90,000 Customers in the Individuals Sector{" "}
              </span>
            </div>
            <div className="col-6">
              <div className="p-3 ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#242E40",
                    }}
                    start={0}
                    end={160000}
                    separator=","
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                Service For More Than 160,000 Houses
              </span>
            </div>
            <div className="col-6">
              <div className="p-3 ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#D8A115",
                    }}
                    start={0}
                    end={22}
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                22 Company Branches Cover 11 Cities All Over The Kingdom
              </span>
            </div>
            <div className="col-6">
              <div className="p-3 ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#A98445",
                    }}
                    start={0}
                    end={120000}
                    separator=","
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                Providing More Than 120,000 Employees In More Than 383
                Professions
              </span>
            </div>
            <div className="col-6">
              <div className="p-3 ">
                <span>
                  <CountUp
                    style={{
                      fontSize: 60,
                      fontWeight: "bolder",
                      color: "#242E40",
                    }}
                    start={0}
                    end={50000}
                    separator=","
                    duration={3}
                  ></CountUp>
                </span>
              </div>
              <span className="descCountUp">
                More Than 50,000 Subscribers In (Khidmah) Application
              </span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
