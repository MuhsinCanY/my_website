import React from 'react'
import ProjectBox from './ProjectBox'

const projects = {
  title: 'Projects',
  project: [
    {
      img: '/assets/projects/project1.png',
      title: 'Workintech',
      context:
        'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
      techStack: ['react', 'redux', 'vercel'],
      site: { title: 'View Site', url: '' },
      github: { title: 'GitHub', url: '' },
    },
    {
      img: '/assets/projects/project2.png',
      title: 'Journey',
      context:
        'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
      techStack: ['react', 'redux', 'vercel'],
      site: { title: 'View Site', url: '' },
      github: { title: 'GitHub', url: '' },
    },
  ],
}

export default function Projects() {
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
