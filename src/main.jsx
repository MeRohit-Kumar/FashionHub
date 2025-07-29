import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
