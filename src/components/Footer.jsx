import {
  faCodepen,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const footer = {
  title: 'Send me a message!',
  content: 'Got a question or proposal, or just want to say hello? Go ahead.',
  mail: 'almilasucode@gmail.com',
}

export default function Footer() {
  return (
    <div className="maindark:bg-[#1A210B] flex  items-center justify-center">
      <div className="container flex justify-center items-center flex-col gap-10 p-16">
        <h2 className="text-p_blue drop-shadow-xl text-center lg:text-left  dark:text-[#8F88FF] font-[Inter] font-bold text-5xl">
          {footer.title}
        </h2>
        <p className="text-[#120B39] dark:text-white leading-7 drop-shadow-md font-[Inter] font-normal text-[24px] w-[410px]">
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
            className="text-p_blue dark:text-[#8F88FF] text-[50px] hover:text-[#090f3e] drop-shadow-md "
          />
          <FontAwesomeIcon
            icon={faCodepen}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[50px] hover:text-[#090f3e] drop-shadow-md"
          />
          <FontAwesomeIcon
            icon={faAt}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[50px] hover:text-[#090f3e] drop-shadow-md"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="text-p_blue dark:text-[#8F88FF] text-[50px] hover:text-[#090f3e] drop-shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
