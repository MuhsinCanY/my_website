import React from 'react'

const skills = [
  { img: '/assets/skills/Javascript.png', name: 'JAVASCRIPT' },
  { img: '/assets/skills/React.png', name: 'REACT' },
  { img: '/assets/skills/Redux.png', name: 'REDUX' },
  { img: '/assets/skills/Node.png', name: 'NODE' },
  { img: '/assets/skills/VSCode.png', name: 'VS CODE' },
  { img: '/assets/skills/Figma.png', name: 'FIGMA' },
]

export default function Skills() {
  return (
    <div className="main bg-slate-50 flex items-center justify-center dark:bg-[#252128]">
      <div className="container flex gap-10 p-16">
        <h2 className="text-p_blue dark:text-p_green font-[Inter] font-bold text-5xl">
          Skills
        </h2>
        <div className="skills flex flex-wrap gap-4 justify-evenly items-center">
          {skills.map((skill, i) => {
            return <SkillBox key={i} src={skill.img} name={skill.name} />
          })}
        </div>
      </div>
    </div>
  )
}

export function SkillBox({ src, name }) {
  return (
    <div className="flex items-center gap-4 p-2 w-[240px]">
      <img src={src} className="w-[110px] h-[110px] object-cover rounded-lg" />
      <h3 className="text-[#777777] font-[Inter] font-medium dark:text-[#FFFFFF] ">
        {name}
      </h3>
    </div>
  )
}
