import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';

 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <img src={'/assets/images/StrategicReports.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1>
                        Operational Performance
                        </h1>
                        <br/>
                        <h2>
                        A Future Rich With Opportunities
                        </h2>
                    </div>
                    <div>
                        <Link href="#OperationalPerformance">
                            <Button className="btnHomeCenter"  variant="light" >
                                <span style={{textAlign:'center' }}>
                                      More<br/> <MdKeyboardArrowDown color="#fff" size={24}/>
                                </span>
                                
                            </Button> 
                        </Link>
                     
                    </div>
            </section>
           
          
            
        </div>
    );
    
   });
   export default  Intro;