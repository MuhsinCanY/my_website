import React from 'react'

export default function Hero() {
  return (
    <div className="w-screen h-[500px] flex">
      <div className="bg-p_blue dark:bg-[#171043] basis-3/4 grow flex justify-end">
        <a
          href="#"
          className="m-5 font-[Inter] font-bold text-p_green hover:text-[#87b03c]"
        >
          <span className="font-[Inter] dark:text-[#BAB2E7]">TÜRKÇE</span>
          <span className="text-[#D9D9D9] dark:text-[#777777]">’YE GEÇ</span>
        </a>
      </div>
      <div className="bg-p_green dark:bg-[#1A210B] basis-1/4 grow flex justify-start">
        <a
          href="#"
          className="m-5 font-[Inter] font-bold text-p_blue hover:text-[#37418a]"
        >
          <span className="font-[Inter] dark:text-[#D9D9D9]">DARK MODE</span>
        </a>
      </div>
    </div>
  )
}
