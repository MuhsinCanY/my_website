import React from 'react'

export default function ProfileBox({ question, answer }) {
  return (
    <div className="flex justify-start gap-4 py-3 drop-shadow-xl ">
      <p className="text-p_green leading-6 text-left font-[Inter] font-semibold text-[16px] min-w-[160px] ">
        {question}
      </p>
      <p className="text-white leading-6 text-left font-[Inter] font-normal text-[16px] max-w-[160px]">
        {answer}
      </p>
    </div>
  )
}
