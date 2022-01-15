import React from 'react'
import { MainTheme } from './theme/appTheme';
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/productContext';

export const App = () => {
  return (
    <React.StrictMode>
      <MainTheme>
        <ProductProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ProductProvider>
      </MainTheme>
    </React.StrictMode>
  )
}