export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeState {
  mode: ThemeMode
  isDarkMode: boolean
}

interface ThemeActions {
  setTheme: (mode: ThemeMode) => void
}

export type ThemeStore = ThemeState & ThemeActions
