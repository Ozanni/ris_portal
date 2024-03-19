import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

import { store } from './stores/redux';
import { initializeDayjs } from './utils/initializeDayjs';

/**
 * Set timezone
 */
initializeDayjs();

function App() {
  console.log('test jenkins 2');
  return (
    <AppProvider store={store}>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
