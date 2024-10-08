import React from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';


const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
    // theme: ThemeButton.CLEAR
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  // theme: ThemeButton.CLEAR
};
