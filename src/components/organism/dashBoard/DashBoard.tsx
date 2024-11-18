"use client"
import React, { Suspense, useEffect } from "react"
import Image from "next/image"
import "./dashBoard.css"
import { DashBoardProps } from "./DashBoardProps"
import MenuContent from "../menu-content/MenuContent"
import Card from "@/components/molecules/card/Card"
import imageSrc from "@/assets/images/background_2.jpg"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import { fetchData } from "@/infraestructure/services/HttpApiServices"

const DashBoard = ({ cards = [] }: DashBoardProps) => {

  return (
    <section className="dashboard-section">
      <div className="dashboard-background">
        <Image
          src={imageSrc}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container_dashboard-menu">
        <div className="dashboard-menu">
          <MenuContent
            username="Maria Camila Echavarria"
            documentId="1000090191"
            age={24}
            height={1.62}
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
            {cards.map((card, index) => (
              <Suspense fallback={<div>Loading...</div>} key={index}>
                <Card {...card} />
              </Suspense>
            ))}
          </div>

          <div className="cards-container">
            <Suspense fallback={<div>Loading...</div>}>
              <Card
                title="120"
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
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Card
                title="110"
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
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashBoard