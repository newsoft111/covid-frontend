import { MenuEntry } from 'covidfinancev2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xB03132DD474259FdfDF2a9D82AbC604371870614',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xB03132DD474259FdfDF2a9D82AbC604371870614',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xB03132DD474259FdfDF2a9D82AbC604371870614',
      },
      {
        label: 'PooCoin',
        href: 'https://polygon.poocoin.app/tokens/0xB03132DD474259FdfDF2a9D82AbC604371870614',
      },
      
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.covidfinance.pro/',
      },
      {
        label: 'Vfat.tools',
        href: 'https://vfat.tools/polygon/covidfinance/',
      },
      {
        label: 'RUGDOC',
        href: 'https://rugdoc.io/project/covidfinance/',
      },
    ],
  },
]

export default config
