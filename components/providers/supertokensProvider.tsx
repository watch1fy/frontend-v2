'use client';

import React from 'react';
import SuperTokensWebJs from 'supertokens-web-js';
import { frontendConfig } from '@/config/frontend';

if (typeof window !== 'undefined') {
  SuperTokensWebJs.init(frontendConfig());
}

export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <>{children}</>;
};