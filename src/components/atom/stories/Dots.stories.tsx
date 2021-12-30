import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Dots } from '../Dots'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/atom/Dots',
  component: Dots,
} as ComponentMeta<typeof Dots>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dots> = args => <Dots {...args} />

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Colon = Template.bind({})
Colon.args = {
  value: ':',
}

export const Dot = Template.bind({})
Dot.args = {
  value: '.',
}
