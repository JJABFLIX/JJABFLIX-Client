import React, { useState } from "react";
import "../../css/Planform.css";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";
import PfPremium from "./Pfpremium";
import PfBasic from "./PfBasic";

const PfStandard = () => {
  const [, setMembership] = useState(0);

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
      <div className="planform-logo-wrap">
        <button className="planform-logo-btn" onClick={membershipBasic}>
          Basic
        </button>
        <button
          className="planform-logo-btn-point-sta"
          onClick={membershipStandard}
        >
          Standard
        </button>
        <button className="planform-logo-btn" onClick={membershipPremium}>
          Premium
        </button>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">월 요금</span>
        <span className="planform-tbbasic">5,500원</span>
        <span className="planform-tbstandard-standard-point">13,500원</span>
        <span className="planform-tbpremium">17,000원</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">영상 화질</span>
        <span className="planform-tbbasic">좋음</span>
        <span className="planform-tbstandard-standard-point">매우 좋음</span>
        <span className="planform-tbpremium">가장 좋음</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">해상도</span>
        <span className="planform-tbbasic">720p</span>
        <span className="planform-tbstandard-standard-point">1080p</span>
        <span className="planform-tbpremium">4K+HDR</span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">
          TV,컴퓨터,스마트폰,태블릿으로 시청
        </span>
        <span className="planform-tbbasic">
          <AiOutlineCheck size={18} />
        </span>
        <span className="planform-tbstandard-standard-point">
          <AiOutlineCheck size={18} />
        </span>
        <span className="planform-tbpremium">
          <AiOutlineCheck size={18} />
        </span>
      </div>
      <div className="planform-tbline">
        <span className="planform-tbtitle">저장</span>
        <span className="planform-tbbasic">
          <AiOutlineLine size={18} />
        </span>
        <span className="planform-tbstandard-standard-point">
          <AiOutlineCheck size={18} />
        </span>
        <span className="planform-tbpremium">
          <AiOutlineCheck size={18} />
        </span>
      </div>
    </div>
  );
};

export default PfStandard;
