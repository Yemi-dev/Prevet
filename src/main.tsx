import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import persistStore from 'redux-persist/es/persistStore'

import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { AppContextProvider } from './context/app'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const persistor = persistStore(store)
root.render(
  // <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContextProvider>
              <App />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  // </React.StrictMode>,
);