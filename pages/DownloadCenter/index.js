import React from "react";
import BottomTap from "../../components/bottomTap";
import Intro from './Intro'
import DownloadCenter from './DownloadCenter'

 const Home = () => {
   
    // let { t } = useTranslation("common");
    return (
        <div>
            <section>
                <Intro/>
            </section>
            <section>
                <DownloadCenter/>

            </section>
           <section>
               <BottomTap DownloadLink="En/FinancialPerformance.pdf"  NextPage="" titleNextPage="Home"/>
           </section>
          
            
        </div>
    );
    
   };
   export default  Home;