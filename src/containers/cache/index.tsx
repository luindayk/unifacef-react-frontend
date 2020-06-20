import * as React from 'react';
// import { Container, Grid, Header, Form, Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import CacheStore from './store';

interface Props {
  router: NewRouterStore;
  cache: CacheStore;
}

@inject('router', 'cache')
@observer
export default class Cache extends React.Component<Props> {

  componentDidMount() {
    const { loadForm } = this.props.cache;
    loadForm();
  }

  render() {
    return (<></>);
  }

}