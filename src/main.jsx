import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { SidebarProvider } from './context/sidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
      <App />
      </SidebarProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
