import React from 'react'
import { Row, Col} from "react-bootstrap";
import SelectLanguage from './SelectLanguage';
import '../../css/Footer.css'

const StartFooter = () => {
  return (
    <div className='footer'>
        <div className='footer-first'>
        <p>질문이 있으신가요? 문의 전화:  080-001-9587</p>
        <Row className='footer-list'>
          <Col>자주 묻는 질문</Col>
          <Col>고객센터</Col>
          <Col>계정</Col>
          <Col>미디어 센터</Col>
        </Row>
        <Row className='footer-list'>
          <Col>투자 정보(IR)</Col>
          <Col>입사 정보</Col>
          <Col>넷플릭스 지원 디바이스</Col>
          <Col>이용 약관</Col>
        </Row>
        <Row className='footer-list'>
          <Col>개인정보 처리방침</Col>
          <Col>쿠키 설정</Col>
          <Col>회사 정보</Col>
          <Col>문의하기</Col>
        </Row>
        <Row className='footer-list'>
          <Col>속도 테스트</Col>
          <Col>법적 고지</Col>
          <Col>오직 넷플릭스에서</Col>
          <Col></Col>
        </Row>
        </div>
        <div>
          <SelectLanguage />
        </div>
    </div>
  )
}

export default StartFooter