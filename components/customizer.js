import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi';
 import { IoIosClose } from 'react-icons/io';
 import { Col, Row,Button} from 'reactstrap';
 import {Offcanvas}from'react-bootstrap'
 import SmoothList from 'react-smooth-list';
 import Link from 'next/link';


const Customizer = () => {
    const [divName, setDivName] = useState('Ar');
    const [IsMenuShow, setMenuShow] = useState(false);
    const router = useRouter();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const ChangeRtl = (divName) => {
        console.log(divName)
        if (divName === 'Ar') {
            if (process.browser) {
                 document.body.classList.add('rtl');
                 router.push('/', '/ar', { locale: 'ar' })
            setDivName('En')

            }
            
        } else {
            if (process.browser) {
                document.body.classList.remove('rtl');
                router.push('/', '/', { locale: 'en-US' })

            setDivName('Ar')
            }
            
        }
    }
 
  

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                    <FiMenu>
                </Button> */}
                <div className='theme-pannel-main'>
                <FiMenu color='#fff' size={24} onClick={handleShow}/>
                {/* <a onClick={()=>ChangeRtl(divName)}>{divName}</a> */}
                </div>
                
                <Offcanvas  show={show}  placement='top' onHide={handleClose}>
                    <Offcanvas.Header style={{direction:'rtl'}} closeButton>
                   
                    </Offcanvas.Header>
                    <Offcanvas.Body onClick={handleClose} style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <SmoothList delay={100} transitionDuration={10}>
               <Row>
                    <Col className='menuList'>
                        <span className='circle' />
                        
                        <Link href={'/ManagementLetters'} passHref>
                         <Col className='linkmenu'>Management Letters</Col>
                        </Link>
                  </Col>

                  <Col className='menuList'>
                        <span className='circle' />
                      
                        <Link href={'/OperationalPerformance'}>
                         <Col className='linkmenu'>Operational Performance</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                       
                        <Link href={'/PerformanceOverview'}>
                         <Col className='linkmenu'>Performance Overview</Col>
                        </Link>
                  </Col>
                  <Col className='menuList'>
                        <span className='circle' />
                       
                        <Link href={'/Sustainability_SocialImpact'}>
                         <Col className='linkmenu'>Sustainability & Social impact</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                      
                        <Link href={'/StrategicReports'}>
                         <Col className='linkmenu'>Strategic Reports</Col>
                        </Link>
                  </Col>

                  <Col className='menuList'>
                        <span className='circle' />
                        
                        <Link href={'/FinancialPerformance'}>
                         <Col className='linkmenu'>Financial Performance</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                        <Link href={'/Services_Solution'}>
                         <Col className='linkmenu'>Services & Solutions</Col>
                        </Link>
                        
                        
                  </Col>
                  <Col className='menuListLastOne'>
                        <span className='circle' />
                      
                        <Link href={'/DownloadCenter'}>
                         <Col className='linkmenu'>Download Center</Col>
                        </Link>
                  </Col>

               
               </Row>
               
          </SmoothList>                    </Offcanvas.Body>
                </Offcanvas>
        </>
    );
}

export default Customizer;