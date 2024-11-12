import type { Meta, StoryObj } from "@storybook/react"
import MenuContent from "./MenuContent"

const meta = {
  title: "Components/Organism/MenuContent",
  component: MenuContent,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  argTypes: {},
} satisfies Meta<typeof MenuContent>

export default meta

type Story = StoryObj<typeof meta>

export const menuContent: Story = {
  args: {
    open: true,
    username: "Maria Echavarria ",
    documentId: "1000090191",
    age: 24,
    height: 1.62,
    weight: 50,
    title: "Datos del paciente",
  },
}
