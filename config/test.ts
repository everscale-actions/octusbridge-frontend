import { AddressLiteral } from 'everscale-inpage-provider'

import { NetworkShape } from '@/types'


export const networks: NetworkShape[] = [
    {
        chainId: '1',
        currencySymbol: 'ETH',
        explorerBaseUrl: 'https://etherscan.io/',
        id: 'evm-1',
        label: 'Ethereum',
        name: 'Ethereum Mainnet',
        rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        transactionType: '0x2',
        type: 'evm',
    },
    {
        chainId: '56',
        currencySymbol: 'BNB',
        explorerBaseUrl: 'https://bscscan.com/',
        id: 'evm-56',
        label: 'Binance Smart Chain',
        name: 'BSC',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        transactionType: '0x0',
        type: 'evm',
    },
    {
        chainId: '250',
        currencySymbol: 'FTM',
        explorerBaseUrl: 'https://ftmscan.com/',
        id: 'evm-250',
        label: 'Fantom Opera',
        name: 'Fantom Opera',
        rpcUrl: 'https://rpc.ftm.tools/',
        transactionType: '0x0',
        type: 'evm',
    },
    {
        chainId: '137',
        currencySymbol: 'MATIC',
        explorerBaseUrl: 'https://polygonscan.com/',
        id: 'evm-137',
        label: 'Polygon',
        name: 'Polygon',
        rpcUrl: 'https://matic-mainnet.chainstacklabs.com/',
        transactionType: '0x0',
        type: 'evm',
    },
    {
        chainId: '1',
        currencySymbol: 'EVER',
        explorerBaseUrl: 'https://tonscan.io/',
        id: 'ton-1',
        label: 'Everscale',
        name: 'Everscale',
        rpcUrl: '',
        type: 'ton',
    },
]


export const AirdropContractAddress = new AddressLiteral('0:b321058503889a78fe0954cfb67564b218cff1eac1467dc48e4c80118dd6719f')

export const CreditBody = '5800000000'

export const EmptyWalletMinTonsAmount = '10000000000'

export const CreditFactoryAddress = new AddressLiteral('0:48b1daf7ff5c10ec590628e65702dcd01d947b36660a6348e5360f92c8b7bae5')

export const DepositToFactoryMaxSlippage = 10

export const DepositToFactoryMinSlippageNumerator = '1'

export const DepositToFactoryMinSlippageDenominator = '100'

export const GasToStaking = '11500000000'

export const GasToCastVote = '11500000000'

export const MinGasToUnlockCastedVotes = '11000000000'

export const GasToUnlockCastedVote = '200000000'

export const HiddenBridgeStrategyGas = '2500000000'

export const HiddenBridgeStrategyFactory = new AddressLiteral('0:0a6655e74d9f92ce088cbb68659d3d8a2aa1bc546899d42abf46cc16132cd591')

export const RelayEvmNetworkChainId = '1'

export const StakingAccountAddress = new AddressLiteral('0:ec6a2fd6c3732e494684d016f1addec1a1828b6b7ecfcd30b34e8e5ad2d421d0')

export const DaoRootContractAddress = new AddressLiteral('0:6da8defd136c0227dfa24edde79728142d2bfb74bc9edf66ad86ae7cd8e56a86')

export const TokenAssetsURI = 'https://raw.githubusercontent.com/broxus/bridge-assets/migration-1/main.json'

export const TokenListURI = 'https://raw.githubusercontent.com/broxus/ton-assets/migration-1/manifest.json'

export const Web3Url = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

export const IndexerApiBaseUrl = 'https://bridge-indexer.broxus.com/v1'

export const DaoIndexerApiBaseUrl = 'https://bridge-dao-indexer.broxus.com/v1'
