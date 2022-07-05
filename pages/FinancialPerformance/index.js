import React from "react";
import BottomTap from "../../components/bottomTap";
import Intro from './Intro'
import FinancialPerformance from './FinancialPerformance'
import Fade from 'react-reveal/Fade';

const Home = () => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            
                <Intro/>
            
            <Fade bottom big>
                <FinancialPerformance/>

            </Fade>
          
               <BottomTap DownloadLink="FinancialPerformance" NextPage={"DownloadCenter"} titleNextPage="Download Center"/>
           
          
            
        </div>
    );
    
   };
   export default  Home;