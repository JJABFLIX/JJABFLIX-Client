import React, { useState } from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiFillLock, AiOutlineLine } from "react-icons/ai";
import PfBasic from "../components/PfBasic";
import SignupNav from "../components/SignupNav";
import PfStandard from "../components/PfStandard";
import PfPremium from "../components/Pfpremium";
import { Container } from "react-bootstrap";

const Planform = () => {
  const [setMembership] = useState(0);
  const membershipBasic = () => {
    setMembership(<PfBasic />);
  };
  const membershipStandard = () => {
    setMembership(<PfStandard />);
  };
  const membershipPremium = () => {
    setMembership(<PfPremium />);
  };
  return (
    <div>
      <SignupNav />
      <span id="signupStep" className="signup-step-4">
        <b>3</b>단계 중<b>2</b>단계
      </span>
      <div className="signup-title-4">
        <h2>원하는 멤버십을 선택하세요.</h2>
      </div>
      <div className="signup-check-wrap-4">
        <div className="signup-check-text2">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>무제한으로 즐기세요.</h5>
        </div>
        <div className="signup-check-text2">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</h5>
        </div>
        <div className="signup-check-text2">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>멤버십은 언제든지 변경 또는 해지 가능.</h5>
        </div>
      </div>
      <Container>
        <div className="planform-logo-wrap">
          <button
            className="planform-logo-btn-point-bas"
            onClick={membershipBasic}
          >
            Basic
          </button>
          <button className="planform-logo-btn" onClick={membershipStandard}>
            Standard
          </button>
          <button className="planform-logo-btn" onClick={membershipPremium}>
            Premium
          </button>
        </div>
        <div className="planform-tbline">
          <p className="planform-tbtitle">월 요금</p>
          <span className="planform-tbbasic-basic-point">5,500원</span>
          <span className="planform-tbstandard">13,500원</span>
          <span className="planform-tbpremium">17,000원</span>
        </div>
        <div className="planform-tbline">
          <span className="planform-tbtitle">영상 화질</span>
          <span className="planform-tbbasic-basic-point">좋음</span>
          <span className="planform-tbstandard">매우 좋음</span>
          <span className="planform-tbpremium">가장 좋음</span>
        </div>
        <div className="planform-tbline">
          <span className="planform-tbtitle">해상도</span>
          <span className="planform-tbbasic-basic-point">720p</span>
          <span className="planform-tbstandard">1080p</span>
          <span className="planform-tbpremium">4K+HDR</span>
        </div>
        <div className="planform-tbline">
          <span className="planform-tbtitle">
            TV,컴퓨터,스마트폰,태블릿으로 시청
          </span>
          <span className="planform-tbbasic-basic-point">
            <AiOutlineCheck size={18} />
          </span>
          <span className="planform-tbstandard">
            <AiOutlineCheck size={18} />
          </span>
          <span className="planform-tbpremium">
            <AiOutlineCheck size={18} />
          </span>
        </div>
        <div className="planform-tbline-last">
          <span className="planform-tbtitle">저장</span>
          <span className="planform-tbbasic-basic-point">
            <AiOutlineLine size={18} />
          </span>
          <span className="planform-tbstandard">
            <AiOutlineCheck size={18} />
          </span>
          <span className="planform-tbpremium">
            <AiOutlineCheck size={18} />
          </span>
        </div>
      </Container>
      <div className="planform-lock-text-wrap">
        <AiFillLock size={20} color="#6d6e6e" />
        <p className="planform-lock-text">
          광고형 베이식에서는 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할
          수 없습니다. 일부 위치 및 디바이스 제한도 적용됩니다.
        </p>
      </div>
      <button className="planform-next-btn-1">다음</button>
    </div>
  );
};

export default Planform;
