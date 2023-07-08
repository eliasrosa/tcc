'use client'

import { ReactNode, createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  Wallet,
  WalletResponse,
  WalletsContextType,
} from '@/@types/WalletsTypes'

import { getWalletsStorage } from '@/storage/wallets'

export const WalletsContext = createContext<WalletsContextType | null>(null)

export function WalletsProvider({ children }: { children: ReactNode }) {
  const [wallets, setWallets] = useState<Wallet[]>(getWalletsStorage())

  const insertWallet = (wallet: Omit<Wallet, 'id'>): WalletResponse => {
    const newWallet = { ...wallet, id: uuid() }

    setWallets([...wallets, newWallet])

    return { status: 'success', message: 'Grupo adicionado com sucesso' }
  }

  const listWallets = (): Wallet[] => {
    return wallets
  }

  const deleteWallet = (id: string): WalletResponse => {
    return { status: 'success', message: '' }
  }

  const updateWallet = (id: string, wallet: Wallet): WalletResponse => {
    return { status: 'success', message: '' }
  }

  return (
    <WalletsContext.Provider
      value={{
        wallets,
        insertWallet,
        deleteWallet,
        updateWallet,
        listWallets,
      }}
    >
      {children}
    </WalletsContext.Provider>
  )
}
