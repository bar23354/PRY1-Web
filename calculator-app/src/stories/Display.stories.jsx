import React from 'react'
import Display from '../components/Display'

export default {
  title: 'Example/Display',
  component: Display,
  argTypes: {
    value: { control: 'text' },
  },
}

const Template = (args) => <Display {...args} />

export const Zero = Template.bind({})
Zero.args = {
  value: '0',
}

export const Number = Template.bind({})
Number.args = {
  value: '123456789',
}

export const Decimal = Template.bind({})
Decimal.args = {
  value: '123.45',
}

export const Error = Template.bind({})
Error.args = {
  value: 'ERROR',
}

export const MaxLength = Template.bind({})
MaxLength.args = {
  value: '999999999',
}