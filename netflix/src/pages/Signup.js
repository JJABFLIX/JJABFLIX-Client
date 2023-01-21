import React, { useState } from "react";
import Signup2 from "../components/Signup2";
import Signup3 from "../components/Signup3";

const Signup = () => {
  const [Signup, setSignup] = useState();
  const handleClickButton = (e) => {
    const { value } = e.target;
    setSignup(value);
  };
  const selectComponent = {
    signup2: <Signup2 />,
    signup3: <Signup3 />,
  };
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
      <button className="signup-next-btn" onClick={handleClickButton}>
        다음
      </button>
    </div>
  );
};

export default Signup;
