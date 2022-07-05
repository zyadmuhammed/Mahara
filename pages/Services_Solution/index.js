import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './Intro'
import Services_Solution from './Services_Solution'

 const Home = (ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <Services_Solution/>

            </section>
           <section>
           <BottomTap DownloadLink={"ServicesSolutions"} NextPage="OperationalPerformance" titleNextPage={"Operational Performance"}/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;