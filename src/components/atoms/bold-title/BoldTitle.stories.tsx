import type { Meta, StoryObj } from "@storybook/react"
import BoldTitle from "./BoldTitle"

const meta = {
  title: "Components/Atoms/ExampleComponent",
  component: BoldTitle,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BoldTitle>

export default meta
type Story = StoryObj<typeof meta>

export const boldTitle: Story = {
  args: {
    text: "9,456 USD",
  },
}
