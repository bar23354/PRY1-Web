import React from 'react'
import KeyPad from '../components/KeyPad'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/KeyPad',
  component: KeyPad,
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
}

const Template = (args) => <KeyPad {...args} />

export const Default = Template.bind({})
Default.args = {
  onButtonClick: action('button-click'),
}

export const Interactive = Template.bind({})
Interactive.args = {
  onButtonClick: (label) => {
    console.log(`Button ${label} clicked`)
    action('button-click')(label)
  },
}