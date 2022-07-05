import react, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

export default function FinancialPerformance() {
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
          "Year","Perecent",{ role: "style" }],
        ["2021", 14, "color: #A98445"],
        ["2018", 25, "color: #1A1818"],
      ];
    
      const optionsBar = {
       
        title: "Turnover Rate",
        titleTextStyle: {
          color: '#D8A115'
      },  
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
          },
        
        bars: "horizontal",
        bar: { groupWidth: "95%" },
        legend: {  },
        axes: {
          y: {
            0: { side: "right" },
          },
        },
      };
      const data1 = [
        ["Q", "2020", "2021"],
        ["Q1", 390, 322],
        ["Q2", 352, 323],
        ["Q3", 342, 325],
        ["Q4", 332, 350],
        
      ];
      const optionsBar1 = {
       
        title: "Turnover Rate",
        titleTextStyle: {
          color: '#D8A115'
      },  
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
          },
        
          vAxis: {
            
            minValue: 0,
          },
        
          legend: {position: 'bottom'},
        seriesType: "bars",
        series: {
            0: {  // set the options for the first series (columns)
                type: "bars",
                targetAxisIndex: 0,
                color: '#1A1818'

            },
            1: {  // set the options for the second series (line)
                type: "bars",
                targetAxisIndex: 1,
                color: '#A98445'

            }
        }

      };

      const data2 = [
        ["Q", "2020", "2021"],
        ["Q1", 79, 55],
        ["Q2", 74, 54],
        ["Q3", 63, 54],
        ["Q4", 56, 56],
        
      ];
      const optionsBar2 = {
       
        title: "Gross Income",
        titleTextStyle: {
          color: '#D8A115'
      },  
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
          },
        
          vAxis: {
            
            minValue: 0,
          },
        
          legend: {position: 'bottom'},
        seriesType: "bars",
        series: {
            0: {  // set the options for the first series (columns)
                type: "bars",
                targetAxisIndex: 0,
                color: '#1A1818'

            },
            1: {  // set the options for the second series (line)
                type: "bars",
                targetAxisIndex: 1,
                color: '#A98445'

            },
            
        }

      };
      const data3 = [
        ["Q", "2020", "2021","change"],
        ["Q1", 57, 31,11],
        ["Q2", 49, 39,20],
        ["Q3", 48, 36,18],
        ["Q4", 23, 39,48],
        
      ];
      const optionsBar3 = {
       
        title: "Net Income",
        titleTextStyle: {
          color: '#D8A115'
      },  
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
          },
        
          vAxis: {
            
            minValue: 0,
          },
        
          legend: {position: 'bottom'},
        seriesType: "bars",
        series: {
            0: {  // set the options for the first series (columns)
                type: "bars",
                targetAxisIndex: 0,
                color: '#1A1818'

            },
            1: {  // set the options for the second series (line)
                type: "bars",
                targetAxisIndex: 1,
                color: '#A98445'

            },
            2: {  // set the options for the second series (line)
                type: "line",
                targetAxisIndex: 1,
                color: '#D8A115'

            }
        }

      };
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
      useEffect(()=>{
        window.addEventListener("scroll", reveal);
      })
      
      
    return (
        <Container>
        <section style={{ paddingTop: "3rem" }} id="FinancialPerformance">
          <div>
            <Row>
              <Col
                lg="12"
                style={{ textAlign: "initial", whiteSpace: "nowrap" }}
                className="reveal fade-left"
              >
                <h1>
                  <span style={{ color: "#a98445", fontWeight: "bold" }}>
                  Financial{" "}
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
          <h5 className="bottomline p-2"> Quarterly Financial Results </h5>
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
            <Chart
                  chartType="ComboChart"
                  width="100%"
                  height="400px"
                  data={data1}
                  options={optionsBar1}
                />
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
                  chartType="ComboChart"
                  width="100%"
                  height="400px"
                  data={data2}
                  options={optionsBar2}
                />
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
                  chartType="ComboChart"
                  width="100%"
                  height="400px"
                  data={data3}
                  options={optionsBar3}
                />
              </div>
            </div>
          </div>
        </section>
        <Row sm={"4"}>
        <h5 className="bottomline p-2"> 2021 Growth Rates </h5>
      </Row>
      
       
     <div>
     <div className="row d-flex justify-content-center align-items-center align-content-center">
     
     <div className="col-6">
       <span className="">Revenues</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={1319}
             separator={','}
             //decimals={1}
             duration={3}
           ></CountUp>
         <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>
       </div>
     </div>
     <div className="col-6">
     <span className="">Revenues</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#A98445",
             }}
             start={0}
             end={145}
            //  suffix={"%"}
            //  decimals={0}
             duration={3}
           ></CountUp>
            <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>

       </div>
     </div>
   </div>
   <div className="row d-flex justify-content-center align-items-center align-content-center">
     
     <div className="col-6">
       <span className="">Operation Income</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={147 }
             //separator={','}
             //decimals={1}
             duration={3}
           ></CountUp>
         <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>
       </div>
     </div>
     <div className="col-6">
        <span>Cash From Operations</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#A98445",
             }}
             start={0}
             end={28}
            //  suffix={"%"}
            //  decimals={0}
             duration={3}
           ></CountUp>
            <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>
       </div>
     </div>
   </div>
   <div className="row d-flex justify-content-center align-items-center align-content-center">
     
     <div className="col-6">
       <span className="">Profit Distribution</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={14063 }
             separator={','}
             //decimals={1}
             duration={3}
           ></CountUp>
         <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>
       </div>
     </div>
     <div className="col-6">
        <span>Net Working Capital</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#A98445",
             }}
             start={0}
             end={293}
            //  suffix={"%"}
            //  decimals={0}
             duration={3}
           ></CountUp>
            <br/>
           <span className="descCountUp">Million Saudi Riyals</span>
         </span>
       </div>
     </div>
   </div>
   <div className="row d-flex justify-content-center align-items-center align-content-center">
     
     <div className="col-6">
       <span className="">Gross Margin</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={17}
             suffix={"%"}
             decimals={0}
             duration={3}
           ></CountUp>
         <br/>
           {/* <span className="descCountUp">Million Saudi Riyals</span> */}
         </span>
       </div>
     </div>
     <div className="col-6">
        <span>Net Margin</span>
       <div className="p-3 ">
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
            <br/>
           {/* <span className="descCountUp">Return On Equity (ROE)</span> */}
         </span>
       </div>
     </div>
   </div>
   <div className="row d-flex justify-content-center align-items-center align-content-center">
     
     <div className="col-6">
       <span className="">Cash Conversion Ratio (CCR)</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={19}
             suffix={"%"}
             decimals={0}
             duration={3}
           ></CountUp>
         <br/>
           {/* <span className="descCountUp">Million Saudi Riyals</span> */}
         </span>
       </div>
     </div>
     <div className="col-6">
     <span className="">Liquidity Ratio</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#A98445",
             }}
             start={0}
             end={1.78}
            //  suffix={"%"}
              decimals={2}
             duration={3}
           ></CountUp>
            <br/>

         </span>
       </div>
     </div>
   </div>
   <div className="row d-flex ">
     
     <div className="col-6">
       <span className="">Cash Ratio</span>
       <div className="p-3 ">
         <span>
           <CountUp
             style={{
               fontSize: "300%",
               fontWeight: "bolder",
               color: "#D8A115",
             }}
             start={0}
             end={0.24}
            // suffix={"%"}
             decimals={2}
             duration={3}
           ></CountUp>
         <br/>
           {/* <span className="descCountUp">Million Saudi Riyals</span> */}
         </span>
       </div>
     </div>
    
   </div>
     </div>
     
  
    
      </Container>
    );
    
   }