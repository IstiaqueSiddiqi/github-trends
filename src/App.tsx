import React, { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@fontsource/roboto';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { AppBar, createTheme, CssBaseline, LinearProgress, ThemeProvider, Toolbar, Typography } from '@material-ui/core';

const TrendingRepositories = lazy(() => import('./TrendingRepositories'));
const TrendingDevelopers = lazy(() => import('./TrendingDevelopers'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

const queryClient = new QueryClient();

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          primary: {
            main: '#161b22',
            light: '#3c424a',
            dark: '#000000',
            contrastText: '#ffffff'
          },
          secondary: {
            main: '#1f6feb',
            light: '#6c9dff',
            dark: '#0045b8',
            contrastText: '#ffffff'
          },
          text: {
            secondary: '#8b949e',
          },
          background: {
            default: '#0d1117'
          }
        },
        overrides: {
          MuiInputBase: {
            input: {
              fontWeight: 600
            }
          },
          MuiButton: {
            outlinedSizeSmall: {
              backgroundColor: '#21262d',
            },
            outlinedSecondary: {
              color: '#c9d1d9'
            }
          }
        }
      }),
    [],
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar variant="dense">
            <Typography variant="h6">
              GitHub Trends
            </Typography>
          </Toolbar>
        </AppBar>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Router>
            {/* PAGE ROUTES */}
            <Switch>
              <Route exact path="/" component={TrendingRepositories} />
              <Route path="/developers" component={TrendingDevelopers} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
