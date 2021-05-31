import React, { useState} from 'react';
import styled from 'react-emotion';
import { Button, Container} from '@material-ui/core'
import { LoginMutationVariables } from '../graphql/generated/graphql';

type Props = {
  login: (a: { variables: LoginMutationVariables }) => void;
}

export const LoginForm = ( props: Props)  => {

  const [email, setEmail] = useState('')

  const onChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const email = (event.target as HTMLInputElement).value
    setEmail( email )
  }

  const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.login({ variables: { email: email } })
  }

    return (
      <Container>
        <StyledForm onSubmit={(e:React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
          <StyledInput
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)}
          />
          <Button type="submit" variant="outlined" color="primary">Log in</Button>
        </StyledForm>
      </Container>
    )
  
}

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 500,
  borderRadius: 3,
  backgroundColor: 'white',
  margin: 'auto',
  textAlign: 'center'
});

const StyledInput = styled('input')({
  width: '80%',
  marginBottom: 2 * 2,
  padding: `25px 25px`,
  border: `1px solid grey`,
  fontSize: 16,
  outline: 'none',
  textAlign: 'center'
});
