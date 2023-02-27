import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '@/utils/styles/theme';
import '@/utils/styles/globals.css';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
