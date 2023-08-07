import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ThemeMode, ThemeStore } from './theme.interface'

export const useThemeStore = create<ThemeStore>()(
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
