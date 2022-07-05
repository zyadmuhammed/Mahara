import React from "react";
import {Button} from "reactstrap";
import Image from "next/image";
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';

 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
            <img  src={'/assets/images/intro/001.png'} className='img-fluid' alt="ManagementLetters"  />
                    {/* <img  src={ManagementLetters} alt="ManagementLetters" layout='responsive' /> */}
                    <div className="titleIntro">
                        <h1 style={{fontSize:60}}>
                             Management Letters
                        </h1>
                        <br/>
                        <h2 style={{fontSize:45}}>
                             Chairman and CEO Letters
                        </h2>
                    </div>
                    <div>
                        <Link href="#Chairman">
                            <Button className="btnHomesideOne"  variant="light" >
                                <span style={{textAlign:'center' }}>
                                      Chairman&apos;s Letters<br/> <MdKeyboardArrowDown color="#fff" size={24}/>
                                </span>
                                
                            </Button> 
                        </Link>
                        <Link href="#ChiefExecutiveOfficer">
                            <Button className="btnHomeSideTwo"  variant="light" >
                                <span style={{textAlign:'center' }}>
                                   CEO Letters<br/> <MdKeyboardArrowDown color="#fff" size={24}/>
                                </span>
                            
                            </Button> 
                        </Link>
                    </div>
            </section>
           
          
            
        </div>
    );
    
   });
   Intro.displayName="Intro"
   export default  Intro;