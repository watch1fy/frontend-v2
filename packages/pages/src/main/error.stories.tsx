import type { Meta, StoryObj } from '@storybook/react';

import Error from './error';
import React from 'react';
import Layout from './layout'

const meta: Meta<typeof Error> = {
  component: Error,
  decorators: (Story) => <Layout>{Story()}</Layout>
};

export default meta;

type Story = StoryObj<typeof Error>;

export const ErrorPage: Story = {};
