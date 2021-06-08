import React from 'react'
import './i18n';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { light } from './assets/themes/globalTheme'
import PrivateRoute from './components/privateRoute/privateRoute'
import Landing from './pages/landing/landing'
import SignUp from './pages/signUp/signUp'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'
import { GlobalStyle } from './style'
import Report from './components/report/report'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/test' component={Report} />
          <PrivateRoute path='/profile' component={Profile} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
