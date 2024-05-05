import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const projectId = import.meta.env.PROJECT_ID;
const url = import.meta.env.METADATA_URL;

const queryClient = new QueryClient()
const metadata = {
  name: 'Web3Modal',
  description: 'Devico Test Solution',
  url: url, 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
})

export default function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}