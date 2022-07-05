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
                    <img  src={'/assets/images/intro/004.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1 style={{fontSize:60}}>
                        Services & Solutions
                        </h1>
                        <br/>
                        
                    </div>
                    <div>
                        <Link href="#Services_Solution">
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
   Intro.displayName="Services"
   export default  Intro;