import React from 'react'
import Calculator from '../components/Calculator'

export default {
  title: 'Example/Calculator',
  component: Calculator,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Calculator {...args} />

export const Default = Template.bind({})
Default.args = {}

export const PipBoyTheme = Template.bind({})
PipBoyTheme.args = {}
PipBoyTheme.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
}