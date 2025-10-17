import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react';
import { Provider, useSelector } from 'react-redux';

// project imports
import { store } from 'store';
import theme from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
import ErrorPage from 'error';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// assets
import globalStyles from 'styles/style.css';
import scrollBarStyle from 'react-perfect-scrollbar/dist/css/styles.css';
import favicon from '../public/favicon.svg';

// ---------- links ----------
export const links = () => [
  { rel: 'icon', href: favicon, type: 'image/svg' },
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: scrollBarStyle },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
  }
];

// ---------- meta ----------
export const meta = () => ([
  { charSet: 'utf-8' },
  { title: 'Berry - React Material Admin Dashboard Template' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  {
    name: 'description',
    content:
      'Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.'
  },
  // (opcional) OG/Twitter si los necesitas de inmediato:
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://berrydashboard.com/' },
  { property: 'og:site_name', content: 'berrydashboard.com' },
  { property: 'og:title', content: 'Berry - React Material Dashboard Template' },
  {
    property: 'og:description',
    content:
      'Berry Dashboard is made for the faster web application development built using Material-UI, Reactjs, Redux & Hook API.'
  },
  { property: 'og:image', content: 'https://berrydashboard.com/og-image/og-facebook.png' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:url', content: 'https://berrydashboard.com' },
  { property: 'twitter:title', content: 'Berry - React Material Admin Dashboard Template' },
  {
    property: 'twitter:description',
    content:
      'Berry Dashboard is made for the faster web application development built using Material-UI, Reactjs, Redux & Hook API.'
  },
  { property: 'twitter:image', content: 'https://berrydashboard.com/og-image/og-twitter.png' },
  { name: 'twitter:creator', content: '@codedthemes' }
]);

// ================================|| APP ||================================ //
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
        <meta name="theme-color" content="#2296f3" />
      </head>
      <body>
        <Provider store={store}>
          <Free />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Provider>
      </body>
    </html>
  );
}

// ============== Error Boundary (Remix v2) ==============
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>{`${error.status} ${error.statusText}`}</title>
          <Meta />
          <Links />
          {typeof document === 'undefined' ? '__STYLES__' : null}
        </head>
        <body>
          <Provider store={store}>
            <ErrorPage />
            <Scripts />
          </Provider>
        </body>
      </html>
    );
  }

  const message = error instanceof globalThis.Error ? error.message : String(error);

  return (
    <html>
      <head>
        <title>Unexpected Error</title>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Provider store={store}>
          <ErrorPage />
          <pre style={{ padding: 16 }}>{message}</pre>
          <Scripts />
        </Provider>
      </body>
    </html>
  );
}

// ================================|| Free Layout Switcher ||================================ //
export const Free = () => {
  const location = useLocation();
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          {location.pathname.startsWith('/pages') ? <MinimalLayout /> : <MainLayout />}
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}