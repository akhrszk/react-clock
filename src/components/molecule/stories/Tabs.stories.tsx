import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tabs, Tab } from '../Tabs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = () => (
  <Tabs>
    <Tab title="Tab 1" selected={true} />
    <Tab title="Tab 2" />
    <Tab title="Tab 3" />
  </Tabs>
)

export const Primary = Template.bind({})
