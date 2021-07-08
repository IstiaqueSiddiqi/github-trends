import React, { Suspense, useMemo } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { createTheme, CssBaseline, LinearProgress, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TrendingListOfDev from './modules/trending-devs/TrendingListOfDev';
import TrendingListOfRepo from './modules/trending-repos/TrendingListOfRepo';
import PageNotFound from './components/PageNotFound';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

/**
 * @description Page Routes
 * @author Istiaque Siddiqi
 */
const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#161b22',
          },
          secondary: {
            main: '#1f6feb'
          },
          background: {
            default: '#0d1117'
          }
        },
        overrides: {
          MuiInputBase: {
            root: {
              color: '#8b949e'
            },
            input: {
              fontSize: '0.875rem',
              fontWeight: 600
            }
          },
          MuiSelect: {
            icon: {
              color: '#8b949e'
            }
          },
          MuiSvgIcon: {
            root: {
              color: '#8b949e'
            }
          },
          MuiButton: {
            outlinedSizeSmall: {
              backgroundColor: '#21262d',
            },
            outlinedSecondary: {
              color: '#c9d1d9',
              borderColor: '#30363d'
            }
          }
        }
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <QueryClientProvider client={queryClient}>
              <Router>
                {/* PAGE ROUTES */}
                <Switch>
                  <Route exact path="/" component={TrendingListOfRepo} />
                  <Route path="/developers" component={TrendingListOfDev} />
                  <Route component={PageNotFound} />
                </Switch>
              </Router>
            </QueryClientProvider>
          </Suspense>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
