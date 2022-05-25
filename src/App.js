import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ListPage, PersonPage, TestPage, TestDinamicPage } from './pages';
import { CountryPage } from './pages/country';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/list" exact={true}>
          <ListPage />
        </Route>
        <Route path="/list/:country" exact={true}>
          <CountryPage/>
        </Route>
        <Route path="/list/:country/:personId" exact={true}>
          <PersonPage />
        </Route>
        <Route path="/test" exact={true}>
          <TestPage />
        </Route>
        <Route path="/test/:id" exact={true}>
          <TestDinamicPage />
        </Route>
       
      </Switch>
    </Router>
  );
}