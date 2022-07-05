import React from 'react';
import Link from 'next/link';
 import {  Row} from 'reactstrap';

 
const BottomTap = ({DownloadLink , NextPage, titleNextPage}) => {
//    const {DownloadLink , NextPage, titleNextPage}=props;
function handleChange() {
    

       let link=DownloadLink?`/assets/pdf/En/${DownloadLink}.pdf`:"/assets/pdf/full/En.pdf"
       window.open(link, '_blank');

}
    return (
        <>
            <Row style={{backgroundColor:'#415259',width:'100%',height:'100%',padding:100}}> 
                    <div className='col d-flex  align-items-center' style={{borderInlineEnd:"solid 1px black"}}>
                      
                            <img  src="/assets/images/pdf.png" className='img-fluid' alt="P"/>
                      <div className='linkmenu ps-2' onClick={handleChange} >
                           <b style={{color:'white'}}> Download</b>
                           <br></br>
                           <p style={{color:'#BAB0B0'}}>{DownloadLink?"Current Section PDF File":"Full Report"} </p>
                        </div>
                      
                    </div>
                    
                    <div className='col d-flex justify-content-end'>
                    <Link href={`/${NextPage??""}`}>
                    <div className='linkmenu ps-2'  >
                    <p style={{color:'white'}}> Next Chapter</p>
                    <p style={{color:'#BAB0B0'}}>{titleNextPage}</p>

                        </div>
                        </Link>
                        <img src="/assets/images/arrowNext.png" alt="next" className='img-fluid p-5'/>
                    </div>
            </Row>
        </>
    );
}

export default BottomTap;