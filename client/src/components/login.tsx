import React from 'react';
import { useMutation } from '@apollo/client';
import { LoginForm }from './login-form';
import { LoginDocument, LoginMutation, LoginMutationVariables } from '../graphql/generated/graphql';

type Props ={
  setEmail: (e:string) => void
}

export const Login = (props: Props) => {
  
  const [login, { loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(
    LoginDocument,
    {
      onCompleted({ login }) {
        if (login) {
          localStorage.setItem('email', login.email as string)
          localStorage.setItem('userId', login.id as string)
          props.setEmail(login.email)
        }
      }
    }
  );

  if (loading) return <div>loading</div>;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}
