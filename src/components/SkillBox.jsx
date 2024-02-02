import React from 'react'

export function SkillBox({ src, name }) {
  return (
    <div className="flex items-center gap-4 p-2 w-[230px]">
      <img
        src={src}
        className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] object-cover rounded-lg"
      />
      <h3 className="text-[#777777] font-[Inter] font-medium dark:text-[#FFFFFF] ">
        {name}
      </h3>
    </div>
  )
}
