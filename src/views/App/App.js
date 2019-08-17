import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes/Notes';
import Articles from 'views/Articles/Articles';
import Twitters from 'views/Twitters/Twitters';
import DetailsPage from 'views/DetailsPage/DetailsPage';
import { EnumRoutes } from 'enums/EnumRoutes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
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
