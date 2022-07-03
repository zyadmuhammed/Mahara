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
                    <img src={'/assets/images/services.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1>
                        Services & Solutions
                        </h1>
                        <br/>
                        
                    </div>
                    <div>
                        <Link href="#Services">
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