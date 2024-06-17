import { Suspense, lazy } from 'react';
import { persistor, store } from '@redux/store';

import { BrowserRouter } from 'react-router-dom';
import { Loading } from '@pages/Loading';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App = lazy(() => import('./App'));
export const RootApp = () => (
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </PersistGate>
);
