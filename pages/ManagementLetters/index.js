import React from "react";
import { Col, Container, Row ,Button} from "reactstrap";
import BottomTap from "../../components/bottomTap";

import Intro from './introManagementLatters'
import ManagementLetters from './ManagementLetters'

 const Home = () => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <ManagementLetters/>

            </section>
           <section>
               <BottomTap DownloadLink={"ManagementLetters"} NextPage="PerformanceOverview" titleNextPage={"Performance Overview"}/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;