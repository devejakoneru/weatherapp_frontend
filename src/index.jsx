import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstPage from './FirstPage.jsx'
import LoginPage from './Login.jsx'
import SignUpPage from './SignUpPage.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Weather_App from '../Weather_App.jsx'
import Weather from './Weather.jsx'
import WeatherAlert from './weather-alert.jsx'
import ThirdPage from './Third_page.jsx'

createRoot(document.getElementById('root')).render
(  
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/FirstPage" element={<FirstPage />} />
            <Route path="/Weather_App" element={<Weather_App />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/WeatherAlert" element={<WeatherAlert />} />
            <Route path="/ThirdPage " element={<ThirdPage />} />
        </Routes>
    </BrowserRouter>
)