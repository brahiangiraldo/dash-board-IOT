import type { Meta, StoryObj } from "@storybook/react"
import DashBoard from "./DashBoard"
import ProgressCircle from "@/components/molecules/progress-circle/ProgressCircle"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import backgroundImage from "@/assets/images/background.jpg"

const meta = {
  title: "Components/Organism/DashBoard",
  component: DashBoard,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  argTypes: {},
} satisfies Meta<typeof DashBoard>

export default meta
type Story = StoryObj<typeof meta>

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

export const dashBoard: Story = {
  args: {
    cards,
  },
}
