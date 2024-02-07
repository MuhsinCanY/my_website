import {
  faCodepen,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer({ footer }) {
  return (
    <div className="main bg-white dark:bg-[#252128] flex  items-center justify-center dark:text-[#8F88FF]">
      <div className="container flex justify-center items-center flex-col gap-10 p-16">
        <h2 className="text-p_blue drop-shadow-xl text-center lg:text-left font-[Inter] dark:text-[#8F88FF] font-bold lg:text-5xl text-3xl">
          {footer.title}
        </h2>
        <p className="text-[#120B39] dark:text-white text-center leading-7 drop-shadow-md font-[Inter] font-normal text-[18px] lg:text-[24px] lg:w-[410px]">
          {footer.content}
        </p>
        <a
          href="#"
          className="underline underline-offset-4 text-[20px] text-p_blue dark:text-[#8F88FF] drop-shadow-md leading-3 font-[Inter] "
        >
          {footer.mail}
        </a>
        <div className="flex gap-8">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-p_blue dark:text-[#8F88FF] text-[33px] hover:text-[#090f3e] drop-shadow-md "
          />
          <FontAwesomeIcon
            icon={faCodepen}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[33px] hover:text-[#090f3e] drop-shadow-md"
          />
          <FontAwesomeIcon
            icon={faAt}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[33px] hover:text-[#090f3e] drop-shadow-md"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[33px] hover:text-[#090f3e] drop-shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
