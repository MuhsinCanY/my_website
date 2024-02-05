import React from 'react'
import ProfileBox from './ProfileBox'

export default function Profile({ profile }) {
  return (
    <div className="main bg-p_blue dark:bg-[#171043] flex  items-center justify-center">
      <div className="container flex  flex-col gap-10 py-16 lg:p-16 p-4">
        <h2 className="text-p_green text-center mb-6 lg:text-left drop-shadow-xl dark:text-p_green font-[Inter] font-bold text-5xl">
          {profile.profileTitle}
        </h2>
        <div className="3section flex flex-col lg:flex-row justify-between items-center  gap-16 lg:gap-8">
          <div className="flex flex-col">
            <h4 className="text-white leading-6 drop-shadow-xl text-left text-3xl font-[Inter] font-medium mb-4">
              {profile.info.title}
            </h4>
            <div>
              {profile.info.info.map((info, i) => {
                return (
                  <ProfileBox
                    key={i}
                    question={info.question}
                    answer={info.answer}
                  />
                )
              })}
            </div>
          </div>
          <img
            src={profile.img}
            className="w-[310px] h-[310px] lg:w-[300px] lg:h-[300px] drop-shadow-xl shadow-lg object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h4 className="text-white leading-6 drop-shadow-xl text-left text-3xl font-[Inter] font-medium mb-8">
              {profile.aboutMe.title}
            </h4>
            <p className="text-white whitespace-pre-line  leading-7  text-left font-[Inter] font-normal text-[18px] w-[315px] lg:w-[240px]">
              {profile.aboutMe.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
