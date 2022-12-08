import React, { useState } from "react";
import register from "../assets/register.png";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import emailImg from "../assets/email_img.png";
import passwordImg from "../assets/password_img.png";

const Signup = () => {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
  const [passValue, setPassValue] = useState({
    password: "",
  });
  const [showPassword, setShowPasssord] = useState(true);

  const [isMember, setIsMember] = useState(false);

  const handleEmailValue = (e) => {
    const { name, value } = e.target;
    setEmailValue({
      ...emailValue,
      [name]: value,
    });
    console.log(value);
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassValue({
      ...passValue,
      [name]: value,
    });
    console.log(value);
  };
  const handleClickShowPassword = () => {
    setShowPasssord(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden laptop:block bg-cover bg-center">
        <img
          src={register}
          className="min-h-screen  object-cover"
          width="100%"

          alt="register"
        />
      </div>
      <div className="flex justify-center laptop:justify-start w-[100%] flex-1">
        <div className="laptop:ml-48 ml-0 pt-52 w-[542px] px-4">
          <div className="mb-14">
            <h1 className="text-[24px] leading-[38px] font-bold pb-4 ">
              Let’s Sign You In
            </h1>
            <p className="text-[16px] text-cardColor leading-[24px] font-normal">
              Don’t have an account yet?
              <span className="text-[#00B3FF]"> Sign Up</span>
            </p>
          </div>

          <div className="relative mb-4">
            <div className="">
              <img
                src={emailImg}
                alt="email"
                className="absolute bottom-6 left-5"
              />
            </div>
            <label className="text-[14px] leading-[28px] block font-medium text-[#000000] mb-2">
              Email Address
            </label>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#FFFFFF] border outline-none w-full h-[68px]  rounded-[14px] focus:border-[#002A76] pl-14"
                required=""
                value={emailValue.email}
                onChange={handleEmailValue}
              />
            </div>
          </div>

          <label className="text-[14px] leading-[28px] block font-medium text-[#000000] mb-2">
            Password
          </label>

          <div className="relative bg-[#FFFFFF]">
            <div className="">
              <img
                src={passwordImg}
                alt="email"
                className="absolute bottom-6 left-5"
              />
            </div>
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              className="bg-[#FFFFFF] border outline-none w-full h-[68px]  rounded-[14px] focus:border-[#002A76] pl-14"
              required=""
              onChange={handlePasswordChange}
              value={passValue.password}
            />
            {isMember ? (
              ""
            ) : (
              <div className="absolute bottom-5 right-6 ">
                {showPassword ? (
                  <AiOutlineEye
                    onClick={handleClickShowPassword}
                    size={22}
                    color="#737373"
                    style={{ fontWeight: "" }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={handleClickShowPassword}
                    color="#737373"
                    size={22}
                  />
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                value=""
                className="w-[27px] h-[25px] rounded-[px] border border-r-emerald-500 "
              />

              <label className="text-[14px] leading-[24px]  text-UserText">
                Remember Me
              </label>
            </div>

            <div>
              <p className="text-[16px] leading-[24px] font-medium text-[#002A76]">
                Forget Password?
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full h-[72px] capitalize bg-[#002A76] text-white text-center rounded-[14px] text-[18px] font-semibold">
              sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
