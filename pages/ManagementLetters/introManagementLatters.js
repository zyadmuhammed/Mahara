import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import Image from "next/image";
import ManagementLetters from '../../public/assets/images/letters.png'
import {MdKeyboardArrowDown} from'react-icons/md'
import Link from 'next/link';

 const Intro = React.forwardRef((ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
            <img src={'/assets/images/letters.png'} className='img-fluid' alt="ManagementLetters"  />
                    {/* <Image src={ManagementLetters} alt="ManagementLetters" layout='responsive' /> */}
                    <div className="titleIntro">
                        <h1>
                             Management Letters
                        </h1>
                        <br/>
                        <h2>
                             Chairman and CEO Letters
                        </h2>
                    </div>
                    <div>
                        <Link href="#Chairman">
                            <Button className="btnHomesideOne"  variant="light" >
                                <span style={{textAlign:'center' }}>
                                      Chairman's Letters<br/> <MdKeyboardArrowDown color="#fff" size={24}/>
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
   export default  Intro;