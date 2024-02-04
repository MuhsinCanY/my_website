import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@material-tailwind/react'
import React from 'react'

const hero = {
  name: 'almila',
  header: 'I am a Frontend Developer...',
  content:
    '...who likes to craft solid and scalable frontend products with great user experiences.',
  img: '/assets/hero/hero.png',
  lang: 'TÜRKÇE',
  theme: 'DARK MODE',
}

export default function Hero() {
  return (
    <div className="main  lg:bg-gradient-to-r lg:from-p_blue lg:dark:from-[#171043] lg:from-75% lg:to-p_green lg:dark:to-[#1A210B] lg:to-75% flex flex-col  items-center justify-center ">
      <div className="font-[Inter] flex w-[100%] bg-p_blue dark:bg-[#171043] lg:bg-transparent  pt-8 lg:bg-transparent dark:lg:bg-transparent">
        <div className="basis-[75%]">{}</div>
        <a
          href="#"
          className="font-bold -translate-x-full text-p_green dark:text-[#BAB2E7] pr-4
 hover:text-[#daff94] "
        >
          {hero.lang}
        </a>
        <a
          href="#"
          className="font-bold -translate-x-1/2 text-black dark:text-[#D9D9D9] hover:text-[#343434]"
        >
          {hero.theme}
        </a>
      </div>
      <div
        className="container flex  bg-p_blue dark:bg-[#171043]
        lg:bg-transparent dark:lg:bg-transparent flex-col gap-10 p-16 pt-0"
      >
        <h2 className="text-p_green  drop-shadow-xl text-left  dark:text-p_green font-[Inter] font-bold text-3xl">
          {hero.name}
        </h2>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="basis-3/4 flex flex-col gap-8">
            <h2 className="text-p_green max-w-[450px] mb-6 text-left drop-shadow-xl dark:text-p_green font-[Inter] font-bold text-6xl">
              {hero.header}
            </h2>
            <p className="text-white leading-7  w-fit lg:w-[485px]  text-left font-[Inter] font-normal text-[22px]">
              {hero.content}
            </p>
            <div className="flex gap-4 ">
              <a
                href="#"
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md font-[Inter] font-normal leading-3 text-[18px] dark:hover:bg-[#000000] hover:bg-[#ffffff] border border-solid border-white"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className=" text-[26px] drop-shadow-md mr-3"
                />
                GitHub
              </a>
              <a
                href="#"
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md font-[Inter] font-normal leading-3 text-[18px] dark:hover:bg-[#000000] border border-solid border-white"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  className=" text-[26px] drop-shadow-md mr-3"
                />
                Linkedin
              </a>
            </div>
          </div>
          <img
            src={hero.img}
            className="basis-1/4 aspect-square h-[350px] drop-shadow-xl shadow-lg object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
