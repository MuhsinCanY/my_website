import React from 'react'

const profile = {
  profileTitle: 'Profile',
  info: {
    title: 'Basic Information',
    info: [
      { question: 'Date of birth', answer: '07.07.1998' },
      { question: 'City of Residence', answer: 'Ankara/Turkey' },
      {
        question: 'Educational Status',
        answer: 'Hacettepe Univ. Bachelor of Mathematics, 2022',
      },
      { question: 'Preferred Role', answer: 'Frontend, UI' },
    ],
  },
  img: '/assets/profile/profile.png',
  aboutMe: {
    title: 'About Me',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod . ',
  },
}

export default function Profile() {
  return (
    <div className="main bg-p_blue flex  items-center justify-center dark:bg-[#252128]">
      <div className="container flex  flex-col gap-10 p-16">
        <h2 className="text-p_green text-center lg:text-left  dark:text-p_green font-[Inter] font-bold text-5xl">
          {profile.profileTitle}
        </h2>
        <div className="3section flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <h4 className="text-white text-left text-3xl font-[Inter] font-medium mb-4">
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
            className="w-[310px] h-[310px] lg:w-[250px] lg:h-[250px] object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h4 className="text-white text-left text-3xl font-[Inter] font-medium mb-4">
              {profile.aboutMe.title}
            </h4>
            <p className="text-white text-left font-[Inter] font-normal text-[18px] w-[310px] lg:w-[240px]">
              {profile.aboutMe.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProfileBox({ question, answer }) {
  return (
    <div className="flex justify-start gap-4 py-4 ">
      <p className="text-p_green text-left font-[Inter] font-semibold text-[16px] min-w-[160px] ">
        {question}
      </p>
      <p className="text-white text-left font-[Inter] font-normal text-[16px] max-w-[160px]">
        {answer}
      </p>
    </div>
  )
}
