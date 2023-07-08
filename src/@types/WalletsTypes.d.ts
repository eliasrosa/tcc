export interface Wallet {
  id: string
  name: string
}

export interface WalletResponse {
  status: 'success' | 'error'
  message: string
}

export interface WalletsContextType {
  wallets: Wallet[]
  listWallets: () => Wallet[]
  insertWallet: (wallet: Omit<Wallet, 'id'>) => WalletResponse
  deleteWallet: (id: string) => WalletResponse
  updateWallet: (id: string, wallet: Wallet) => WalletResponse
}
