import React from 'react';
import { useRouter } from 'next/router'
// import { FiMenu } from 'react-icons/fi';
import SmoothList from 'react-smooth-list';
import { Col, Row ,Offcanvas,OffcanvasHeader,OffcanvasBody} from 'reactstrap';
import Link from 'next/link';
export function Menu() {

    return (
      <Offcanvas toggle={function noRefCheck(){}}>
      <OffcanvasHeader toggle={function noRefCheck(){}}>
        Offcanvas
      </OffcanvasHeader>
      <OffcanvasBody>
      <SmoothList delay={900} transitionDuration={300}>
               <Row>
                    <Col className='menuList'>
                        <span className='circle' />
                        
                        <Link href={'/ManagementLetters'}>
                         <Col >Management Letters</Col>
                        </Link>
                  </Col>

                  <Col className='menuList'>
                        <span className='circle' />
                      
                        <Link href={'/OperationalPerformance'}>
                         <Col >Operational Performance</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                       
                        <Link href={'/PerformanceOverview'}>
                         <Col >Performance Overview</Col>
                        </Link>
                  </Col>
                  <Col className='menuList'>
                        <span className='circle' />
                       
                        <Link href={'/Sustainability_SocialImpact'}>
                         <Col >Sustainability & Social impact</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                      
                        <Link href={'/StrategicReports'}>
                         <Col >Strategic Reports</Col>
                        </Link>
                  </Col>

                  <Col className='menuList'>
                        <span className='circle' />
                        
                        <Link href={'/FinancialPerformance'}>
                         <Col >Financial Performance</Col>
                        </Link>
                  </Col>

               </Row>
               <Row>
               <Col className='menuList'>
                        <span className='circle' />
                        <Link href={'/Services_Solution'}>
                         <Col >Services & Solutions</Col>
                        </Link>
                        
                        
                  </Col>
                  <Col className='menuListLastOne'>
                        <span className='circle' />
                      
                        <Link href={'/DownloadCenter'}>
                         <Col >Download Center</Col>
                        </Link>
                  </Col>

               
               </Row>
               
          </SmoothList>
      </OffcanvasBody>
    </Offcanvas>
      //   <div className="menu">
           
     
      //   </div>
    );
}

