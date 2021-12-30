import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChevronButton } from '../ChevronButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/atom/ChevronButton',
  component: ChevronButton,
} as ComponentMeta<typeof ChevronButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChevronButton> = args => (
  <ChevronButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  type: 'up',
}

export const Down = Template.bind({})
Down.args = {
  type: 'down',
}
