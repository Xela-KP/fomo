import './index.css';

import { persistor, store } from './redux/store.ts';

import { App } from './App.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
    </PersistGate>
);
