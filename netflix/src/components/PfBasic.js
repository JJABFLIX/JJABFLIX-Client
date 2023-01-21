import React from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";
import { RxTriangleDown } from "react-icons/rx";

const PfBasic = () => {
  return (
    <div>
      <div className="planform-logo-wrap-basic">
        <button className="planform-logo-btn-basic">Basic</button>
        <button className="planform-logo-btn-basic">Standard</button>
        <button className="planform-logo-btn-basic">Premium</button>
      </div>
      <div className="planform-triangle-basic">
        <RxTriangleDown />
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">월 요금</span>
        <span className="planform-tbbasic-basic">5,500원</span>
        <span className="planform-tbstandard-basic">13,500원</span>
        <span className="planform-tbpremium-basic">17,000원</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">영상 화질</span>
        <span className="planform-tbbasic-basic">좋음</span>
        <span className="planform-tbstandard-basic">매우 좋음</span>
        <span className="planform-tbpremium-basic">가장 좋음</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">해상도</span>
        <span className="planform-tbbasic-basic">720p</span>
        <span className="planform-tbstandard-basic">1080p</span>
        <span className="planform-tbpremium-basic">4K+HDR</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">
          TV,컴퓨터,스마트폰,태블릿으로 시청
        </span>
        <span className="planform-tbbasic-basic">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbstandard-basic">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium-basic">
          <AiOutlineCheck />
        </span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">저장</span>
        <span className="planform-tbbasic-basic">
          <AiOutlineLine />
        </span>
        <span className="planform-tbstandard-basic">
          <AiOutlineCheck />
        </span>
        <span className="planform-tbpremium-basic">
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default PfBasic;
