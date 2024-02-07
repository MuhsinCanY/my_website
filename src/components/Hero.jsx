import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@material-tailwind/react'
import React from 'react'

export default function Hero({
  hero,
  langChangeHandler,
  darkModeChangeHandler,
  darkMode,
}) {
  return (
    <div className="main lg:bg-gradient-to-r lg:from-p_blue lg:dark:from-[#171043] lg:from-50% lg:to-p_green lg:dark:to-[#1A210B] lg:to-50%  flex flex-col  items-center justify-center font-[Inter]">
      <div className="container  flex w-[100%] bg-p_blue dark:bg-[#171043] py-6  dark:lg:bg-transparent gradientCustom">
        <div className="basis-[75%]">{}</div>
        <button
          onClick={langChangeHandler}
          className="font-bold -translate-x-full text-p_green dark:text-[#BAB2E7] pr-4 hover:text-[#daff94] text-[15px]"
        >
          {hero.lang}
        </button>
        <button
          onClick={darkModeChangeHandler}
          href="#"
          className="font-bold -translate-x-1/2 w-[145px] text-black dark:text-[#D9D9D9] hover:text-[#343434] text-[15px]"
        >
          {!darkMode ? hero.theme.dark : hero.theme.light}
        </button>
      </div>
      <div className="container flex  bg-p_blue dark:bg-[#171043] dark:lg:bg-transparent flex-col gap-10 p-16 pt-0 gradientCustom">
        <h1 className="text-p_green  drop-shadow-xl text-left  dark:text-p_green  font-bold text-3xl">
          {hero.name}
        </h1>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="basis-3/4 flex flex-col gap-8">
            <h2 className="text-p_green max-w-[450px] mb-6 text-left drop-shadow-xl dark:text-p_green  font-bold text-6xl">
              {hero.header}
            </h2>
            <p className="text-white leading-7  w-fit lg:w-[485px]  text-left  font-normal text-[22px]">
              {hero.content}
            </p>
            <div className="flex flex-wrap gap-4 ">
              <a
                href="#"
<<<<<<< HEAD
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md ] font-normal leading-3 text-[18px] border border-solid border-white"
=======
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md ] font-normal leading-3 text-[18px] dark:hover:bg-[#000000] hover:bg-[#ffffff] border border-solid border-white"
>>>>>>> origin/main
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className=" text-[26px] drop-shadow-md mr-3  text-p_blue dark:text-white"
                />
                GitHub
              </a>
              <a
                href="#"
<<<<<<< HEAD
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md  font-normal leading-3 text-[18px] border border-solid border-white"
=======
                className="bg-white dark:bg-[#252128] text-p_blue dark:text-white px-5 py-3 shadow-lg drop-shadow-lg rounded-md  font-normal leading-3 text-[18px] dark:hover:bg-[#000000] border border-solid border-white"
>>>>>>> origin/main
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  className=" text-[26px] drop-shadow-md mr-3  text-p_blue dark:text-white"
                />
                Linkedin
              </a>
            </div>
          </div>
          <img
            src={hero.img}
            className="basis-1/4 aspect-square h-[350px] drop-shadow-xl shadow-lg object-cover rounded-lg mr-0 lg:mr-20"
          />
        </div>
      </div>
    </div>
  )
}
