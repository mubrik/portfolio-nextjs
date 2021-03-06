import type { AppProps } from 'next/app';
import Head from 'next/head';
// base css
import CssBaseline from '@mui/material/CssBaseline';
// dark mode
import DarkModeContext from '../components/customContext/DarkModeContext';
// theme
import ThemeProviderContext from '../components/customContext/ThemeProviderContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DarkModeContext>
      <CssBaseline />
      <ThemeProviderContext>
        <Head>
          <title>Mubrik Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProviderContext>
    </DarkModeContext>
  );
}

export default MyApp;