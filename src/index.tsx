import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './Store/Store'; // Import your Redux store
import App from './App'; // Assuming App is your root component
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import ErrorBoundary from './components/ErrorBoundary';
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(

    <Provider store={store}>
      {/* <ErrorBoundary> */}
      {/* <Router/>    */}
      <App/>
      {/* </ErrorBoundary> */}
    </Provider>

  );
} else {
  console.error('Root element with id "root" not found in the DOM.');
}
