import React from "react";
import "../../css/SelectPayment.css";
import SignupNav from "./SignupNav";
import { RiRotateLockLine } from "react-icons/ri";
import Cardimg from "./Cardimg";

const SelectPayment = () => {
  return (
    <div>
      <SignupNav />
      <div className="payment-logo-1">
        <RiRotateLockLine size={50} color="rgb(229 8 21)" />
      </div>
      <span className="payment-step-1">
        <b>3</b>단계 중<b>3</b>단계
      </span>
      <div className="payment-title-1">
        <h2>결제 방법 선택</h2>
      </div>
      <div className="payment-h5-1">
        <h6>
          결제 정보는 암호화되며, 결제 방법은 언제든지 변경할 수
          <br />
          있습니다.
        </h6>
        <h5>안심하고 즐기세요.</h5>
        <h5>해지는 온라인으로 간편하게.</h5>
      </div>
      <div className="payment-sel-title-1">
        <h2>신용카드나 체크카드 등록</h2>
      </div>
      <Cardimg />
      <div className="payment-input-wrap">
        <input type="text" placeholder="카드 번호" id="card_number" />
        <input
          type="text"
          placeholder="유효기간(월/년)"
          id="card_expiration_date"
        />
        <input type="text" placeholder="이름" id="name" />
        <input type="text" placeholder="생년" id="birth" />
        <select>
          <option>생월</option>
          <option>1월</option>
          <option>2월</option>
          <option>3월</option>
          <option>4월</option>
          <option>5월</option>
          <option>6월</option>
          <option>7월</option>
          <option>8월</option>
          <option>9월</option>
          <option>10월</option>
          <option>11월</option>
          <option>12월</option>
        </select>
        <select>
          <option>생일</option>
          <option>1일</option>
          <option>2일</option>
          <option>3일</option>
          <option>4일</option>
          <option>5일</option>
          <option>6일</option>
          <option>7일</option>
          <option>8일</option>
          <option>9일</option>
          <option>10일</option>
          <option>11일</option>
          <option>12일</option>
          <option>13일</option>
          <option>14일</option>
          <option>15일</option>
          <option>16일</option>
          <option>17일</option>
          <option>18일</option>
          <option>19일</option>
          <option>20일</option>
          <option>21일</option>
          <option>22일</option>
          <option>23일</option>
          <option>24일</option>
          <option>25일</option>
          <option>26일</option>
          <option>27일</option>
          <option>28일</option>
          <option>29일</option>
          <option>30일</option>
          <option>31일</option>
        </select>
      </div>
      <div className="payment-membership">
        <div className="payment-method">
          <p className="payment-membership-text1">
            매월 <b>13,500원</b>
          </p>
          <p className="payment-membership-text2">스탠다드 멤버십</p>
        </div>
        <a className="payment-membership-change">변경</a>
      </div>
      <div className="payment-agree">
        <input type="checkbox" className="payment-check" />
        <span className="payment-agree-text">
          Netflix 이용 약관 및 개인정보 처리방침에 동의합니다.
        </span>
        <input type="checkbox" className="payment-check" />
        <span className="payment-agree-text">
          멤버십을 해지하지 않으면 Netflix 멤버십이 자동으로 계속되며, 멤버십
          요금이 등록한 결제 수단으로 매월 청구됩니다. 멤버십은
          www.netflix.com의 '계정' 페이지에서 언제든지 해지할 수 있습니다. 이
          경우 결제 주기가 종료될 때 멤버십이 해지되며, 잔여 기간 동안은
          서비스를 계속 이용할 수 있습니다. 단, 결제일로부터 7일 이내에 멤버십이
          즉시 종료되도록 해지하고 해당 계정을 통해 Netflix 콘텐츠를 시청하지
          않은 경우, 해당 결제 주기에 청구된 멤버십 요금을 전액 환불 요청할 수
          있습니다.
        </span>
      </div>
      <button className="payment-sel-btn">유료 멤버십 시작</button>
    </div>
  );
};

export default SelectPayment;
