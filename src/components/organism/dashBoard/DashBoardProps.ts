import { StaticImageData } from "next/image"

export interface DashBoardProps {
  cards: Array<{
    title?: string
    subtitle?: string
    showWave?: boolean
    widget?: React.ReactNode
    linearGradient?: boolean
    percentageWidth?: number
    percentageHeight?: number
  }>
  background: StaticImageData
}
