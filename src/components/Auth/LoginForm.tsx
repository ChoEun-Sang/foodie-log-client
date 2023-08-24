"use client";
import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";
import kakao from "@/public/images/kakao_login_medium_wide.png";
import Line from "../Line";

function LogInForm() {
  const onClick = () => {
    console.log("onClick");
  };
  return (
    <section className="flex flex-col items-center justify-center p-10 h-4/5 sm:w-[600px] sm:border border-gray-300">
      <div className="title">
        <h2>로그인</h2>
        <p>Foodie-Log에 오신 걸 환영합니다!</p>
      </div>
      <form className="w-full flex flex-col  gap-4 mt-10">
        <input className="input" type="text" placeholder="이메일" />
        <input className="input" placeholder="비밀번호" />
        <input className="input" placeholder="비밀번호 확인" />

        <div className="flex flex-col items-center mt-10">
          <div className="mb-3">
            로그인 또는
            <Button variant={"text"} size={"ml-1"} onClick={(e) => console.log(e)}>
              회원가입
            </Button>
          </div>
          <Button variant={"primary"} onClick={onClick}>
            로그인
          </Button>
        </div>
      </form>
      <Line />
      <Button variant={"text"} size={""} onClick={onClick}>
        <Image src={kakao} alt="카카오 로그인 버튼" />
      </Button>
      <div className="flex justify-center my-10">
        <Button variant={"text"} onClick={(e) => console.log(e)}>
          비밀번호를 잊으셨나요?
        </Button>
      </div>
    </section>
  );
}

export default LogInForm;
