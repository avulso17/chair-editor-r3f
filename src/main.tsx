import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomizationProvider from './providers/Customization.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomizationProvider>
      <App />
    </CustomizationProvider>
  </React.StrictMode>
)
