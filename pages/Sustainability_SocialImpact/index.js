import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './intro'
import SustainabilitySocialImpact from './Sustainability_SocialImpact'

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
               <BottomTap/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;