import React from 'react'

export default function Hero() {
  return (
    <div className="w-screen h-[400px] flex">
      <div className="bg-p_blue basis-3/4 grow flex justify-end">
        <a
          href="#"
          className="m-5 font-[Inter] font-bold text-p_green hover:text-[#87b03c]"
        >
          <span className="font-[Inter]">TÜRKÇE</span>
          <span className="text-[#D9D9D9]">’YE GEÇ</span>
        </a>
      </div>
      <div className="bg-p_green basis-1/4 grow flex justify-start">
        <a
          href="#"
          className="m-5 font-[Inter] font-bold text-p_blue hover:text-[#37418a]"
        >
          <span className="font-[Inter]">DARK MODE</span>
        </a>
      </div>
    </div>
  )
}
