import React from 'react';

 import {  Row} from 'reactstrap';

 import Image from 'next/image'

const BottomTap = () => {


   
  
    return (
        <>
            <Row style={{backgroundColor:'#415259',width:'100%',height:'100%',padding:100}}> 
                    <div className='col border-end' >
                        <img  src="/assets/images/pdf.png"  alt="P"/>
                        <p style={{color:'white'}}> Download</p>
                    </div>
                    <div className='col'>
                            <p style={{color:'white'}}> Next Chapter</p>
                    </div>
            </Row>
        </>
    );
}

export default BottomTap;