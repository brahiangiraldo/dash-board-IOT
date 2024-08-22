import type { Meta, StoryObj } from '@storybook/react'
import Email from './Email'

const meta = {
  title: 'Components/Molecules/Email',
  component: Email,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Email>

export default meta
type Story = StoryObj<typeof meta>

export const email: Story = {
  args: {
    email: 'test@fyhasociados.com',
    name: 'Brian Alzate',
    params: {
      "Correo Electrónico": "test@test.com",
      "Nombre": "test test",
      "Teléfono": 1341234123,
      "Asunto": "contact-form",
      "Mensaje": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum distinctio totam saepe excepturi quam ullam voluptatem libero officia hic ratione, deleniti asperiores ea cum, facilis tempore at debitis quae provident.
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis rerum ipsa deserunt cumque odit optio similique itaque, odio eveniet, magnam aliquam debitis excepturi tempore, facere nisi assumenda expedita recusandae!
      `
    },
    company: 'FyH Asociados'
  },

}

