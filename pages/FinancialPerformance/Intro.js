import React from "react";
import { Button} from "reactstrap";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

 const Intro = React.forwardRef((ref) => {
   
     let { t } = useTranslation("common");
    return (
        <div>
            <section>
                    <img  src={'/assets/images/intro/007.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1>
                        Financial Performance
                        </h1>
                        <br/>
                        <h2>
                        Persistence In The Face Of Challenges
                        </h2>
                    </div>
                    <div>
                        <Link href="#FinancialPerformance">
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
   Intro.displayName="Financial Performance"
   export default  Intro;