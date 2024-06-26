import { Suspense, lazy } from 'react';
import { persistor, store } from '@redux/store';

import { BrowserRouter } from 'react-router-dom';
import { Loading } from '@src/pages/common/Loading';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App = lazy(() => import('./App'));
export const RootApp = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
