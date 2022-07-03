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
               <BottomTap/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;