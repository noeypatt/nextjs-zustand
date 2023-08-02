import React, { ReactNode } from 'react'
import { useThemeStore } from '@/store'
import { ThemeMode } from '@/store/modules/Theme/theme.interface'
import { AppBar, ThemeProvider, Toolbar, Typography, IconButton, createTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

interface Props {
  children: ReactNode
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: 'black !important',
    },
  },
})

const MainLayout = ({ children }: Props) => {
  const { isDarkMode, setTheme } = useThemeStore()

  const handleChangeTheme = () => {
    setTheme(isDarkMode ? ThemeMode.LIGHT : ThemeMode.DARK)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            App Bar
          </Typography>
          <IconButton size="large" aria-haspopup="true" onClick={handleChangeTheme} color="inherit">
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  )
}
export default MainLayout
