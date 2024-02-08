import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AppMainContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type FieldWrapper<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  EmailAddress: { input: string; output: string; }
  JSON: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type CachePurgeInput = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  types: Array<Scalars['String']['input']>;
};

export type HelloInput = {
  displayName: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  appMainHello: FieldWrapper<Scalars['String']['output']>;
};


export type QueryAppMainHelloArgs = {
  data?: InputMaybe<HelloInput>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CachePurgeInput: CachePurgeInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  HelloInput: HelloInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CachePurgeInput: CachePurgeInput;
  String: Scalars['String']['output'];
  DateTime: Scalars['DateTime']['output'];
  EmailAddress: Scalars['EmailAddress']['output'];
  HelloInput: HelloInput;
  JSON: Scalars['JSON']['output'];
  Query: {};
  Int: Scalars['Int']['output'];
  Boolean: Scalars['Boolean']['output'];
}>;

export type CachePurgeDirectiveArgs = {
  payloads: Array<CachePurgeInput>;
};

export type CachePurgeDirectiveResolver<Result, Parent, ContextType = AppMainContext, Args = CachePurgeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheSetDirectiveArgs = {
  identifier: Scalars['String']['input'];
  maxAge?: Maybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type CacheSetDirectiveResolver<Result, Parent, ContextType = AppMainContext, Args = CacheSetDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ServiceAdminDirectiveArgs = { };

export type ServiceAdminDirectiveResolver<Result, Parent, ContextType = AppMainContext, Args = ServiceAdminDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ValidatorDirectiveArgs = {
  input: Scalars['String']['input'];
  where: Scalars['String']['input'];
};

export type ValidatorDirectiveResolver<Result, Parent, ContextType = AppMainContext, Args = ValidatorDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type QueryResolvers<ContextType = AppMainContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  appMainHello?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<QueryAppMainHelloArgs>>;
}>;

export type Resolvers<ContextType = AppMainContext> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = AppMainContext> = ResolversObject<{
  cachePurge?: CachePurgeDirectiveResolver<any, any, ContextType>;
  cacheSet?: CacheSetDirectiveResolver<any, any, ContextType>;
  serviceAdmin?: ServiceAdminDirectiveResolver<any, any, ContextType>;
  validator?: ValidatorDirectiveResolver<any, any, ContextType>;
}>;
