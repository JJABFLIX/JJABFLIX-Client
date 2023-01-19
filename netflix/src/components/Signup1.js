import React from "react";

const Signup1 = () => {
  return (
    <div>
      <div className="signup-logo-wrap">
        <img
          width={350}
          height={350}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36MQBbzbnGemA17f3RsYFO_F7Lzu2pi8zIRd80ZPg0ADM_WpQLV_eGSSHfyToZL5G5A8&usqp=CAU"
          }
          alt="signup"
        />
      </div>
      <span id="signupStep" className="signup-step">
        <b>3</b>단계 중<b>1</b>단계
      </span>
      <div className="signup-title">
        <h2>계정 설정 마무리하기</h2>
      </div>
      <div className="signup-h5">
        <h5>
          맞춤형 콘텐츠 서비스, 넷플릭스!
          <br />
          비밀번호를 설정해 다양한 디바이스에서
          <br />
          아무 때나 시청하세요.
        </h5>
      </div>
      <button className="signup-next-btn">다음</button>
    </div>
  );
};

export default Signup1;
