"use client"
import { useEffect, useState } from "react"

// images

// components, interfaces, types and functions

import { SearchParams } from "@/models/interfaces/ParamsProps"
import { onActiveLinks, onDetectRedirect } from "@/helpers/redirectCustom"
import DashBoard from "@/components/organism/dashBoard/DashBoard"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import { fetchData } from "@/infraestructure/services/HttpApiServices"

const HomePage = ({ params: { lng } }: SearchParams) => {
  const [dataCard, setDataCard] = useState([
    {
      title: "0",
      subtitle: "Activo",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "0",
      subtitle: "Temperatura Ambiental",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "0",
      subtitle: "Humedad Ambiental",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "0",
      subtitle: "Temperatura Corporal",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "0",
      subtitle: "Hist. Temp Corporal",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
    {
      title: "0",
      subtitle: "Saturacion",
      showWave: true,
      widget: (
        <IconFactory color="#AABDFF" height={60} width={64} name="HomeSimple" />
      ),
      percentageWidth: 100,
      percentageHeight: 80,
    },
  ])

  // const [lang, setLang] = useState<LanguagesType>(lng)

  // const changeLang = (lang: LanguagesType) => {
  //   setLang(lang)
  //   changeLanguage(lang)
  // }

  // const translate = getLanguage(lang)

  useEffect(() => {
    onActiveLinks()
    onDetectRedirect()
  }, [])

  const getData = async () => {
    const response = await fetchData()
    console.log(response[1])
    setDataCard([
      {
        title: String(response[1].medidaValor),
        subtitle: "Temperatura Coporal",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
      {
        title: String(response[2].medidaValor),
        subtitle: "Ritmo Cardiaco",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
      {
        title: String(response[3].medidaValor),
        subtitle: "Saturacion Oxigeno",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
      {
        title: String(response[4].medidaValor),
        subtitle: "Temperatura Ambiente.",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
      {
        title: String(response[5].medidaValor),
        subtitle: "Humedad Ambiente",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
      {
        title: "70",
        subtitle: "Saturacion",
        showWave: true,
        widget: (
          <IconFactory
            color="#AABDFF"
            height={60}
            width={64}
            name="HomeSimple"
          />
        ),
        percentageWidth: 100,
        percentageHeight: 80,
      },
    ])
  }
  useEffect(() => {
    setInterval(function () {
      getData()
    }, 3000)
  }, [])

  return (
    <>
      <DashBoard cards={dataCard} />
    </>
  )
}

export default HomePage
