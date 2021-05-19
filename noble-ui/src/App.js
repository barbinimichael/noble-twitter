import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalTheme from './assets/themes/globalTheme'
import PrivateRoute from './components/privateRoute/privateRoute'
import { GlobalStyle } from './style'

const App = () => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme} />
      <GlobalStyle />
      <Router>
        {/* <Switch>
              <PrivateRoute path="/message" component={MessagePage} />
              <PrivateRoute path="profile" component={ProfilePage} />
              <PrivateRoute path="/search" component={SearchPage} />
              <Route path="/test" exact component={TestPage} />
              <Route path="/" exact component={SearchPage} />
            </Switch> */}
      </Router>
    </>
  )
}

export default App;
