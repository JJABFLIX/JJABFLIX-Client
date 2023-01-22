import React from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";

const PfStandard = () => {
  return (
    <div>
      <div className="planform-logo-wrap">
        <button className="planform-logo-btn">Basic</button>
        <button className="planform-logo-btn-point">Standard</button>
        <button className="planform-logo-btn">Premium</button>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">월 요금</span>
        <span className="planform-tbbasic">5,500원</span>
        <span className="planform-tbstandard-point">13,500원</span>
        <span className="planform-tbpremium">17,000원</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">영상 화질</span>
        <span className="planform-tbbasic-standard">좋음</span>
        <span className="planform-tbstandard-standard">매우 좋음</span>
        <span className="planform-tbpremium-standard">가장 좋음</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">해상도</span>
        <span className="planform-tbbasic">720p</span>
        <span className="planform-tbstandard-point">1080p</span>
        <span className="planform-tbpremium">4K+HDR</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">
          TV,컴퓨터,스마트폰,태블릿으로 시청
        </span>
        <span className="planform-tbbasic">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbstandard-point">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium">
          <AiOutlineCheck />
        </span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">저장</span>
        <span className="planform-tbbasic">
          <AiOutlineLine />
        </span>
        <span className="planform-tbstandard-point">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium">
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default PfStandard;
