import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './introStrategicReports'
import StrategicReports from './StrategicReports'

 const Home = (ref) => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <StrategicReports/>

            </section>
           <section>
               <BottomTap/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;