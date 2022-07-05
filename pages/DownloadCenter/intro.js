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
                    <img  src={'/assets/images/intro/008.png'}  alt="image" className="img-fluid" />
                    <div className="titleIntro">
                        <h1 style={{fontSize:60}}>
                        Download Center
                        </h1>
                        <br/>
                        <h2 style={{fontSize:45}}>
                        Full Report or Customized
                        </h2>
                    </div>
                    <div>
                        <Link href="#DownloadCenter">
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
   Intro.displayName="Download Center"
   export default  Intro;