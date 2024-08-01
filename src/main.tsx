import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@trainingsapp/store';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@trainingsapp/utils/ui-theme/theme';
import { handlers } from '@trainingsapp/infrastructure/inMemory/server';
import { setupWorker } from 'msw/browser';
import App from './App.tsx';

const app = async () => {
  const worker = setupWorker(...handlers);
  await worker.start({ onUnhandledRequest: 'bypass' });

  return createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </StrictMode>,
  );
};

app();
