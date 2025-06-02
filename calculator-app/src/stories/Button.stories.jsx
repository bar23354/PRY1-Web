import React from 'react'
import Button from '../components/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      control: {
        type: 'select',
        options: ['number', 'operator', 'function', 'zero'],
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Number = Template.bind({})
Number.args = {
  label: '5',
  className: 'number',
  onClick: action('button-click'),
}

export const Operator = Template.bind({})
Operator.args = {
  label: '+',
  className: 'operator',
  onClick: action('button-click'),
}

export const Function = Template.bind({})
Function.args = {
  label: 'C',
  className: 'function',
  onClick: action('button-click'),
}

export const Zero = Template.bind({})
Zero.args = {
  label: '0',
  className: 'zero',
  onClick: action('button-click'),
}

export const Equals = Template.bind({})
Equals.args = {
  label: '=',
  className: 'operator',
  onClick: action('button-click'),
}