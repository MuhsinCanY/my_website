import React from 'react'
import { SkillBox } from './SkillBox'

const skills = {
  skillTitle: 'Skills',
  skillBox: [
    { img: '/assets/skills/Javascript.png', name: 'JAVASCRIPT' },
    { img: '/assets/skills/React.png', name: 'REACT' },
    { img: '/assets/skills/Redux.png', name: 'REDUX' },
    { img: '/assets/skills/Node.png', name: 'NODE' },
    { img: '/assets/skills/VSCode.png', name: 'VS CODE' },
    { img: '/assets/skills/Figma.png', name: 'FIGMA' },
  ],
}

export default function Skills() {
  return (
    <div className="main bg-slate-50 flex  items-center justify-center dark:bg-[#252128]">
      <div className="container flex flex-col lg:flex-row gap-10 p-16">
        <h2 className="text-p_blue dark:text-p_green font-[Inter] font-bold text-5xl">
          {skills.skillTitle}
        </h2>
        <div className="skills flex flex-wrap gap-4 justify-evenly items-center justify-center">
          {skills.skillBox.map((skill, i) => {
            return <SkillBox key={i} src={skill.img} name={skill.name} />
          })}
        </div>
      </div>
    </div>
  )
}
