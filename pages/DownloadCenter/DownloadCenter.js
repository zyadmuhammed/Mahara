import react, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useRouter } from 'next/router'

export default function DownloadCenter() {
  // let { t } = useTranslation("common");
  const router = useRouter();

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
  function handleChange(e) {
   let value = e.target.value;
   let checked=e.target.checked;
   // do whatever you want with isChecked value
   if(checked){
      let link=`/assets/pdf/En/${value}.pdf`
      window.open(`/assets/pdf/En/${value}.pdf`, '_blank');
   }
  
 
 }
  return (
    <Container>
      <section style={{ paddingTop: "3rem" }} id="DownloadCenter">
        <div>
          <Row>
            <Col
              lg="12"
              style={{ textAlign: "initial", whiteSpace: "nowrap" }}
              className="reveal fade-left"
            >
              <h1>
                <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  Download{" "}
                </span>
                <span style={{ color: "#415259", fontWeight: "bold" }}>
                  {" "}
                  Center{" "}
                </span>
              </h1>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <h4>Section Title</h4>
        <form style={{ marginInlineStart: "15%" }}>
          <div className="row">
            <div className="col">
              <div className="p-3">
                <input
                  type="checkbox"
                  id="ManagementLetters"
                  name="download"
                  value="ManagementLetters"
                  onChange={handleChange}
                />
                <label htmlFor="ManagementLetters">Management Letters</label>
              </div>
              <div className="p-3">
                <input
                  type="checkbox"
                  id="PerformanceOverview"
                  name="download"
                  value="PerformanceOverview"
                  onChange={handleChange}
                />
                <label htmlFor="PerformanceOverview">Performance Overview</label>
              </div>

              <div className="p-3">
                <input
                  type="checkbox"
                  id="StrategicReports"
                  name="download"
                  value="StrategicReports"
                  onChange={handleChange}
                />
                <label htmlFor="StrategicReports">Strategic Reports</label>
              </div>
              <div className="p-3">
                <input
                  type="checkbox"
                  id="ServicesSolutions"
                  name="download"
                  value="ServicesSolutions"
                  onChange={handleChange}
                />
                <label htmlFor="ServicesSolutions">Services & Solutions </label>
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <input
                  type="checkbox"
                  id="OperationalPerformance"
                  name="download"
                  value="OperationalPerformance"
                  onChange={handleChange}
                />
                <label htmlFor="OperationalPerformance">
                  Operational Performance{" "}
                </label>
              </div>

              <div className="p-3">
                <input
                  type="checkbox"
                  id="SustainabilitySocialImpact"
                  name="download"
                  value="SustainabilitySocialImpact"
                  onChange={handleChange}
                />
                <label htmlFor="SustainabilitySocialImpact">
                  Sustainability & Social Impact{" "}
                </label>
              </div>
              <div className="p-3">
                <input
                  type="checkbox"
                  id="FinancialPerformance"
                  name="download"
                  value="FinancialPerformance"
                  onChange={handleChange}
                />
                <label htmlFor="FinancialPerformance">Financial Performance</label>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
}
