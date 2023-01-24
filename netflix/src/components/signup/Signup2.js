import React from "react";
import SignupNav from "./SignupNav";
import { useNavigate } from "react-router-dom";
import "../../css/Planform.css";

const Signup2 = () => {
  const navigate = useNavigate();
  const navigateToNextSignup = () => {
    navigate("/signup3");
  };
  return (
    <div>
      <SignupNav />
      <span id="signupStep" className="signup-step-2">
        <b>3</b>단계 중<b>1</b>단계
      </span>
      <div className="signup-title-2">
        <h2>멤버십을 시작하려면 비밀번호를 만드세요.</h2>
      </div>
      <div className="signup-h5-2">
        <h5>몇 단계만 더 거치면 완료됩니다!</h5>
        <h5>우리도 서류 작업을 싫어합니다.</h5>
      </div>
      <div className="signup-idpw-wrap">
        <input type="text" placeholder="이메일" id="user_id" />
        <input type="text" placeholder="비밀번호" id="password" />
      </div>
      <div className="signup-check-wrap-2">
        <input type="checkbox" className="signup-check-2" />
        <span className="signup-check-text-2">
          예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 <br />{" "}
          동의합니다. (상세 정보)
        </span>
        <input type="checkbox" className="signup-check-2" />
        <span className="signup-check-text-2">
          예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택사항)
        </span>
      </div>
      <button className="signup-next-btn-2" onClick={navigateToNextSignup}>
        동의하고 계속
      </button>
    </div>
  );
};

export default Signup2;
