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
        <div className='footer-second'>
          <SelectLanguage 
            width="140px" height="55px" color="#737373" margin="0px" 
            iconcolor="#737373" iconmt="17px" iconml="10px" iconmr="15px" 
            languagecolor="#737373" 
          />
          <p className='second-fp'>넷플릭스 대한민국</p>
          <p className='second-ap'>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</p>
          <p className='second-ap'>대표: 레지널드 숀 톰프슨</p>
          <p className='second-ap'>이메일 주소: korea@netflix.com</p>
          <p className='second-ap'>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
          <p className='second-ap'>사업자등록번호: 165-87-00119</p>
          <p className='second-ap'>클라우드 호스팅: Amazon Web Services Inc.</p>
          <p className='second-ap'>공정거래위원회 웹사이트</p>
        </div>
    </div>
  )
}

export default StartFooter