import React from 'react';
import ReactDOM from 'react-dom';
import { MainTheme } from './theme/appTheme';
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/productContext';

ReactDOM.render(
  <React.StrictMode>
    <MainTheme>
      <ProductProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ProductProvider>
    </MainTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals