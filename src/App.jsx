import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { themeSettings } from '../ColorTheme'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header/header'
import MainLayout from './Layout/MainLayout'

function App() {
   const mode = useSelector((state) => state.main.mode)
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter>
            <Routes>
               <Route path="/login" element={<MainLayout page={<LoginPage />} />} />
               <Route path="/register" element={<MainLayout page={<RegisterPage />} />} />
               <Route path="/" element={<MainLayout page={<HomePage />} />} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   )
}
export default App
