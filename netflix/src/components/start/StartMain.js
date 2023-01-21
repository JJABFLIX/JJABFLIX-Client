import React from 'react'
import Button from 'react-bootstrap/Button';
import { Row, Col} from "react-bootstrap";
import SelectLanguage from './SelectLanguage';
import JoinBar from "./JoinBar";

const StartMain = () => {
  return (
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
        <Row className='start-content1-1'>
          <p>영화와 시리즈를</p>
        </Row>
        <Row className='start-content1-2'>
          <p>무제한으로.</p>
        </Row>
        <Row className='start-content1-3'>
          <p>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
        </Row>
        <Row className='start-content1-4'>
          <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
        </Row>
        <Row className='start-content1-5'>
          <JoinBar />
        </Row>
      </div>
  )
}

export default StartMain