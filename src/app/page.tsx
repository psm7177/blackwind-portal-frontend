"use client";

import React, { useState, useEffect, useCallback } from "react";

import { NextPage } from "next";
import classNames from "classnames";

import { useRouter } from "next/navigation";

const HomePage: NextPage = () => {
  const router = useRouter();
  
  return (
    <>
      <div className="h-screen w-screen bg-[#284682]">
        <div className="min-h-screen flex w-full items-center justify-center">
          <div className="flex flex-col gap-2 p-8 items-center justify-center bg-[#040A3F] rounded-[15px] text-white">
            <div className="text-[40px]">
              WELCOME TO BLACKWIND!
            </div>
            <div className="text-[32px] mb-5">
              PLEASE LOGIN
            </div>
            {/* 
            <TextInput/> id
            <TextInput/> pw
            아래는 임시 로그인 폼 입니다.
            */}
            <div className="flex flex-row gap-2 w-full items-center justify-between px-5 pb-2"> 
              <div className="text-[32px]">
                ID
              </div>
              <div className="bg-white w-[402px] h-[67px]">
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center justify-between px-5">
              <div className="text-[32px]">
                PW
              </div>
              <div className="bg-white w-[402px] h-[67px]">
              </div>
            </div>
            <div className="flex flex-row gap-8 items-center justify-center mt-8">
              <div 
                className="bg-white text-center w-[240px] py-1 text-black font-semibold rounded-[25px] text-[32px]"
                onClick={()=>router.push("/main")} // 임시 로그인
              >
                LOGIN
              </div>
              <div className="bg-white text-center w-[240px] py-1 text-black font-semibold rounded-[25px] text-[32px]">
                SIGN UP
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default HomePage;