'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

const projectId = 'YOUR_PROJECT_ID'

// 2. Set chains
const mainnet = {
    chainId: 79,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://testnet.bscscan.com',
    rpcUrl: 'https://cloudflare-eth.com'
  }
  
  // 3. Create a metadata object
  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', 
    icons: ['https://avatars.mywebsite.com/']
  }
  
  // 4. Create Ethers config
  const ethersConfig = defaultConfig({
    /*Required*/
    metadata,
  
    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...',// used for the Coinbase SDK
    defaultChainId: 79, // used for the Coinbase SDK
  })
  
  export function Web3Modal({ children }: any) {
    createWeb3Modal({
        ethersConfig,
        chains: [mainnet],
        projectId,
        enableAnalytics: true, // Optional - defaults to your Cloud configuration
        enableOnramp: true // Optional - false as default
      })
    return children
  }