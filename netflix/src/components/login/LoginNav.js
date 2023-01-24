import React from "react";

const LoginNav = () => {
  return (
    <div className="login-nav">
      <img
        width={200}
        src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg"
      />
      <div className="login-part-wrap">
        <h2 className="login-title">로그인</h2>
        <div className="login-input-wrap">
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
