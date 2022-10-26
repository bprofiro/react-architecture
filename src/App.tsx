import { Provider } from 'react-redux';

import { Dashboard } from './modules/presentation/pages/Dashboard';
import { store } from './modules/infrastructure/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};
