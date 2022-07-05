import React from "react";
import { Button} from "reactstrap";
import Image from "next/image";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';

 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <img  src={'/assets/images/intro/002.png'}  alt="image" className='img-fluid' />
                    <div className="titleIntro">
                        <h1>
                             Performance Overview
                        </h1>
                        <br/>
                        <h2>
                             Of the Year 2021
                        </h2>
                    </div>
                    <div>
                        <Link href="#PerformanceOverview">
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
   Intro.displayName="Performance Overview";
   export default  Intro;