import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ThaiNavPrimaryDrawer from '../src/ThaiNavPrimaryDrawer';

export default {
  title: 'ThaiNavPrimaryDrawer',
  component: ThaiNavPrimaryDrawer,
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    isOpen: true
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args) => <ThaiNavPrimaryDrawer {...args} />;

export const NavPrimaryDrawer = Template.bind({});
