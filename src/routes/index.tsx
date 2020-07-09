import * as React from 'react';

import { observer } from 'mobx-react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import { endpoints, loginEndpoints } from './endpoints';
import NotFound from '../containers/not-found';
import MainMenu from '../components/main-menu';
import { isLoggedIn } from '../utils/auth.util';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {
    return(
      <>
        {loginEndpoints.map((route, key) => (
          <Route key={key} {...route} />
        ))}
        {isLoggedIn() ?
          <>
            <MainMenu />
            <Divider hidden={true}></Divider>
            <Switch>
              {endpoints.map((route, key) => (
                <Route key={key} {...route} />
              ))}
              <Route path="*" exact={true} render={props => <NotFound {...props} />} />
            </Switch>
          </> : <Redirect to={{ pathname: 'login' }} />
        }
      </>
    );
  }

}