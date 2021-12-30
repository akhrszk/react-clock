import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Timer } from '../Timer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/organism/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timer> = args => <Timer {...args} />

export const Default = Template.bind({})
Default.args = {
  initial: 180 * 1000,
}
