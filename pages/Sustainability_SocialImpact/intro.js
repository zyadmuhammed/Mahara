import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';
import Image from 'next/image'
 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <img  src={'/assets/images/StrategicReports.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1>
                        Sustainability
                        </h1>
                        <br/>
                        <h2>
                        Approach towards Sustainability
                        </h2>
                    </div>
                    <div>
                        <Link href="#SustainabilitySocialImpact">
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
   Intro.displayName="Sustainability"
   export default  Intro;