import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import ThaiNavPrimaryMenu from '../src/ThaiNavPrimaryMenu';

export default {
  title: 'ThaiNavPrimaryMenu',
  component: ThaiNavPrimaryMenu,
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </MemoryRouter>
    )
  ],
  argTypes: {
    type: {
      options: ['menuBoxTabs', 'drawerTabs']
    }
  }
};

const Template = (args) => <ThaiNavPrimaryMenu {...args} />;

export const NavPrimaryMenu = Template.bind({});
