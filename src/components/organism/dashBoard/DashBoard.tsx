import React, { useEffect, useState } from "react"
import "./dashBoard.css"
import { DashBoardProps } from "./DashBoardProps"
import MenuContent from "../menu-content/MenuContent"
import Card from "@/components/molecules/card/Card"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"

const DashBoard = ({ cards }: { cards: Array<any> }) => {
  const [randomCards, setRandomCards] = useState(cards)

  const getRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const updateRandomValues = () => {
    const updatedCards = randomCards.map((card) => ({
      ...card,
      title: getRandomValue(1, 150).toString(),
    }))
    setRandomCards(updatedCards)
  }

  useEffect(() => {
    const interval = setInterval(updateRandomValues, 3000) // Actualiza cada 3 segundos
    return () => clearInterval(interval)
  }, [randomCards])

  return (
    <section className="dashboard-section">
      <div className="dashboard-menu">
        <MenuContent
          username="Maria Camila Echavarria"
          documentId="1000090191"
          age={24}
          height={1.6}
          weight={50}
          title="Datos del paciente"
          open={true}
        />
      </div>

      <div className="dashboard-content">
        <div className="dashboard-title">
          Sistema de Monitoreo Remoto de Actividad Física
        </div>

        <div className="dashboard-items">
          {randomCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className="cards-container">
          <Card
            title={getRandomValue(100, 150).toString()}
            subtitle="Valor Actual Ritmo Cardiaco"
            showWave={true}
            widget={
              <IconFactory
                color="#AABDFF"
                height={70}
                width={74}
                name="HomeSimple"
              />
            }
            percentageWidth={100}
            percentageHeight={80}
          />
          <Card
            title={getRandomValue(100, 150).toString()}
            subtitle="Historico Ritmo Cardiaco"
            showWave={true}
            widget={
              <IconFactory
                color="#AABDFF"
                height={70}
                width={74}
                name="HomeSimple"
              />
            }
            percentageWidth={100}
            percentageHeight={80}
          />
        </div>
      </div>
    </section>
  )
}

export default DashBoard
