import React from "react";
import "../css/Planform.css";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";

const PfBasic = () => {
  return (
    <div>
      <div className="planform-logo-wrap">
        <button className="planform-logo-btn-point">Basic</button>
        <button className="planform-logo-btn">Standard</button>
        <button className="planform-logo-btn">Premium</button>
      </div>
      <div className="planform-tbline">
        <p className="planform-tbtitle">월 요금</p>
        <span className="planform-tbbasic-point">5,500원</span>
        <span className="planform-tbstandard">13,500원</span>
        <span className="planform-tbpremium">17,000원</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">영상 화질</span>
        <span className="planform-tbbasic-point">좋음</span>
        <span className="planform-tbstandard">매우 좋음</span>
        <span className="planform-tbpremium">가장 좋음</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">해상도</span>
        <span className="planform-tbbasic-point">720p</span>
        <span className="planform-tbstandard">1080p</span>
        <span className="planform-tbpremium">4K+HDR</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">
          TV,컴퓨터,스마트폰,태블릿으로 시청
        </span>
        <span className="planform-tbbasic-point">
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
        <span className="planform-tbbasic-point">
          <AiOutlineLine size={18} />
        </span>
        <span className="planform-tbstandard">
          <AiOutlineCheck size={18} />
        </span>
        <span className="planform-tbpremium">
          <AiOutlineCheck size={18} />
        </span>
      </div>
    </div>
  );
};

export default PfBasic;
