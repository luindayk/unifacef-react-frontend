import * as React from 'react';
import { Container, Grid, Header, Form } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import RegisterStore from './store';
// import Cep from '../../components/cep';
import Github from '../../components/github';
import Postmon from '../../components/postmon';

interface Props {
  router: NewRouterStore,
  register: RegisterStore
}

@inject('router', 'register')
@observer
export default class Register extends React.Component<Props> {

  render() {
    const { zipcode, handleForm, github } = this.props.register;

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color='blue' as='h2'>
                <Header.Content>
                  Register
                  <Header.Subheader>Simulação de formulário</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form>
          <Form.Group widths='equal' style={{alignItems: 'flex-end'}}>
            <Form.Field>
              <label>Informe o CEP:</label>
              <input value={zipcode || ''}
                      maxLength={8}
                      name='zipcode'
                      onChange={handleForm}
                      placeholder='Ex 14408020' />
            </Form.Field>
            <Form.Field>
              <Postmon zipCode={zipcode} />
              {/* <Cep zipCode={zipcode} /> */}
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal' style={{alignItems: 'flex-end'}}>
            <Form.Field>
              <label>Informe seu github:</label>
              <input value={github || ''}
                      maxLength={50}
                      name='github'
                      onChange={handleForm}
                      placeholder='Ex luindayk' />
            </Form.Field>
            <Form.Field>
              <Github userName={github} />
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}