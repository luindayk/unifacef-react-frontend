import * as React from 'react';

import { observer } from 'mobx-react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import { endpoints } from './endpoints';
import NotFound from '../containers/not-found';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {
    return(
      <>
        <Divider hidden={true}></Divider>
        <Switch>
          {endpoints.map((route, key) => (
            <Route key={key} {...route} />
          ))}
          <Route path="*" exact={true} render={props => <NotFound {...props} />} />
        </Switch>
      </>
    );
  }

}