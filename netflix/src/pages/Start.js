import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col} from "react-bootstrap";
import SelectLanguage from '../components/SelectLanguage';
import StartBar from '../components/StartBar';

const Start = () => {
  return (
    <div>
      <div className='start-background'>
        <Row className='start-first'>
            <Col>
              <img 
                width={170}
                src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg" 
              />
            </Col>
            <Col>
              <SelectLanguage />
            </Col>
            <Col>
            <Button variant="danger" className="start-login-btn">로그인</Button>
            </Col>
        </Row>
      </div>
      <StartBar />
    </div>
  )
}

export default Start