import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './page';
import Layout from './layout';
import React from 'react';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  decorators: [
    (Story) => <Layout><Story /></Layout>,
  ]
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const WatchifyHomePage: Story = {};
