import React from 'react'
import './i18n';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { light } from './assets/themes/globalTheme'
import PrivateRoute from './components/privateRoute/privateRoute'
import Landing from './pages/landing/landing'
// import Profile from './pages/profile'
// import Report from './pages/report'
import { GlobalStyle } from './style'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/report" component={Report} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
