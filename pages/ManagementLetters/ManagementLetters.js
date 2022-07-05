import react, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import chiefExecutive from '../../public/assets/images/chiefExecutive.png'
import {FaUserTie} from'react-icons/fa'

export default function ManagementLetters() {
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
      useEffect(()=>{
        window.addEventListener("scroll", reveal);
      })
      
      
    return (
        <Container >
            <section style={{paddingTop:'3rem'}} id="Chairman">
            <div>
                <Row>
                <Col sm='4' style={{textAlign:'center'}} className='reveal fade-left'>
                    <h1 style={{color:'#a98445'}}>Chairman&apos;s </h1>
                    
                    <h1 style={{color:'#415259'}}> Letters</h1>
                </Col>
                <Col sm='8'>
                </Col>
            </Row>
            <Row>
                <Row>
                
                </Row>
            
                <Col lg='4' className="reveal fade-left">
                    
                    <div>
                            <img 
                                src={"/assets/images/chairman.png"}
                                className="img-fluid"
                                alt="ChairMan"
                            />
                            <Row style={{borderRadius:'0px 30px 15px 30px',
                                backgroundColor:'#c9c3ad',
                                width:'85%',
                                display:'flex',
                                alignItems:'center',
                                alignContent:'center',
                                justifyContent:'center'
                                }}>
                                <Col sm='2'>
                                <FaUserTie color='#415259' size={24} />
                                </Col>
                                <Col sm='10'>
                                <p>Chairman <br/><small>Suleiman Bin Abdul Aziz Al Majed</small></p> 
                                
                                
                                </Col>
                            </Row>
                    </div>
                   
                </Col>
                <Col lg='8' className="reveal fade-right">
                    <p>
                     Messrs./ “Maharah” Shareholders and Partners, On my own behalf and on behalf of the Board, I have the pleasure to present to you Maharah Human Resources Company Annual Report 2021, in which the Company continued to focus more on sustainable growth, more strategic and operational empowerment.
                    </p>
                    <br/>
                        <p>
                                    The year 2021 has witnessed lots of challenges, especially in the stage of market recovery in the wake of COVID-19 pandemic. On the other hand, it witnessed lots of achievements. Thanks to its Board and hardworking team, “Maharah” has been able to overcome lots of difficulties at this stage, and continued to provide a tangible added value to its customers and partners, maintained its business and sustainability efficiently while giving special care to human cadres and manpower.

                                    Most importantly, “Maharah” has continued its strategy for the diversification of its investments and provided services. Within the framework of our strategic transformations in 2021, we adopted the Digital Transformation Strategy, and further approved a Human Capital Transformation Program. We are still going on with steady steps on the path of operational excellence, driven by a highly diversified and flexible business model.
                        </p>
                        <br/>
                        <p>
                            In 2022, we shall further be honing our strategic focus and investments into the future, through the development of integrated services tailored to meet our customers’ needs, enhance our digital capabilities, develop our manpower and take on a leading role in the economic and social sustainability.

                            Last but not least, I would like to express my gratitude and appreciation to the previous Board Members for their efforts exerted to achieve the Company objectives.
                        </p>
                        <br/>
                        <p>
                            Last but not least, I would like to express my gratitude and appreciation to the previous Board Members for their efforts exerted to achieve the Company objectives.
                        </p>
                        <br/>
                        <p>
                            Last but not least, I would like to express my gratitude and appreciation to the previous Board Members for their efforts exerted to achieve the Company objectives.
                            At the same time, I hereby hail the election of the Board Members of the new session which started in May 2021, and shall continue for three years.

                        </p>
                        <br/>
                        <p>
                        I would like to extend my gratitude for the efforts exerted by the Government and the Ministry of Human Resources and Social Development (HRSD) in terms of supporting HR legislations and initiatives that aim at developing work laws and improving the relationship between the employees and enterprises. 

                        </p>
                        <br/>
                        <p>
                        It’s also my pleasure to hereby praise and acknowledge our wise leadership for its devoted care to both the business and private sectors in order to push forward the course of development in the Kingdom. I further thank our generous shareholders for their continuous confidence and support.

                        </p>


                </Col>
            </Row>
            </div>
            </section>
           
           <section style={{paddingTop:'3rem'}} id="ChiefExecutiveOfficer">
           <div>
                <Row>
                <Col sm='4' style={{textAlign:'center'}} className='reveal fade-left'>
                    <h1 style={{color:'#a98445'}}> Chief Executive Officer&apos;s </h1>
                    <h1 style={{color:'#415259'}}> Letters</h1>
                </Col>
                <Col sm='8'>
                </Col>
            </Row>
            <Row>
                <Row>
                
                </Row>
            
                <Col  lg='4' className="reveal fade-left">
                    
                    <div>
                     {/* <h1 style={{color:'#a98445'}}> Chief Executive Officer's </h1>
                     <h1 style={{color:'#415259'}}> Letters</h1> */}
                            <img 
                                src={"/assets/images/chiefExecutive.png"}
                                className="im-fluid"
                                alt="chiefExecutive"
                            />
                            <Row style={{borderRadius:'0px 30px 15px 30px',
                                backgroundColor:'#c9c3ad',
                                width:'85%',
                                display:'flex',
                                alignItems:'center',
                                alignContent:'center',
                                justifyContent:'center'
                                }}>
                                    <Col sm='2'>
                                         <FaUserTie color='#415259' size={24} />
                                    </Col>
                                    <Col sm='10'>
                                    <p>Chief Executive Officer <br/><small>Abdul Aziz Bin Aidah Al Kathiris</small></p> 
                                    
                                    
                                    </Col>
                            </Row>
                    </div>
                   
                </Col>
                <Col lg='8' className="reveal fade-right">
                    <p>
                    Messrs./ “Maharah” Shareholders and Partners, In light of the exceptional and tremendous efforts exerted by “Maharah” employees; the Company managed, in 2021, to overcome a number of challenges that resulted from the consequences of the COVID-19 pandemic over the past year in a flexible way that helped it to overcome such obstacles. The key objective of the Company was to restore the normal status before the pandemic, but the suspension of receiving the manpower from the biggest outsourcing countries most of the year prevented the Company from achieving such key objective. Despite the airport and airfield closures imposed upon such outsourcing countries, yet, the Company managed to launch a number of initiatives and provide quick solutions to maintain its operational efficiency and internal work model, to make the optimum use of the available cost-effective resources. However, the pandemic had a great and positive effect on the Company, as Company, due to facing such pandemic, was obliged to think outside the box and create new initiatives and procedures that helped to add to the growth of the sector instead of its shrinking. Such procedures led to the rise in the Company revenues in Q4 by 74% at SAR 39.27 million, despite the challenges we faced. 
                    </p>
                    <br/>
                    <h5>Overcoming Risks</h5>
                        <p>
                                The spread of “COVID-19” pandemic in the manpower sourcing countries has massively affected the growth of the Company business, however, we managed to look for alternatives, to recruit manpower from various countries, activate the internal employment, and maintain large number of manpower by renewing their contracts through granting them many new benefits and advantages. We further attempted to resiliently pace up with the quick legislative challenges in the Kingdom; having responded to the contractual relationship improvement initiative by amending the Company’s contracts with its customers and manpower, in light of the new requirements of the manpower collective housing. Let alone the fact that we have been keen on obtaining licenses required by the new legislations. 

                                Creativity Comes on Top of Our Priority

                                Within the framework of our strenuous attempts to combat the last year’s challenges, we created an operational work model for outsourcing the Saudis’ services, and to include that in our services portfolio. We started on serious steps to establish Maharah Academy, and expand our customers in the Corporate and Individuals sectors. Our Corporate sector growing customers base includes more than 900 customers in various sectors, and more than 90.000 customers from the Individuals sector. Let alone the enhancement of the E-branch (Individuals sector customers application) so that all sale and self-services shall be done via such E-branch to ease the process for the customers and make their experiences with the Company unique and memorable.

                        </p>
                        <br/>
                        <h5>
                        Growth Seeds
                        </h5>
                        <p>
                        In 2021, we focused on hard strenuous operational work, and sought to sow the seeds of growth by considering the investment opportunities and expanding the acquisitions of the ownership stakes in companies specialized in the provision of various support services. Moreover, we launched the Digital Transformation Strategy and established a recruitment platform to be able to recruit manpower from various markets. We also approved the Human Capital Transformation Project, which aim at empowering, developing human high calibers and rewarding them according to their performances by approving a performance assessment system based on the performance assessment indicators and behavioral efficiencies.
                        </p>
                        <br/>
                        <h5> Reaping the Fruits</h5>
                        <p>
                        In light of the growth achieved in Q4 2021, we expect to reap the fruits of what we have sown over the last year, which would positively reflect on 2022 results, driven by our future investment strategy based on diversification and transformation, along with the positive economic environment after allowing direct flights to the Kingdom and alleviating precautionary measures. On the long run, we do anticipate that the Company shall greatly benefit from the development boom the Kingdom has lately witnessed and the increasing demand on the HR services to meet the population growth, industrial and urban expansion and huge investments pumped by our wise government.
                        </p>
                        


                </Col>
            </Row>
            </div>
           </section>
           
            
        </Container>
    );
    
   }