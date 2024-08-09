import {
  BrowserWalletConnector,
  CONCORDIUM_WALLET_CONNECT_PROJECT_ID,
  WalletConnectConnector,
  ephemeralConnectorType,
} from '@concordium/react-components';

import { SignClientTypes } from '@walletconnect/types';

const WALLET_CONNECT_OPTS: SignClientTypes.Options = {
  projectId: CONCORDIUM_WALLET_CONNECT_PROJECT_ID,
  metadata: {
    name: 'AesirX SSO',
    description: 'AesirX SSO is our Open Source Single Sign On service.',
    url: '#',
    icons: [''],
  },
};

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const WALLET_CONNECT = ephemeralConnectorType(
  WalletConnectConnector.create.bind(this, WALLET_CONNECT_OPTS)
);
