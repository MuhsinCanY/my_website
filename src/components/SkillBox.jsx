import React from 'react'

export function SkillBox({ src, name }) {
  return (
    <div className="flex items-center gap-4 p-4 w-[208px] lg:w-[250px] md:mr-4">
      <img
        src={src}
        className="w-[70px] shadow-lg h-[70px] lg:w-[110px] lg:h-[110px] object-cover rounded-lg"
      />
      <h3 className="text-[#777777] font-[Inter] font-medium dark:text-[#FFFFFF] ">
        {name}
      </h3>
    </div>
  )
}
