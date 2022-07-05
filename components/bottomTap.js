import React from 'react';

 import {  Row} from 'reactstrap';

 
const BottomTap = ({DownloadLink , NextPage, titleNextPage}) => {
//    const {DownloadLink , NextPage, titleNextPage}=props;
  
    return (
        <>
            <Row style={{backgroundColor:'#415259',width:'100%',height:'100%',padding:100}}> 
                    <div className='col d-flex justify-content-sm-evenly align-items-center' style={{borderInlineEnd:"solid 1px black"}}>
                      
                            <img  src="/assets/images/pdf.png" className='img-fluid' alt="P"/>
                      <a href={`${DownloadLink?`/assets/pdf/En/${DownloadLink}.pdf`:"/assets/pdf/full/En.pdf"}`}>
                           <p style={{color:'white'}}> Download</p>

                        </a>
                      
                    </div>
                    
                    <div className='col d-flex justify-content-center'>
                    <a href={`/${NextPage??""}`}>
                    <p style={{color:'white'}}> Next Chapter</p>
                            <p style={{color:'white'}}>{titleNextPage}</p>

                        </a>
                    
                    </div>
            </Row>
        </>
    );
}

export default BottomTap;