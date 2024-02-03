import React from 'react'

export default function ProjectBox({ project }) {
  return (
    <div className="bg-white dark:bg-[#2B2727] rounded-2xl drop-shadow-xl flex flex-col lg:flex-row ">
      <img
        src={project.img}
        className=" h-[360px] lg:w-[340px] lg:h-[340px] shadow-lg object-cover rounded-lg rounded-b-none  lg:rounded-r-none lg:rounded-bl-lg"
      />
      <div className="flex flex-col gap-5 py-10 px-8">
        <h3 className="text-p_blue text-left drop-shadow-xl dark:text-[#C1BAED] font-[Inter] font-bold text-3xl">
          {project.title}
        </h3>
        <p className="text-[#383838] dark:text-[#FFFFFF] leading-5  text-left font-[Inter] font-normal text-[16px]  ">
          {project.context}
        </p>
        <div className="flex gap-4 py-2">
          {project.techStack.map((tech, i) => {
            return (
              <a
                href="#"
                className="bg-p_blue dark:bg-[#8173DA] text-white px-5 py-2 shadow-lg drop-shadow-xl rounded-full font-[Inter] font-normal leading-3 text-[14px]"
              >
                {tech}
              </a>
            )
          })}
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="underline underline-offset-4 text-[#120B39] dark:text-[#CBF281] leading-3 font-[Inter] "
          >
            {project.site.title}
          </a>
          <a
            href="#"
            className="underline underline-offset-4 text-[#120B39] dark:text-[#CBF281] leading-3 font-[Inter] "
          >
            {project.github.title}
          </a>
        </div>
      </div>
    </div>
  )
}
