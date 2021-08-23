import React, { Suspense } from 'react'
import './i18n';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { light } from './assets/themes/globalTheme'
import { GlobalStyle } from './style'
import PrivateRoute from './components/privateRoute/privateRoute';
import Load from './components/load/load'
const Landing = React.lazy(() => import('./pages/landing/landing'));
const SignUp = React.lazy(() => import('./pages/authentication/signUp'));
const Login = React.lazy(() => import('./pages/authentication/login'));
const Profile = React.lazy(() => import('./pages/profile/profile'));
const Report = React.lazy(() => import('./components/report/report'));

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={(<Load />)}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/test' component={Report} />
            <PrivateRoute path='/profile' component={Profile} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App;
