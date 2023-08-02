export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeState {
  mode: ThemeMode
  isDarkMode: boolean
}

export interface ThemeActions {
  setTheme: (mode: ThemeMode) => void
}
