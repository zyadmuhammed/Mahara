import Image from "next/image";
import react  from "react"
import { Container ,Row} from "reactstrap";
import useTranslation from "next-translate/useTranslation";



  
export function SliderHome() {
    let { t } = useTranslation("common");
    return(
        <Container>
          
                  <div>
                
             <Row className="homedesc" >
                 <p>{t("home_title_desc")}</p>
                
                 <b>{t("home_desc1")}<br/> {t("home_desc2")}<br/> {t("home_desc3")}</b>
             </Row>
            </div>
            
           
        </Container>
    )
    
}
