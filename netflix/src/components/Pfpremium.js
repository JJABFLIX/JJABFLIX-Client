import React from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";
import { RxTriangleDown } from "react-icons/rx";

const PfPremium = () => {
  return (
    <div>
      <div className="planform-logo-wrap-premium">
        <button className="planform-logo-btn-premium">Basic</button>
        <button className="planform-logo-btn-premium">Standard</button>
        <button className="planform-logo-btn-premium">Premium</button>
      </div>
      <div className="planform-triangle-premium">
        <RxTriangleDown />
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">월 요금</span>
        <span className="planform-tbbasic-premium">5,500원</span>
        <span className="planform-tbstandard-premium">13,500원</span>
        <span className="planform-tbpremium-premium">17,000원</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">영상 화질</span>
        <span className="planform-tbbasic-premium">좋음</span>
        <span className="planform-tbstandard-premium">매우 좋음</span>
        <span className="planform-tbpremium-premium">가장 좋음</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">해상도</span>
        <span className="planform-tbbasic-premium">720p</span>
        <span className="planform-tbstandard-premium">1080p</span>
        <span className="planform-tbpremium-premium">4K+HDR</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">
          TV,컴퓨터,스마트폰,태블릿으로 시청
        </span>
        <span className="planform-tbbasic-premium">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbstandard-premium">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium-premium">
          <AiOutlineCheck />
        </span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">저장</span>
        <span className="planform-tbbasic-premium">
          <AiOutlineLine />
        </span>
        <span className="planform-tbstandard-premium">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium-premium">
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default PfPremium;
