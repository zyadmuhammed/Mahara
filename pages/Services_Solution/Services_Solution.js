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

export default function Services_Solution() {
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
      <section style={{ paddingTop: "3rem" }} id="Services_Solution">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1>
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
          <h5 className="bottomline p-2"> Corporate Sector </h5>
        </div>
      </Row>
      <Row sm={"4"} style={{ paddingTop: "3rem" }}>
        <h6> Manpower Services </h6>
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
                <Image
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
                <Image
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
                <Image
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
                <Image
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
                <Image
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
                <Image
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

      <section className="m-4">
        <div className="row">
          <div className="row">
            <h5 className="p-2"> Esnad Maharah </h5>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-4">
              <Image src={"/assets/images/Esnad-Logo.png"} alt="Esnad" />
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
            <h5 className="bottomline p-2"> Corporate Sector </h5>
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
                    <Image
                      src={"/assets/images/md-home.png"}
                      style={{ width: "50%", height: "50%" }}
                      alt="icon"
                    />
                  </div>
                  <div className="col-6">
                    <h6>Full time services</h6>
                    <small>
                      Service provider&apos;s residence in the customers&apos; homes
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
                    <Image
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
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bolder",
                        color: "#D8A115",
                      }}
                      start={0}
                      end={500000}
                      prefix={"+"}
                      separator={","}
                      decimals={0}
                      duration={3}
                    ></CountUp>
                  <p> Beneficiaries cutomers</p>
                    
                  </span>
                </div>
                <div className="col">
                  <Image
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
    </Container>
  );
}
