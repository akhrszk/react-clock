import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TimerDisplay } from '../TimerDisplay'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/TimerDisplay',
  component: TimerDisplay,
} as ComponentMeta<typeof TimerDisplay>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimerDisplay> = args => (
  <TimerDisplay {...args} />
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default = Template.bind({})
Default.args = {
  time: 360 * 1000,
}
