import react, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,

} from "reactstrap";
import Policy from "./Policy";

export default function SustainabilitySocialImpact() {
    // let { t } = useTranslation("common");
    return (
        <Container>
          <section style={{ paddingTop: "3rem" }} id="SustainabilitySocialImpact">
            <div>
              <Row>
                <Col
                  lg="12"
                  style={{ textAlign: "initial", whiteSpace: "nowrap" }}
                  className="reveal fade-left"
                >
                  <h1 style={{fontSize:60}}>
                    <span style={{ color: "#a98445", fontWeight: "bold" }}>
                    Sustainability{" "}
                    </span>
                    <span style={{ color: "#415259", fontWeight: "bold" }}>
                      {" "}
                      Approach{" "}
                    </span>
                  </h1>
                </Col>
              </Row>
            </div>
          </section>
    
          <section style={{ paddingTop: "3rem" }}>
            <div className="row">
              <div className="col">
                <img  src={"/assets/images/vision.png"} className="img-fluid" alt="vision" />
                <h5>Vision</h5>
                <p>
                Contributing to the community sustainability and service and to having a positive effect to build a developed and vital community.
                </p>
              </div>
              <div className="col">
                <img  src={"/assets/images/mission.png"} className="img-fluid" alt="mission" />
                <h5>Mission</h5>
                <p>
                Stemming from our belief that the company social responsibility is a religious and moral duty, and by way of achieving the social solidarity and cooperation, we have laid down the main pillars for the provision of social responsibility practices, in line with the Kingdom Vision 2030 and UN Sustainable Development Program.
                </p>
              </div>
              <div className="col">
                <img  src={"/assets/images/Pillars.png"} className="img-fluid" alt="Pillars" />
                <h5>Pillars</h5>
                <p>
                Providing support to the third sector and community members to achieve the transition from pastoral work to development in order to contribute to the sustainable development. 
                </p><p>
                The sustainability of the vital resources like environment, man and power today shall form our future, and our aim is to limit the harmful practices that might negatively affect the future generations.

                </p>
              </div>
            </div>
          </section>
          <section style={{ paddingTop: "3rem" }}>
            <Policy/>
          </section>

        </Container>
      );
   }