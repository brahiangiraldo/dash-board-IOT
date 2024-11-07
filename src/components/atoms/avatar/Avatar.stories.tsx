import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"

const meta = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const avatar: Story = {
  args: {
    alt: "",
    height: 50,
    width: 50,
    urlImage: "https://www.blexar.com/avatar.png",
  },
}
