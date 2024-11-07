import type { Meta, StoryObj } from "@storybook/react"
import LineMenu from "./LineMenu"

const meta = {
  title: "Components/Atoms/LineMenu",
  component: LineMenu,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LineMenu>

export default meta
type Story = StoryObj<typeof meta>

export const lineMenu: Story = {
  args: {},
}
