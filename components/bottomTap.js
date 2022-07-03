import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi';
 import { IoIosClose } from 'react-icons/io';
 import { Col, Row,Button} from 'reactstrap';
 import {Offcanvas}from'react-bootstrap'
 import SmoothList from 'react-smooth-list';
 import Link from 'next/link';


const BottomTap = () => {


   
  
    return (
        <>
            <Row style={{backgroundColor:'#415259',width:'100%',height:'100%',padding:100}}> 
                    <div className='col border-end' >
                        <img src="/assets/images/pdf.png" />
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