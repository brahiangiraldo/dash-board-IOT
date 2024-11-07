// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import ItemMenubar from './ItemMenubar'

// export default {
// 	title: 'Components/Molecules/ItemMenubar',
// 	component: ItemMenubar
// } as ComponentMeta<typeof ItemMenubar>

// const component: ComponentStory<typeof ItemMenubar> = (args) => (
// 	<ItemMenubar {...args} />
// )
// export const itemMenubar = component.bind({})
// itemMenubar.args = {
// 	icon: 'LoginLogoDark',
// 	text: 'Example',
// 	href: '#'
// }

import type { Meta, StoryObj } from "@storybook/react"
import ItemMenubar from "./ItemMenubar"

const meta = {
  title: "Components/Molecules/ItemMenubar",
  component: ItemMenubar,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ItemMenubar>

export default meta
type Story = StoryObj<typeof meta>

export const itemMenubar: Story = {
  args: {
    icon: "ProAdvisio",
    text: "Example",
    href: "#",
  },
}
