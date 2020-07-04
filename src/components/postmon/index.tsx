import React, { useState, useEffect } from 'react';
import { getAddress, AddressInfo } from '../../apis/postmon.api';
import { Card, Segment, Loader, Image, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';

interface Props {
  zipCode?: number;
}

export default function Postmon(props: Props) {

  const [address, setAddress] = useState<AddressInfo>();

  useEffect(() => {
    const addressBlank: AddressInfo = {
      bairro: '',
      cep: '',
      cidade: '',
      estado: '',
      cidade_info: {
        area_km2: '',
        codigo_ibge: ''
      },
      estado_info: {
        area_km2: '',
        codigo_ibge: '',
        nome: ''
      }
    };

    async function getNewAddress(zipCode: number) {
      try {
        const response = await getAddress(zipCode);
        setAddress(response.data);
      } catch (error) {
        Swal.fire(error.message, '', 'warning');
        setAddress(addressBlank);
      }
    }

    if (props.zipCode?.toString().length === 8) {
      getNewAddress(props.zipCode);
    } else {
      setAddress(addressBlank);
    }
  }, [props]);

  if (!address && !props.zipCode) {
    return <Segment><p>Informe um número de CEP</p></Segment>
  }

  if (!address?.cidade) {
    return <Segment>
      <Loader active={true} />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{address.cidade} - {address.estado}</Card.Header>
        <Card.Meta>{address.bairro}</Card.Meta>
        <Card.Description>
          {address.logradouro || 'Cep único'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <Icon name='tree' />{props.zipCode}
      </Card.Content>
    </Card>
  )

}
