import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Digit } from '../Digit'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/atom/Digit',
  component: Digit,
} as ComponentMeta<typeof Digit>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Digit> = args => <Digit {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  num: 1,
}
