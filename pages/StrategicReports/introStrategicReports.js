import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import Image from "next/image";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';


 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <Image src={'/assets/images/StrategicReports.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1>
                        Strategic Report
                        </h1>
                        <br/>
                        <h2>
                        Empowerment for the Future
                        </h2>
                    </div>
                    <div>
                        <Link href="#StrategicReports">
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
   Intro.displayName="Strategic Report";
   export default  Intro;