import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ThemeActions, ThemeMode, ThemeState } from './theme.interface'

type ThemeStore = ThemeState & ThemeActions

export const useThemeStore = create<ThemeStore, [['zustand/persist', ThemeStore]]>(
  // persist: persist state for save value into localStorage or sessionStorage
  persist(
    (set) => ({
      mode: ThemeMode.LIGHT,
      isDarkMode: false,
      setTheme: (mode) => set({ mode, isDarkMode: mode === ThemeMode.DARK }),
    }),
    {
      name: 'my-theme', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
