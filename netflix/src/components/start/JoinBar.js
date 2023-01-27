import React, { useState } from "react";
import { Form } from "react-bootstrap";

const JoinBar = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };
  const validation = () => {
    if (!email) setEmailError(true);

    if (email) return true;
    else return false;
  };
  const onSubmit = (e) => {
    if (validation()) return;
  };

  return (
    <Form>
      <div className="join-bar">
        <Form.Control
          type="input"
          id="email"
          className="join-input"
          value={email}
          onChange={onChangeEmail}
          autoComplete="off"
          required
        />
        <label for="email">
          <span id="join-lb">이메일 주소</span>
        </label>

        <botton className="join-btn" onClick={onSubmit}>
          시작하기
        </botton>
      </div>
      <div>
        {emailError && (
          <div class="invalid-input">이메일 주소를 입력해 주세요.</div>
        )}
      </div>
    </Form>
  );
};

export default JoinBar;
