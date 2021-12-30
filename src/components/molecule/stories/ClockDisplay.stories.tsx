import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ClockDisplay } from '../ClockDisplay'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/ClockDisplay',
  component: ClockDisplay,
} as ComponentMeta<typeof ClockDisplay>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClockDisplay> = args => (
  <ClockDisplay {...args} />
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default = Template.bind({})
Default.args = {
  timestamp: new Date().getTime(),
}
