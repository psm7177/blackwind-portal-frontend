"use client";

import React, { useState, useEffect, useCallback } from "react";

import { NextPage } from "next";
import classNames from "classnames";

import { useRouter } from "next/navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { TextInput } from "@/components/atoms"

import Char from './hpjs_character.svg'

interface PCSignInInput {
  id: string;
  password: string;
}

const HomePage: NextPage = () => {
  const router = useRouter();

  const {
    register: registerPC,
    watch: watch,
    handleSubmit: handleSubmitPC,
    formState: { isValid: isValidPC, errors: errorsPC }
  } = useForm<PCSignInInput>({
    mode: "onChange"
  });

  // TODO: 로그인 로직
  
  return (
    <>
      <div className="h-screen w-screen bg-[#284682] relative">
        <div className="absolute z-0 bottom-10">
          <Char className="object-cover"/>
        </div>
        <div className="min-h-screen flex w-full items-center justify-center relative z-10">
          <div className="flex flex-col gap-2 p-8 items-center justify-center bg-[#040A3F] rounded-[15px] text-white shadow-lg">
            <div className="text-[40px]">
              WELCOME TO BLACKWIND!
            </div>
            <div className="text-[32px]">
              PLEASE LOGIN
            </div>
            <TextInput
              className="w-full"
              key="id"
              label="ID"
              placeholder="아이디"
              type="text"
              autoComplete="name"
              {...registerPC("id", {
                required: "아이디를 입력해주세요"
              })}
            />
            <TextInput
              className="w-full"
              key="pw"
              label="PW"
              placeholder="비밀번호"
              type="password"
              autoComplete="name"
              {...registerPC("password", {
                required: "비밀번호를 입력해주세요"
              })}
            />

            <div className="flex flex-row gap-8 items-center justify-center mt-8 mb-2">
              <div 
                className="bg-[#F6F6F6] text-center text-[#040A3F] w-[240px] py-1 text-black rounded-[8px] text-[26px]"
                onClick={()=>router.push("/main")} // 임시 로그인
              >
                로그인
              </div>
              <div className="bg-[#F6F6F6] text-center text-[#040A3F] w-[240px] py-1 text-black rounded-[8px] text-[26px]">
                회원가입
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default HomePage;