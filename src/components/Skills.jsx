import React from 'react'
import { SkillBox } from './SkillBox'

export default function Skills({ skills }) {
  return (
    <div className="main bg-slate-50 flex  items-center justify-center dark:bg-[#252128]">
      <div className="container flex flex-col lg:flex-row gap-10 p-16">
        <h2 className="text-p_blue dark:text-p_green drop-shadow-xl font-[Inter] font-bold text-5xl">
          {skills.skillTitle}
        </h2>
        <div className="skills flex flex-wrap gap-4 drop-shadow-xl justify-evenly items-center justify-center">
          {skills.skillBox.map((skill, i) => {
            return <SkillBox key={i} src={skill.img} name={skill.name} />
          })}
        </div>
      </div>
    </div>
  )
}
