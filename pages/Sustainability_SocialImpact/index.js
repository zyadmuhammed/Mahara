import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";
import Image from 'next/image'
import Intro from './intro'
import SustainabilitySocialImpact from './Sustainability_SocialImpact'

// eslint-disable-next-line react/display-name
 const Home = () => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <SustainabilitySocialImpact/>

            </section>
           <section>
           <BottomTap DownloadLink={"FinancialPerformance"} NextPage="FinancialPerformance" titleNextPage={"Financial Performance"}/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;