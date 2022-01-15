import React from 'react'
import { MainTheme } from './theme/appTheme';
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/productContext';

const AppState: React.FC = ({ children }) => (
  <ProductProvider>
    {children}
  </ProductProvider>

);

export const App = () => {
  return (
    <React.StrictMode>
      <MainTheme>
        <AppState>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AppState>
      </MainTheme>
    </React.StrictMode>
  )
}