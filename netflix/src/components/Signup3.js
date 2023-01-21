import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import "../css/Signup.css";

const Signup3 = () => {
  return (
    <div>
      <div className="signup-logo-3">
        <BsCheckCircle size={50} color="rgb(229 8 21)" />
      </div>

      <span id="signupStep" className="signup-step-3">
        <b>3</b>단계 중<b>2</b>단계
      </span>
      <div className="signup-title-3">
        <h2>
          원하는 멤버십을 <br />
          선택하세요.
        </h2>
      </div>
      <div className="signup-check-wrap-3">
        <div className="signup-check-text1">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>
            無약정,無위약금. 해지도 쿨하게 <br />
            언제든지.
          </h5>
        </div>
        <div className="signup-check-text1">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>
            하나의 요금으로 즐기는 끝없는 <br />
            콘텐츠의 세계.
          </h5>
        </div>
        <div className="signup-check-text1">
          <div className="signup3-icon">
            <AiOutlineCheck size={27} color="rgb(229 8 21)" />
          </div>
          <h5>모든 디바이스에서 무제한 시청.</h5>
        </div>
      </div>
      <button className="signup-next-btn-3">다음</button>
    </div>
  );
};

export default Signup3;
