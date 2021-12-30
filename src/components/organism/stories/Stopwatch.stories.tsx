import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stopwatch } from '../Stopwatch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/organism/Stopwatch',
  component: Stopwatch,
} as ComponentMeta<typeof Stopwatch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stopwatch> = () => <Stopwatch />

export const Default = Template.bind({})
