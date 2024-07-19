import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Benefit.css';

function Benefit() {
  return (
    <div className="benefit" data-aos="fade-up">
      <Container>
        <Row className="benefit_row" style={{backgroundColor:'#f3f3f3'}}>
          <Col lg={3} className="benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>free shipping</h6>
                <p>Suffered Alteration in Some Form</p>
              </div>
            </div>
          </Col>
          <Col lg={3} className="benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="far fa-money-bill-alt"></i>
              </div>
              <div className="benefit_content">
                <h6>cash on delivery</h6>
                <p>The Internet Tend To Repeat</p>
              </div>
            </div>
          </Col>
          <Col lg={3} className="benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-undo" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>45 days return</h6>
                <p>Making it Look Like Readable</p>
              </div>
            </div>
          </Col>
          <Col lg={3} className="benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="benefit_content" >
                <h6>opening all week</h6>
                <p>8AM - 9PM</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefit;
