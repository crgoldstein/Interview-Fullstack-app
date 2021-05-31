import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  postMessage?: Maybe<PostResponse>;
  login?: Maybe<User>;
};


export type MutationPostMessageArgs = {
  message?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  user_email: Scalars['String'];
  postData?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'postData' | 'user_email' | 'createdAt'>
  )>>> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'token' | 'email'>
  )> }
);

export type NewMessageMutationVariables = Exact<{
  message: Scalars['String'];
  email: Scalars['String'];
}>;


export type NewMessageMutation = (
  { __typename?: 'Mutation' }
  & { postMessage?: Maybe<(
    { __typename?: 'PostResponse' }
    & Pick<PostResponse, 'success' | 'message'>
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'postData' | 'user_email' | 'createdAt'>
    )>>> }
  )> }
);


export const GetPostsDocument = gql`
    query getPosts {
  posts {
    postData
    user_email
    createdAt
  }
}
    `;
export type GetPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostsQuery, GetPostsQueryVariables>, 'query'>;

    export const GetPostsComponent = (props: GetPostsComponentProps) => (
      <ApolloReactComponents.Query<GetPostsQuery, GetPostsQueryVariables> query={GetPostsDocument} {...props} />
    );
    
export type GetPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostsQuery, GetPostsQueryVariables>
    } & TChildProps;
export function withGetPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostsQuery, GetPostsQueryVariables, GetPostsProps<TChildProps, TDataName>>(GetPostsDocument, {
      alias: 'getPosts',
      ...operationOptions
    });
};
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!) {
  login(email: $email) {
    id
    token
    email
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const NewMessageDocument = gql`
    mutation newMessage($message: String!, $email: String!) {
  postMessage(message: $message, email: $email) {
    success
    message
    posts {
      postData
      user_email
      createdAt
    }
  }
}
    `;
export type NewMessageMutationFn = ApolloReactCommon.MutationFunction<NewMessageMutation, NewMessageMutationVariables>;
export type NewMessageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<NewMessageMutation, NewMessageMutationVariables>, 'mutation'>;

    export const NewMessageComponent = (props: NewMessageComponentProps) => (
      <ApolloReactComponents.Mutation<NewMessageMutation, NewMessageMutationVariables> mutation={NewMessageDocument} {...props} />
    );
    
export type NewMessageProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<NewMessageMutation, NewMessageMutationVariables>
    } & TChildProps;
export function withNewMessage<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NewMessageMutation,
  NewMessageMutationVariables,
  NewMessageProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, NewMessageMutation, NewMessageMutationVariables, NewMessageProps<TChildProps, TDataName>>(NewMessageDocument, {
      alias: 'newMessage',
      ...operationOptions
    });
};
export type NewMessageMutationResult = ApolloReactCommon.MutationResult<NewMessageMutation>;
export type NewMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<NewMessageMutation, NewMessageMutationVariables>;