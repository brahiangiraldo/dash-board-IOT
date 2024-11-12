"use client"
import { useEffect, useState } from "react"

// images

// components, interfaces, types and functions

import { SearchParams } from "@/models/interfaces/ParamsProps"
import { changeLanguage, getLang } from "@/helpers/language"
import { onActiveLinks, onDetectRedirect } from "@/helpers/redirectCustom"
import getLanguage, { LanguagesType } from "@/models/i18n"
import { Seo } from "@/components/atoms/seo/Seo"
import Navbar from "@/components/organism/navbar/Navbar"
import ContactUs from "@/components/organism/contactUs/ContactUs"
import Footer from "@/components/organism/footer/Footer"
import DashBoard from "@/components/organism/dashBoard/DashBoard"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"

const HomePage = ({ params: { lng } }: SearchParams) => {
  const [lang, setLang] = useState<LanguagesType>(lng)

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)

  useEffect(() => {
    onActiveLinks()
    onDetectRedirect()
  }, [])

  const cards = [
    {
      title: "5",
      subtitle: "Activo",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "36",
      subtitle: "Temperatura Ambiental",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "80",
      subtitle: "Humedad Ambiental",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "80",
      subtitle: "Temperatura Corporal",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "100",
      subtitle: "Hist. Temp Corporal",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "70",
      subtitle: "Saturacion",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
  ]

  return (
    <>
      <DashBoard cards={cards} />
    </>
  )
}

export default HomePage
