'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import LanguagePicker from '@/components/LanguagePicker'

const languageDict = {
  "ru": {
    "schedule": "расписание",
    "news": "новости",
    "our_works": "наши работы",
    "art_shop": "арт-лавка",
    "contacts": "контакты"
  },
  "en": {
    "schedule": "schedule",
    "news": "news",
    "our_works": "our works",
    "art_shop": "art-shop",
    "contacts": "contacts"
  },
}

const choseLanguage = ( lang ) => {
  if (lang==="ru"){
    return(languageDict.ru)
  } else {
    return(languageDict.en)
  }
}

export default function Menu({ lang }) {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)
  const currentDict = choseLanguage(lang)
  console.log(lang)

  const hideMenu = useCallback(() => {
    if (window.innerWidth < 1180)
      setShowModal(false)
   }, [])

  useEffect(() => {
    hideMenu()
    window.addEventListener('resize', hideMenu)
    return () => window.removeEventListener('resize', hideMenu)
  }, [hideMenu])

  return (
    <div className="py-[50px] px-[68px] md:px-[30px]">
      <nav className="flex justify-between items-center z-30">
        <a href="/">
          <Image
            className="dark:hidden ssm:w-[13rem]"
            src="/logo_yellow.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
          />
          <Image
            src="/logo_grey.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
            className="hidden dark:block ssm:w-[13rem]"
          />
        </a>

        <ul className="flex lt:gap-8 xl:gap-10 wide:gap-12 lg:hidden md:hidden dark:text-gray-02">
          <li>
            <a href="/schedule" className="lt:text-xl wide:text-2xl">{currentDict.schedule}</a>
          </li>
          <li>
            <a href="/news" className="lt:text-xl wide:text-2xl">{currentDict.news}</a>
          </li>
          <li>
            <a href="/our-works" className="lt:text-xl wide:text-2xl">{currentDict.our_works}</a>
          </li>
          <li>
            <a href="/art-shop" className="lt:text-xl wide:text-2xl">{currentDict.art_shop}</a>
          </li>
          <li>
            <a href="/contacts" className="lt:text-xl wide:text-2xl">{currentDict.contacts}</a>
          </li>
          <LanguagePicker />
        </ul>

        <button
          onClick={toggleModal}
          className="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0 z-10"
        >
          <Image
            className="dark:hidden ssm:w-[13rem]"
            src="/menu-01.svg"
            width={24}
            height={24}
            alt="Меню"
          />
          <Image
            className="hidden dark:block ssm:w-[13rem]"
            src="/menu-01-dark.svg"
            width={24}
            height={24}
            alt="Меню"
          />
        </button>
      </nav>

      {showModal === true &&
        <div className="fixed lg:left-0 w-full bg-background z-20 rounded-b-[3rem]"> 
          <ul className="grid grid-cols-2 gap-2 px-[10rem] mg:px-[2rem] sm:px-0 sm:ps-2 py-[2rem] font-light md:text-xl lg:text-2xl sm:text-base">
            <li><a href="/schedule" className="md:mx-5 lg:mx-8 ssm:mx-4">{currentDict.contacts}</a></li>
            <li><a href="/news" className="md:mx-5 lg:mx-8 ssm:mx-4">{currentDict.news}</a></li>
            <li><a href="/our-works" className="md:mx-5 lg:mx-8 ssm:mx-4">{currentDict.our_works}</a></li>
            <li><a href="/art-shop" className="md:mx-5 lg:mx-8 ssm:mx-4">{currentDict.art_shop}</a></li>
            <li><a href="/contacts" className="md:mx-5 lg:mx-8 ssm:mx-4">{currentDict.contacts}</a></li>
            <LanguagePicker className="md:mx-5 lg:mx-8 ssm:mx-4" />
          </ul>
        </div>       
      }

      {showModal === true &&
        <div className='overflow-y:hidden fixed ml-[-9rem] mt-[5rem] w-[1200px] h-full z-10 bg-dim'>
        </div>
      }
    </div>
  )
}