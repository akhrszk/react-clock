import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Clock } from '../Clock'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/organism/Clock',
  component: Clock,
} as ComponentMeta<typeof Clock>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = () => <Clock />

export const Default = Template.bind({})
