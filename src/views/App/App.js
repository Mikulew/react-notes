import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage/DetailsPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage/RegisterPage';
import { EnumRoutes } from 'enums/EnumRoutes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={EnumRoutes.LOGIN} component={LoginPage} />
          <Route exact path={EnumRoutes.REGISTER} component={RegisterPage} />
          <Route exact path={EnumRoutes.HOME} render={() => <Redirect to={EnumRoutes.NOTES} />} />
          <Route exact path={EnumRoutes.NOTES} component={Notes} />
          <Route path={EnumRoutes.NOTE} component={DetailsPage} />
          <Route exact path={EnumRoutes.ARTICLES} component={Articles} />
          <Route path={EnumRoutes.ARTICLE} component={DetailsPage} />
          <Route exact path={EnumRoutes.TWITTERS} component={Twitters} />
          <Route path={EnumRoutes.TWITTER} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
