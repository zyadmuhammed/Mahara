import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './intro'
import OperationalPerformance from './OperationalPerformance'

 const Home = (ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <OperationalPerformance/>

            </section>
           <section>
           <BottomTap DownloadLink={"OperationalPerformance"} titleNextPage={"Sustainability & Social Impact"} NextPage={"Sustainability_SocialImpact"}/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;