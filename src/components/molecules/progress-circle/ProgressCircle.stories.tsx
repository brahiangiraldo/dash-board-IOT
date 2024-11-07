import type { Meta, StoryObj } from "@storybook/react"
import ProgressCircle from "./ProgressCircle"

const meta = {
  title: "Components/Molecules/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  argTypes: {
    percentage: {
      control: { type: "number", min: 0, max: 100 },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof ProgressCircle>

export default meta
type Story = StoryObj<typeof meta>

export const progressCircle: Story = {
  args: {
    percentage: 50,
    size: "md",
  },
}
