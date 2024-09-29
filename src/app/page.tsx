"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { registerUser } from "@/api/AuthAPI/signup";
import { TextInput } from "@/components/atoms";

import Char from './hpjs_character.svg';

interface SignInInput {
  id: string;
  password: string;
}

interface SignUpInput {
  id: string;
  password: string;
  confirmPassword: string;
}

const HomePage: NextPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState<Boolean>(false);

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { isValid: isValidSignIn, errors: errorsSignIn }
  } = useForm<SignInInput>({
    mode: "onChange"
  });

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { isValid: isValidSignUp, errors: errorsSignUp }
  } = useForm<SignUpInput>({
    mode: "onChange"
  });

  // 회원가입 처리 함수
  const handleSignUpSubmit = async (data: SignUpInput) => {
    // 임시로 채워줄 필드들
    const registerData = {
      name: "홍길동", // 임시 이름
      email: `${data.id}@example.com`, // ID 기반으로 이메일 생성
      department: "기초학부", // 임시 학과
      studentId: "2021123456", // 임시 학번
      password: data.password,
    };

    try {
      const response = await registerUser(registerData);
      console.log("회원가입 성공:", response);
      // 회원가입 성공 시, 메인 페이지로 이동
      router.push("/main");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  // 로그인 처리 함수 (임시)
  const handleLoginSubmit = async (data: SignInInput) => {
    console.log("로그인 요청 데이터:", data);
    router.push("/main"); // 임시로 메인 페이지로 이동
  };

  return (
    <>
      <div className="h-screen w-screen bg-[#284682] relative">
        <div className="absolute z-0 bottom-10">
          <Char className="object-cover" />
        </div>
        <div className="min-h-screen flex w-full items-center justify-center relative z-10">
          <div className="flex flex-col w-[500px] gap-2 p-8 items-center justify-center bg-[#040A3F] rounded-[15px] text-white shadow-lg">
            {open ? (
              <div className="w-full">
                <div className="text-[38px]">Join Us</div>
                <form onSubmit={handleSubmitSignUp(handleSignUpSubmit)}>
                  <TextInput
                    className="w-full"
                    key="id"
                    label="ID"
                    placeholder="아이디"
                    type="text"
                    {...registerSignUp("id", {
                      required: "아이디를 입력해주세요",
                    })}
                  />
                  <TextInput
                    className="w-full mt-2"
                    key="pw"
                    label="PW"
                    placeholder="비밀번호"
                    type="password"
                    {...registerSignUp("password", {
                      required: "비밀번호를 입력해주세요",
                    })}
                  />

                  <TextInput
                    className="w-full mt-2"
                    key="repw"
                    label="PW (confirm)"
                    placeholder="비밀번호 확인"
                    type="password"
                    {...registerSignUp("confirmPassword", {
                      required: "비밀번호를 한번 더 입력해주세요",
                    })}
                  />

                  <div className="flex flex-row w-full gap-8 items-center justify-center mt-8 mb-2">
                    <button
                      type="submit"
                      className="bg-[#F6F6F6] w-full text-center text-[#040A3F] py-1 text-black rounded-[8px] text-[26px] cursor-pointer"
                    >
                      Create an Account
                    </button>
                  </div>
                </form>
                <div className="text-sm text-gray-400 text-center mt-2">
                  Already have an account? &nbsp;
                  <span
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    Log in here.
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="text-[40px] text-center">WELCOME BLACKWIND!</div>
                <div className="text-[32px] text-center">PLEASE LOGIN</div>
                <form onSubmit={handleSubmitSignIn(handleLoginSubmit)}>
                  <TextInput
                    className="w-full"
                    key="id"
                    label="ID"
                    placeholder="아이디"
                    type="text"
                    {...registerSignIn("id", {
                      required: "아이디를 입력해주세요",
                    })}
                  />
                  <TextInput
                    className="w-full mt-2"
                    key="pw"
                    label="PW"
                    placeholder="비밀번호"
                    type="password"
                    {...registerSignIn("password", {
                      required: "비밀번호를 입력해주세요",
                    })}
                  />

                  <div className="flex flex-row w-full gap-8 items-center justify-center mt-8 mb-2">
                    <button
                      type="submit"
                      className="bg-[#F6F6F6] text-center text-[#040A3F] w-full py-1 text-black rounded-[8px] text-[26px] cursor-pointer"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-sm text-gray-400 text-center mt-2">
                  Don't have an account?&nbsp;
                  <span
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    Sign up here.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;