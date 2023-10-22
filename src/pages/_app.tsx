import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism ],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={"bg-red-50"}>
      <WagmiConfig config={wagmiConfig} >
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>

    </div>
    
  )
}
