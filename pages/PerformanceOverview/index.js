import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './introPerformanceOverview'
import PerformanceOverview from './PerformanceOverview'

 const Home = (ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <PerformanceOverview/>

            </section>
           <section>
           <BottomTap DownloadLink={"StrategicReports"} NextPage="StrategicReports" titleNextPage={"Strategic Reports"}/>

           </section>
          
            
        </div>
    );
    
   };
   export default  Home;