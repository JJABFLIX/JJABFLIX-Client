import React from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiFillLock } from "react-icons/ai";
import PfBasic from "../components/PfBasic";

const Planform = () => {
  return (
    <div>
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
      <PfBasic />
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
