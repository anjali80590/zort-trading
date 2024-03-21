import { useState, useReact } from "react";
import Image from "next/image";
import PlaceSection from "./PlaceSection";

export default function Hero() {
  return (
    <div className="relative w-full flex justify-center relative overflow-hidden h-fit mb-[5rem] px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] ">
      <div className="absolute top-0 left-0 w-full flex justify-between">
        {/* <Image alt="" src="/images/hero/back.png" width={1600} height={1456} layout="responsive" /> */}
        <div className="max-w-[40%] mt-[50vh] xl:mt-[20vh]">
          <Image
            alt=""
            src="/images/hero/redline.png"
            width={933}
            height={1442}
          />
        </div>
        <div className="max-w-[40%]">
          <Image
            alt=""
            src="/images/hero/greenline.png"
            width={880}
            height={1456}
          />
        </div>
      </div>
      <div className="w-full flex flex-col w-fit items-center z-10">
  <h2 className="font-medium text-[4.5rem] leading-[5rem] md:leading-[6rem] md:text-[4.9rem] text-white max-w-[700px] text-center mt-[56px] z-0 -tracking-[1.5px]">
    Ready to test your <span className="text-[#B9F70A]">crypto intuition</span>?{" "}
  </h2>
        <div className="lg:-mb-[150px]">
          <Image alt="" width={773} height={503} src="/images/hero/hero.png" />
        </div>
        <p className="text-white text-center text-[26px] leading-[38px] mb-[1.5rem] max-w-[470px]">
          Turn your guesswork into earnings with our one-of-a-kind prediction
          platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center mb-[3.125rem] z-20 text-[1.25rem] leading-[28px]">
          <button className="rounded-full border-[1px] border-[#B9F70A] py-[1.125rem] px-[2.5rem] text-[#B9F70A] font-Inter mx-[.625rem] mb-[1.25rem] md:mb-[0px]">
            Join Us
          </button>
          <button className="rounded-full border-[1px] py-[1.125rem] px-[2.5rem] text-white font-Inter mx-[.625rem] mb-[1.25rem] md:mb-[0px]">
            How it works?
          </button>
        </div>
        <PlaceSection />
      </div>
    </div>
  );
}
