import React from "react";
import { Button} from "reactstrap";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';
import Image from 'next/image'

 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <img  src={'/assets/images/intro/005.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1 style={{fontSize:60}}>
                        Operational Performance
                        </h1>
                        <br/>
                        <h2 style={{fontSize:45}}>
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
   Intro.displayName="Operational Performance"
   export default  Intro;