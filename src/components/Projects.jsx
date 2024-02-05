import React from 'react'
import ProjectBox from './ProjectBox'

export default function Projects({ projects }) {
  return (
    <div className="main bg-p_green dark:bg-[#1A210B] flex  items-center justify-center">
      <div className="container flex  flex-col gap-10 p-16">
        <h2 className="text-p_blue drop-shadow-xl text-center lg:text-left  dark:text-p_green font-[Inter] font-bold text-5xl">
          {projects.title}
        </h2>
        {projects.project.map((p, i) => {
          return <ProjectBox key={i} project={p} />
        })}
      </div>
    </div>
  )
}
