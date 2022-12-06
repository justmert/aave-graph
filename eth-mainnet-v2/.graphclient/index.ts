// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BlockTrackingTransform from "@graphprotocol/client-block-tracking";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EthMainnetV2Types } from './sources/eth-mainnet-v2/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AToken = {
  /**
   * AToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
  tokenContractImpl: Scalars['Bytes'];
};

export type ATokenBalanceHistoryItem = {
  /**
   * userReserve + txHash
   *
   */
  id: Scalars['ID'];
  userReserve: UserReserve;
  timestamp: Scalars['Int'];
  scaledATokenBalance: Scalars['BigInt'];
  currentATokenBalance: Scalars['BigInt'];
  index: Scalars['BigInt'];
};

export type ATokenBalanceHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scaledATokenBalance?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentATokenBalance?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentATokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ATokenBalanceHistoryItem_orderBy =
  | 'id'
  | 'userReserve'
  | 'timestamp'
  | 'scaledATokenBalance'
  | 'currentATokenBalance'
  | 'index';

export type AToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  underlyingAssetAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenContractImpl?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_contains?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AToken_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals'
  | 'tokenContractImpl';

export type Action =
  | 'Deposit'
  | 'RedeemUnderlying'
  | 'Repay'
  | 'Borrow'
  | 'Swap'
  | 'UsageAsCollateral'
  | 'RebalanceStableBorrowRate'
  | 'LiquidationCall';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Borrow = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  caller: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  borrowRate: Scalars['BigInt'];
  borrowRateMode: BorrowRateMode;
  referrer?: Maybe<Referrer>;
  timestamp: Scalars['Int'];
  stableTokenDebt: Scalars['BigInt'];
  variableTokenDebt: Scalars['BigInt'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type BorrowRateMode =
  | 'None'
  | 'Stable'
  | 'Variable';

export type Borrow_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  caller?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRate?: InputMaybe<Scalars['BigInt']>;
  borrowRate_not?: InputMaybe<Scalars['BigInt']>;
  borrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  borrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  borrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  borrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  borrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRateMode?: InputMaybe<BorrowRateMode>;
  borrowRateMode_not?: InputMaybe<BorrowRateMode>;
  borrowRateMode_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateMode_not_in?: InputMaybe<Array<BorrowRateMode>>;
  referrer?: InputMaybe<Scalars['String']>;
  referrer_not?: InputMaybe<Scalars['String']>;
  referrer_gt?: InputMaybe<Scalars['String']>;
  referrer_lt?: InputMaybe<Scalars['String']>;
  referrer_gte?: InputMaybe<Scalars['String']>;
  referrer_lte?: InputMaybe<Scalars['String']>;
  referrer_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_contains?: InputMaybe<Scalars['String']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_contains?: InputMaybe<Scalars['String']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_starts_with?: InputMaybe<Scalars['String']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_ends_with?: InputMaybe<Scalars['String']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_?: InputMaybe<Referrer_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stableTokenDebt?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_not?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_gt?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_lt?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_gte?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_lte?: InputMaybe<Scalars['BigInt']>;
  stableTokenDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableTokenDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableTokenDebt?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_not?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_gt?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_lt?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_gte?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_lte?: InputMaybe<Scalars['BigInt']>;
  variableTokenDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableTokenDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Borrow_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'caller'
  | 'reserve'
  | 'userReserve'
  | 'amount'
  | 'borrowRate'
  | 'borrowRateMode'
  | 'referrer'
  | 'timestamp'
  | 'stableTokenDebt'
  | 'variableTokenDebt'
  | 'assetPriceUSD';

export type ChainlinkAggregator = {
  id: Scalars['ID'];
  oracleAsset: PriceOracleAsset;
};

export type ChainlinkAggregator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oracleAsset?: InputMaybe<Scalars['String']>;
  oracleAsset_not?: InputMaybe<Scalars['String']>;
  oracleAsset_gt?: InputMaybe<Scalars['String']>;
  oracleAsset_lt?: InputMaybe<Scalars['String']>;
  oracleAsset_gte?: InputMaybe<Scalars['String']>;
  oracleAsset_lte?: InputMaybe<Scalars['String']>;
  oracleAsset_in?: InputMaybe<Array<Scalars['String']>>;
  oracleAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  oracleAsset_contains?: InputMaybe<Scalars['String']>;
  oracleAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_not_contains?: InputMaybe<Scalars['String']>;
  oracleAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_starts_with?: InputMaybe<Scalars['String']>;
  oracleAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  oracleAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_ends_with?: InputMaybe<Scalars['String']>;
  oracleAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  oracleAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracleAsset_?: InputMaybe<PriceOracleAsset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ChainlinkAggregator_orderBy =
  | 'id'
  | 'oracleAsset';

export type ChainlinkENS = {
  /** id is the node hash */
  id: Scalars['ID'];
  /** address of the aggregator */
  aggregatorAddress: Scalars['Bytes'];
  /** token address represented with this aggregator */
  underlyingAddress: Scalars['Bytes'];
  /** symbol of the token represented on the aggregator */
  symbol: Scalars['String'];
};

export type ChainlinkENS_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  aggregatorAddress?: InputMaybe<Scalars['Bytes']>;
  aggregatorAddress_not?: InputMaybe<Scalars['Bytes']>;
  aggregatorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aggregatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aggregatorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  aggregatorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ChainlinkENS_orderBy =
  | 'id'
  | 'aggregatorAddress'
  | 'underlyingAddress'
  | 'symbol';

export type ClaimIncentiveCall = {
  /**
   * txHash
   *
   */
  id: Scalars['ID'];
  incentivesController: IncentivesController;
  user: User;
  amount: Scalars['BigInt'];
};

export type ClaimIncentiveCall_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  incentivesController?: InputMaybe<Scalars['String']>;
  incentivesController_not?: InputMaybe<Scalars['String']>;
  incentivesController_gt?: InputMaybe<Scalars['String']>;
  incentivesController_lt?: InputMaybe<Scalars['String']>;
  incentivesController_gte?: InputMaybe<Scalars['String']>;
  incentivesController_lte?: InputMaybe<Scalars['String']>;
  incentivesController_in?: InputMaybe<Array<Scalars['String']>>;
  incentivesController_not_in?: InputMaybe<Array<Scalars['String']>>;
  incentivesController_contains?: InputMaybe<Scalars['String']>;
  incentivesController_contains_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_contains?: InputMaybe<Scalars['String']>;
  incentivesController_not_contains_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_starts_with?: InputMaybe<Scalars['String']>;
  incentivesController_starts_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_starts_with?: InputMaybe<Scalars['String']>;
  incentivesController_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_ends_with?: InputMaybe<Scalars['String']>;
  incentivesController_ends_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_ends_with?: InputMaybe<Scalars['String']>;
  incentivesController_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_?: InputMaybe<IncentivesController_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ClaimIncentiveCall_orderBy =
  | 'id'
  | 'incentivesController'
  | 'user'
  | 'amount';

export type ContractToPoolMapping = {
  id: Scalars['ID'];
  pool: Pool;
};

export type ContractToPoolMapping_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ContractToPoolMapping_orderBy =
  | 'id'
  | 'pool';

export type Deposit = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  caller: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  referrer?: Maybe<Referrer>;
  timestamp: Scalars['Int'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  caller?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referrer?: InputMaybe<Scalars['String']>;
  referrer_not?: InputMaybe<Scalars['String']>;
  referrer_gt?: InputMaybe<Scalars['String']>;
  referrer_lt?: InputMaybe<Scalars['String']>;
  referrer_gte?: InputMaybe<Scalars['String']>;
  referrer_lte?: InputMaybe<Scalars['String']>;
  referrer_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_contains?: InputMaybe<Scalars['String']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_contains?: InputMaybe<Scalars['String']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_starts_with?: InputMaybe<Scalars['String']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_ends_with?: InputMaybe<Scalars['String']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_?: InputMaybe<Referrer_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Deposit_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'caller'
  | 'reserve'
  | 'userReserve'
  | 'amount'
  | 'referrer'
  | 'timestamp'
  | 'assetPriceUSD';

export type FlashLoan = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  reserve: Reserve;
  target: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  totalFee: Scalars['BigInt'];
  initiator: User;
  timestamp: Scalars['Int'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type FlashLoan_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFee?: InputMaybe<Scalars['BigInt']>;
  totalFee_not?: InputMaybe<Scalars['BigInt']>;
  totalFee_gt?: InputMaybe<Scalars['BigInt']>;
  totalFee_lt?: InputMaybe<Scalars['BigInt']>;
  totalFee_gte?: InputMaybe<Scalars['BigInt']>;
  totalFee_lte?: InputMaybe<Scalars['BigInt']>;
  totalFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initiator?: InputMaybe<Scalars['String']>;
  initiator_not?: InputMaybe<Scalars['String']>;
  initiator_gt?: InputMaybe<Scalars['String']>;
  initiator_lt?: InputMaybe<Scalars['String']>;
  initiator_gte?: InputMaybe<Scalars['String']>;
  initiator_lte?: InputMaybe<Scalars['String']>;
  initiator_in?: InputMaybe<Array<Scalars['String']>>;
  initiator_not_in?: InputMaybe<Array<Scalars['String']>>;
  initiator_contains?: InputMaybe<Scalars['String']>;
  initiator_contains_nocase?: InputMaybe<Scalars['String']>;
  initiator_not_contains?: InputMaybe<Scalars['String']>;
  initiator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  initiator_starts_with?: InputMaybe<Scalars['String']>;
  initiator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initiator_not_starts_with?: InputMaybe<Scalars['String']>;
  initiator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initiator_ends_with?: InputMaybe<Scalars['String']>;
  initiator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  initiator_not_ends_with?: InputMaybe<Scalars['String']>;
  initiator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  initiator_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FlashLoan_orderBy =
  | 'id'
  | 'pool'
  | 'reserve'
  | 'target'
  | 'amount'
  | 'totalFee'
  | 'initiator'
  | 'timestamp'
  | 'assetPriceUSD';

export type IncentivesController = {
  /**
   * address of the incentives controller
   *
   */
  id: Scalars['ID'];
  rewardToken: Scalars['Bytes'];
  rewardTokenDecimals: Scalars['Int'];
  rewardTokenSymbol: Scalars['String'];
  precision: Scalars['Int'];
  emissionEndTimestamp: Scalars['Int'];
  incentivizedActions: Array<IncentivizedAction>;
  claimIncentives: Array<ClaimIncentiveCall>;
};


export type IncentivesControllerincentivizedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivizedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivizedAction_filter>;
};


export type IncentivesControllerclaimIncentivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimIncentiveCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimIncentiveCall_filter>;
};

export type IncentivesController_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardToken?: InputMaybe<Scalars['Bytes']>;
  rewardToken_not?: InputMaybe<Scalars['Bytes']>;
  rewardToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardToken_contains?: InputMaybe<Scalars['Bytes']>;
  rewardToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardTokenDecimals?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_not?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_gt?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_lt?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_gte?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_lte?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardTokenSymbol?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_gt?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_lt?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_gte?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_lte?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  rewardTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardTokenSymbol_contains?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  precision?: InputMaybe<Scalars['Int']>;
  precision_not?: InputMaybe<Scalars['Int']>;
  precision_gt?: InputMaybe<Scalars['Int']>;
  precision_lt?: InputMaybe<Scalars['Int']>;
  precision_gte?: InputMaybe<Scalars['Int']>;
  precision_lte?: InputMaybe<Scalars['Int']>;
  precision_in?: InputMaybe<Array<Scalars['Int']>>;
  precision_not_in?: InputMaybe<Array<Scalars['Int']>>;
  emissionEndTimestamp?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_not?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_gt?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_lt?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_gte?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_lte?: InputMaybe<Scalars['Int']>;
  emissionEndTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  emissionEndTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  incentivizedActions_?: InputMaybe<IncentivizedAction_filter>;
  claimIncentives_?: InputMaybe<ClaimIncentiveCall_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type IncentivesController_orderBy =
  | 'id'
  | 'rewardToken'
  | 'rewardTokenDecimals'
  | 'rewardTokenSymbol'
  | 'precision'
  | 'emissionEndTimestamp'
  | 'incentivizedActions'
  | 'claimIncentives';

export type IncentivizedAction = {
  /**
   * txHash
   *
   */
  id: Scalars['ID'];
  incentivesController: IncentivesController;
  user: User;
  amount: Scalars['BigInt'];
};

export type IncentivizedAction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  incentivesController?: InputMaybe<Scalars['String']>;
  incentivesController_not?: InputMaybe<Scalars['String']>;
  incentivesController_gt?: InputMaybe<Scalars['String']>;
  incentivesController_lt?: InputMaybe<Scalars['String']>;
  incentivesController_gte?: InputMaybe<Scalars['String']>;
  incentivesController_lte?: InputMaybe<Scalars['String']>;
  incentivesController_in?: InputMaybe<Array<Scalars['String']>>;
  incentivesController_not_in?: InputMaybe<Array<Scalars['String']>>;
  incentivesController_contains?: InputMaybe<Scalars['String']>;
  incentivesController_contains_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_contains?: InputMaybe<Scalars['String']>;
  incentivesController_not_contains_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_starts_with?: InputMaybe<Scalars['String']>;
  incentivesController_starts_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_starts_with?: InputMaybe<Scalars['String']>;
  incentivesController_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_ends_with?: InputMaybe<Scalars['String']>;
  incentivesController_ends_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_not_ends_with?: InputMaybe<Scalars['String']>;
  incentivesController_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  incentivesController_?: InputMaybe<IncentivesController_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type IncentivizedAction_orderBy =
  | 'id'
  | 'incentivesController'
  | 'user'
  | 'amount';

export type LiquidationCall = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  collateralReserve: Reserve;
  collateralUserReserve: UserReserve;
  collateralAmount: Scalars['BigInt'];
  principalReserve: Reserve;
  principalUserReserve: UserReserve;
  principalAmount: Scalars['BigInt'];
  liquidator: Scalars['Bytes'];
  timestamp: Scalars['Int'];
  collateralAssetPriceUSD: Scalars['BigDecimal'];
  borrowAssetPriceUSD: Scalars['BigDecimal'];
};

export type LiquidationCall_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  collateralReserve?: InputMaybe<Scalars['String']>;
  collateralReserve_not?: InputMaybe<Scalars['String']>;
  collateralReserve_gt?: InputMaybe<Scalars['String']>;
  collateralReserve_lt?: InputMaybe<Scalars['String']>;
  collateralReserve_gte?: InputMaybe<Scalars['String']>;
  collateralReserve_lte?: InputMaybe<Scalars['String']>;
  collateralReserve_in?: InputMaybe<Array<Scalars['String']>>;
  collateralReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralReserve_contains?: InputMaybe<Scalars['String']>;
  collateralReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_not_contains?: InputMaybe<Scalars['String']>;
  collateralReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_starts_with?: InputMaybe<Scalars['String']>;
  collateralReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_ends_with?: InputMaybe<Scalars['String']>;
  collateralReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralReserve_?: InputMaybe<Reserve_filter>;
  collateralUserReserve?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not?: InputMaybe<Scalars['String']>;
  collateralUserReserve_gt?: InputMaybe<Scalars['String']>;
  collateralUserReserve_lt?: InputMaybe<Scalars['String']>;
  collateralUserReserve_gte?: InputMaybe<Scalars['String']>;
  collateralUserReserve_lte?: InputMaybe<Scalars['String']>;
  collateralUserReserve_in?: InputMaybe<Array<Scalars['String']>>;
  collateralUserReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralUserReserve_contains?: InputMaybe<Scalars['String']>;
  collateralUserReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_contains?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_starts_with?: InputMaybe<Scalars['String']>;
  collateralUserReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_ends_with?: InputMaybe<Scalars['String']>;
  collateralUserReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralUserReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralUserReserve_?: InputMaybe<UserReserve_filter>;
  collateralAmount?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_not?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principalReserve?: InputMaybe<Scalars['String']>;
  principalReserve_not?: InputMaybe<Scalars['String']>;
  principalReserve_gt?: InputMaybe<Scalars['String']>;
  principalReserve_lt?: InputMaybe<Scalars['String']>;
  principalReserve_gte?: InputMaybe<Scalars['String']>;
  principalReserve_lte?: InputMaybe<Scalars['String']>;
  principalReserve_in?: InputMaybe<Array<Scalars['String']>>;
  principalReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  principalReserve_contains?: InputMaybe<Scalars['String']>;
  principalReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_not_contains?: InputMaybe<Scalars['String']>;
  principalReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_starts_with?: InputMaybe<Scalars['String']>;
  principalReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  principalReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_ends_with?: InputMaybe<Scalars['String']>;
  principalReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  principalReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  principalReserve_?: InputMaybe<Reserve_filter>;
  principalUserReserve?: InputMaybe<Scalars['String']>;
  principalUserReserve_not?: InputMaybe<Scalars['String']>;
  principalUserReserve_gt?: InputMaybe<Scalars['String']>;
  principalUserReserve_lt?: InputMaybe<Scalars['String']>;
  principalUserReserve_gte?: InputMaybe<Scalars['String']>;
  principalUserReserve_lte?: InputMaybe<Scalars['String']>;
  principalUserReserve_in?: InputMaybe<Array<Scalars['String']>>;
  principalUserReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  principalUserReserve_contains?: InputMaybe<Scalars['String']>;
  principalUserReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_contains?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_starts_with?: InputMaybe<Scalars['String']>;
  principalUserReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_ends_with?: InputMaybe<Scalars['String']>;
  principalUserReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  principalUserReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  principalUserReserve_?: InputMaybe<UserReserve_filter>;
  principalAmount?: InputMaybe<Scalars['BigInt']>;
  principalAmount_not?: InputMaybe<Scalars['BigInt']>;
  principalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  principalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  principalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  principalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  principalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidator?: InputMaybe<Scalars['Bytes']>;
  liquidator_not?: InputMaybe<Scalars['Bytes']>;
  liquidator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  collateralAssetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  collateralAssetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collateralAssetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  borrowAssetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  borrowAssetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  borrowAssetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidationCall_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'collateralReserve'
  | 'collateralUserReserve'
  | 'collateralAmount'
  | 'principalReserve'
  | 'principalUserReserve'
  | 'principalAmount'
  | 'liquidator'
  | 'timestamp'
  | 'collateralAssetPriceUSD'
  | 'borrowAssetPriceUSD';

export type MapAssetPool = {
  /**
   * address of a /s /v token
   *
   */
  id: Scalars['ID'];
  pool: Scalars['String'];
  underlyingAsset: Scalars['Bytes'];
};

export type MapAssetPool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingAsset?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAsset_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MapAssetPool_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAsset';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['ID'];
  protocol: Protocol;
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPoolCollateralManager?: Maybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl?: Maybe<Scalars['Bytes']>;
  lendingPoolImpl?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  configurationAdmin?: Maybe<Scalars['Bytes']>;
  ethereumAddress?: Maybe<Scalars['Bytes']>;
  emergencyAdmin?: Maybe<Scalars['Bytes']>;
  history: Array<PoolConfigurationHistoryItem>;
  lastUpdateTimestamp: Scalars['Int'];
  reserves: Array<Reserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  active: Scalars['Boolean'];
  paused: Scalars['Boolean'];
};


export type PoolhistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConfigurationHistoryItem_filter>;
};


export type PoolreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reserve_filter>;
};


export type PooldepositHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type PoolredeemUnderlyingHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
};


export type PoolborrowHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type PoolswapHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type PoolusageAsCollateralHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
};


export type PoolrebalanceStableBorrowRateHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
};


export type PoolrepayHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type PoolflashLoanHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
};


export type PoolliquidationCallHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
};

export type PoolConfigurationHistoryItem = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  active?: Maybe<Scalars['Boolean']>;
  pool: Pool;
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPoolCollateralManager?: Maybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl?: Maybe<Scalars['Bytes']>;
  lendingPoolImpl?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  configurationAdmin?: Maybe<Scalars['Bytes']>;
  timestamp: Scalars['Int'];
};

export type PoolConfigurationHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  lendingPool?: InputMaybe<Scalars['Bytes']>;
  lendingPool_not?: InputMaybe<Scalars['Bytes']>;
  lendingPool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPool_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPool_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolCollateralManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolCollateralManager_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfiguratorImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfiguratorImpl_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolImpl_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_not?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_contains?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_not?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  configurationAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  configurationAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PoolConfigurationHistoryItem_orderBy =
  | 'id'
  | 'active'
  | 'pool'
  | 'lendingPool'
  | 'lendingPoolCollateralManager'
  | 'lendingPoolConfiguratorImpl'
  | 'lendingPoolImpl'
  | 'lendingPoolConfigurator'
  | 'proxyPriceProvider'
  | 'lendingRateOracle'
  | 'configurationAdmin'
  | 'timestamp';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Protocol_filter>;
  lendingPool?: InputMaybe<Scalars['Bytes']>;
  lendingPool_not?: InputMaybe<Scalars['Bytes']>;
  lendingPool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPool_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPool_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolCollateralManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolCollateralManager_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolCollateralManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfiguratorImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfiguratorImpl_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfiguratorImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolImpl_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_contains?: InputMaybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_not?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_contains?: InputMaybe<Scalars['Bytes']>;
  lendingRateOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_not?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  configurationAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  configurationAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  configurationAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  ethereumAddress?: InputMaybe<Scalars['Bytes']>;
  ethereumAddress_not?: InputMaybe<Scalars['Bytes']>;
  ethereumAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ethereumAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ethereumAddress_contains?: InputMaybe<Scalars['Bytes']>;
  ethereumAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  emergencyAdmin?: InputMaybe<Scalars['Bytes']>;
  emergencyAdmin_not?: InputMaybe<Scalars['Bytes']>;
  emergencyAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  emergencyAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  emergencyAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  emergencyAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  history_?: InputMaybe<PoolConfigurationHistoryItem_filter>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reserves_?: InputMaybe<Reserve_filter>;
  depositHistory_?: InputMaybe<Deposit_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<Swap_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  flashLoanHistory_?: InputMaybe<FlashLoan_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused?: InputMaybe<Scalars['Boolean']>;
  paused_not?: InputMaybe<Scalars['Boolean']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Pool_orderBy =
  | 'id'
  | 'protocol'
  | 'lendingPool'
  | 'lendingPoolCollateralManager'
  | 'lendingPoolConfiguratorImpl'
  | 'lendingPoolImpl'
  | 'lendingPoolConfigurator'
  | 'proxyPriceProvider'
  | 'lendingRateOracle'
  | 'configurationAdmin'
  | 'ethereumAddress'
  | 'emergencyAdmin'
  | 'history'
  | 'lastUpdateTimestamp'
  | 'reserves'
  | 'depositHistory'
  | 'redeemUnderlyingHistory'
  | 'borrowHistory'
  | 'swapHistory'
  | 'usageAsCollateralHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'flashLoanHistory'
  | 'liquidationCallHistory'
  | 'active'
  | 'paused';

export type PriceHistoryItem = {
  id: Scalars['ID'];
  asset: PriceOracleAsset;
  price: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type PriceHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<PriceOracleAsset_filter>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PriceHistoryItem_orderBy =
  | 'id'
  | 'asset'
  | 'price'
  | 'timestamp';

export type PriceOracle = {
  id: Scalars['ID'];
  proxyPriceProvider: Scalars['Bytes'];
  usdPriceEth: Scalars['BigInt'];
  usdPriceEthMainSource: Scalars['Bytes'];
  usdPriceEthFallbackRequired: Scalars['Boolean'];
  usdDependentAssets: Array<PriceOracleAsset>;
  fallbackPriceOracle: Scalars['Bytes'];
  tokens: Array<PriceOracleAsset>;
  usdPriceEthHistory: Array<UsdEthPriceHistoryItem>;
  tokensWithFallback: Array<PriceOracleAsset>;
  lastUpdateTimestamp: Scalars['Int'];
  version: Scalars['Int'];
  baseCurrency?: Maybe<Scalars['Bytes']>;
  baseCurrencyUnit?: Maybe<Scalars['BigInt']>;
};


export type PriceOracleusdDependentAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
};


export type PriceOracletokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
};


export type PriceOracleusdPriceEthHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsdEthPriceHistoryItem_filter>;
};


export type PriceOracletokensWithFallbackArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
};

export type PriceOracleAsset = {
  id: Scalars['ID'];
  oracle: PriceOracle;
  priceInEth: Scalars['BigInt'];
  priceSource: Scalars['Bytes'];
  isFallbackRequired: Scalars['Boolean'];
  type: PriceOracleAssetType;
  platform: PriceOracleAssetPlatform;
  dependentAssets: Array<PriceOracleAsset>;
  lastUpdateTimestamp: Scalars['Int'];
  priceHistory: Array<PriceHistoryItem>;
  fromChainlinkSourcesRegistry: Scalars['Boolean'];
};


export type PriceOracleAssetdependentAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
};


export type PriceOracleAssetpriceHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceHistoryItem_filter>;
};

export type PriceOracleAssetPlatform =
  | 'Simple'
  | 'Uniswap';

export type PriceOracleAssetType =
  | 'Simple'
  | 'Composite';

export type PriceOracleAsset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oracle?: InputMaybe<Scalars['String']>;
  oracle_not?: InputMaybe<Scalars['String']>;
  oracle_gt?: InputMaybe<Scalars['String']>;
  oracle_lt?: InputMaybe<Scalars['String']>;
  oracle_gte?: InputMaybe<Scalars['String']>;
  oracle_lte?: InputMaybe<Scalars['String']>;
  oracle_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_contains?: InputMaybe<Scalars['String']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_contains?: InputMaybe<Scalars['String']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_starts_with?: InputMaybe<Scalars['String']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_ends_with?: InputMaybe<Scalars['String']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_?: InputMaybe<PriceOracle_filter>;
  priceInEth?: InputMaybe<Scalars['BigInt']>;
  priceInEth_not?: InputMaybe<Scalars['BigInt']>;
  priceInEth_gt?: InputMaybe<Scalars['BigInt']>;
  priceInEth_lt?: InputMaybe<Scalars['BigInt']>;
  priceInEth_gte?: InputMaybe<Scalars['BigInt']>;
  priceInEth_lte?: InputMaybe<Scalars['BigInt']>;
  priceInEth_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceInEth_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceSource?: InputMaybe<Scalars['Bytes']>;
  priceSource_not?: InputMaybe<Scalars['Bytes']>;
  priceSource_in?: InputMaybe<Array<Scalars['Bytes']>>;
  priceSource_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  priceSource_contains?: InputMaybe<Scalars['Bytes']>;
  priceSource_not_contains?: InputMaybe<Scalars['Bytes']>;
  isFallbackRequired?: InputMaybe<Scalars['Boolean']>;
  isFallbackRequired_not?: InputMaybe<Scalars['Boolean']>;
  isFallbackRequired_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFallbackRequired_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  type?: InputMaybe<PriceOracleAssetType>;
  type_not?: InputMaybe<PriceOracleAssetType>;
  type_in?: InputMaybe<Array<PriceOracleAssetType>>;
  type_not_in?: InputMaybe<Array<PriceOracleAssetType>>;
  platform?: InputMaybe<PriceOracleAssetPlatform>;
  platform_not?: InputMaybe<PriceOracleAssetPlatform>;
  platform_in?: InputMaybe<Array<PriceOracleAssetPlatform>>;
  platform_not_in?: InputMaybe<Array<PriceOracleAssetPlatform>>;
  dependentAssets?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_not?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_contains?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  dependentAssets_?: InputMaybe<PriceOracleAsset_filter>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  priceHistory_?: InputMaybe<PriceHistoryItem_filter>;
  fromChainlinkSourcesRegistry?: InputMaybe<Scalars['Boolean']>;
  fromChainlinkSourcesRegistry_not?: InputMaybe<Scalars['Boolean']>;
  fromChainlinkSourcesRegistry_in?: InputMaybe<Array<Scalars['Boolean']>>;
  fromChainlinkSourcesRegistry_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PriceOracleAsset_orderBy =
  | 'id'
  | 'oracle'
  | 'priceInEth'
  | 'priceSource'
  | 'isFallbackRequired'
  | 'type'
  | 'platform'
  | 'dependentAssets'
  | 'lastUpdateTimestamp'
  | 'priceHistory'
  | 'fromChainlinkSourcesRegistry';

export type PriceOracle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proxyPriceProvider?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars['Bytes']>;
  usdPriceEth?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_not?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_gt?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_lt?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_gte?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_lte?: InputMaybe<Scalars['BigInt']>;
  usdPriceEth_in?: InputMaybe<Array<Scalars['BigInt']>>;
  usdPriceEth_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  usdPriceEthMainSource?: InputMaybe<Scalars['Bytes']>;
  usdPriceEthMainSource_not?: InputMaybe<Scalars['Bytes']>;
  usdPriceEthMainSource_in?: InputMaybe<Array<Scalars['Bytes']>>;
  usdPriceEthMainSource_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  usdPriceEthMainSource_contains?: InputMaybe<Scalars['Bytes']>;
  usdPriceEthMainSource_not_contains?: InputMaybe<Scalars['Bytes']>;
  usdPriceEthFallbackRequired?: InputMaybe<Scalars['Boolean']>;
  usdPriceEthFallbackRequired_not?: InputMaybe<Scalars['Boolean']>;
  usdPriceEthFallbackRequired_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usdPriceEthFallbackRequired_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usdDependentAssets?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_not?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_contains?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  usdDependentAssets_?: InputMaybe<PriceOracleAsset_filter>;
  fallbackPriceOracle?: InputMaybe<Scalars['Bytes']>;
  fallbackPriceOracle_not?: InputMaybe<Scalars['Bytes']>;
  fallbackPriceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fallbackPriceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fallbackPriceOracle_contains?: InputMaybe<Scalars['Bytes']>;
  fallbackPriceOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokens_?: InputMaybe<PriceOracleAsset_filter>;
  usdPriceEthHistory_?: InputMaybe<UsdEthPriceHistoryItem_filter>;
  tokensWithFallback?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_not?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_contains?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokensWithFallback_?: InputMaybe<PriceOracleAsset_filter>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
  baseCurrency?: InputMaybe<Scalars['Bytes']>;
  baseCurrency_not?: InputMaybe<Scalars['Bytes']>;
  baseCurrency_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseCurrency_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseCurrency_contains?: InputMaybe<Scalars['Bytes']>;
  baseCurrency_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseCurrencyUnit?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_not?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_gt?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_lt?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_gte?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_lte?: InputMaybe<Scalars['BigInt']>;
  baseCurrencyUnit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseCurrencyUnit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PriceOracle_orderBy =
  | 'id'
  | 'proxyPriceProvider'
  | 'usdPriceEth'
  | 'usdPriceEthMainSource'
  | 'usdPriceEthFallbackRequired'
  | 'usdDependentAssets'
  | 'fallbackPriceOracle'
  | 'tokens'
  | 'usdPriceEthHistory'
  | 'tokensWithFallback'
  | 'lastUpdateTimestamp'
  | 'version'
  | 'baseCurrency'
  | 'baseCurrencyUnit';

export type Protocol = {
  id: Scalars['ID'];
  pools: Array<Pool>;
};


export type ProtocolpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pools_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Protocol_orderBy =
  | 'id'
  | 'pools';

export type Query = {
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  contractToPoolMapping?: Maybe<ContractToPoolMapping>;
  contractToPoolMappings: Array<ContractToPoolMapping>;
  poolConfigurationHistoryItem?: Maybe<PoolConfigurationHistoryItem>;
  poolConfigurationHistoryItems: Array<PoolConfigurationHistoryItem>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  chainlinkENS?: Maybe<ChainlinkENS>;
  chainlinkENSs: Array<ChainlinkENS>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracles: Array<PriceOracle>;
  stoken?: Maybe<SToken>;
  stokens: Array<SToken>;
  vtoken?: Maybe<VToken>;
  vtokens: Array<VToken>;
  atoken?: Maybe<AToken>;
  atokens: Array<AToken>;
  variableDebtToken?: Maybe<VariableDebtToken>;
  variableDebtTokens: Array<VariableDebtToken>;
  stableDebtToken?: Maybe<StableDebtToken>;
  stableDebtTokens: Array<StableDebtToken>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  incentivesController?: Maybe<IncentivesController>;
  incentivesControllers: Array<IncentivesController>;
  incentivizedAction?: Maybe<IncentivizedAction>;
  incentivizedActions: Array<IncentivizedAction>;
  claimIncentiveCall?: Maybe<ClaimIncentiveCall>;
  claimIncentiveCalls: Array<ClaimIncentiveCall>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  reserve?: Maybe<Reserve>;
  reserves: Array<Reserve>;
  wethreserve?: Maybe<WETHReserve>;
  wethreserves: Array<WETHReserve>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  vtokenBalanceHistoryItem?: Maybe<VTokenBalanceHistoryItem>;
  vtokenBalanceHistoryItems: Array<VTokenBalanceHistoryItem>;
  stokenBalanceHistoryItem?: Maybe<STokenBalanceHistoryItem>;
  stokenBalanceHistoryItems: Array<STokenBalanceHistoryItem>;
  stableTokenDelegatedAllowance?: Maybe<StableTokenDelegatedAllowance>;
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowance?: Maybe<VariableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  user?: Maybe<User>;
  users: Array<User>;
  swapHistory?: Maybe<SwapHistory>;
  swapHistories: Array<SwapHistory>;
  userTransaction?: Maybe<UserTransaction>;
  userTransactions: Array<UserTransaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractToPoolMappingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractToPoolMappingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractToPoolMapping_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContractToPoolMapping_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConfigurationHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConfigurationHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusdEthPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusdEthPriceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsdEthPriceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerychainlinkENSArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerychainlinkENSsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChainlinkENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ChainlinkENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerychainlinkAggregatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerychainlinkAggregatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChainlinkAggregator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ChainlinkAggregator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceOracleAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceOracleAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvtokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvtokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryatokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryatokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvariableDebtTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvariableDebtTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VariableDebtToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VariableDebtToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystableDebtTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystableDebtTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StableDebtToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StableDebtToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreferrerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreferrersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Referrer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Referrer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemUnderlyingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemUnderlyingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageAsCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageAsCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebalanceStableBorrowRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebalanceStableBorrowRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveConfigurationHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveConfigurationHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveParamsHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveParamsHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveParamsHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryincentivesControllerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryincentivesControllersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivesController_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivesController_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryincentivizedActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryincentivizedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivizedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivizedAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimIncentiveCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimIncentiveCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimIncentiveCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimIncentiveCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymapAssetPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymapAssetPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MapAssetPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MapAssetPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywethreserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywethreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WETHReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WETHReserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryatokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryatokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ATokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvtokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvtokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VTokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<STokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystableTokenDelegatedAllowanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StableTokenDelegatedAllowance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvariableTokenDelegatedAllowanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvariableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VariableTokenDelegatedAllowance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserReserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserReservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RebalanceStableBorrowRate = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  borrowRateFrom: Scalars['BigInt'];
  borrowRateTo: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type RebalanceStableBorrowRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  borrowRateFrom?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_not?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_gt?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_lt?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_gte?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_lte?: InputMaybe<Scalars['BigInt']>;
  borrowRateFrom_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRateFrom_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRateTo?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_not?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_gt?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_lt?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_gte?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_lte?: InputMaybe<Scalars['BigInt']>;
  borrowRateTo_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowRateTo_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RebalanceStableBorrowRate_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'reserve'
  | 'userReserve'
  | 'borrowRateFrom'
  | 'borrowRateTo'
  | 'timestamp';

export type RedeemUnderlying = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  to: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type RedeemUnderlying_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RedeemUnderlying_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'to'
  | 'reserve'
  | 'userReserve'
  | 'amount'
  | 'timestamp'
  | 'assetPriceUSD';

export type Referrer = {
  id: Scalars['ID'];
  deposits: Array<Deposit>;
  borrows: Array<Borrow>;
};


export type ReferrerdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type ReferrerborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};

export type Referrer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  deposits_?: InputMaybe<Deposit_filter>;
  borrows_?: InputMaybe<Borrow_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Referrer_orderBy =
  | 'id'
  | 'deposits'
  | 'borrows';

export type Repay = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  repayer: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type Repay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  repayer?: InputMaybe<Scalars['String']>;
  repayer_not?: InputMaybe<Scalars['String']>;
  repayer_gt?: InputMaybe<Scalars['String']>;
  repayer_lt?: InputMaybe<Scalars['String']>;
  repayer_gte?: InputMaybe<Scalars['String']>;
  repayer_lte?: InputMaybe<Scalars['String']>;
  repayer_in?: InputMaybe<Array<Scalars['String']>>;
  repayer_not_in?: InputMaybe<Array<Scalars['String']>>;
  repayer_contains?: InputMaybe<Scalars['String']>;
  repayer_contains_nocase?: InputMaybe<Scalars['String']>;
  repayer_not_contains?: InputMaybe<Scalars['String']>;
  repayer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  repayer_starts_with?: InputMaybe<Scalars['String']>;
  repayer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  repayer_not_starts_with?: InputMaybe<Scalars['String']>;
  repayer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  repayer_ends_with?: InputMaybe<Scalars['String']>;
  repayer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  repayer_not_ends_with?: InputMaybe<Scalars['String']>;
  repayer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  repayer_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Repay_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'repayer'
  | 'reserve'
  | 'userReserve'
  | 'amount'
  | 'timestamp'
  | 'assetPriceUSD';

export type Reserve = {
  /**
   * Reserve address
   *
   */
  id: Scalars['ID'];
  underlyingAsset: Scalars['Bytes'];
  pool: Pool;
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['Int'];
  usageAsCollateralEnabled: Scalars['Boolean'];
  borrowingEnabled: Scalars['Boolean'];
  stableBorrowRateEnabled: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isFrozen: Scalars['Boolean'];
  price: PriceOracleAsset;
  reserveInterestRateStrategy: Scalars['Bytes'];
  optimalUtilisationRate: Scalars['BigInt'];
  variableRateSlope1: Scalars['BigInt'];
  variableRateSlope2: Scalars['BigInt'];
  stableRateSlope1: Scalars['BigInt'];
  stableRateSlope2: Scalars['BigInt'];
  baseVariableBorrowRate: Scalars['BigInt'];
  baseLTVasCollateral: Scalars['BigInt'];
  reserveLiquidationThreshold: Scalars['BigInt'];
  reserveLiquidationBonus: Scalars['BigInt'];
  utilizationRate: Scalars['BigDecimal'];
  totalLiquidity: Scalars['BigInt'];
  totalATokenSupply: Scalars['BigInt'];
  totalLiquidityAsCollateral: Scalars['BigInt'];
  availableLiquidity: Scalars['BigInt'];
  totalPrincipalStableDebt: Scalars['BigInt'];
  totalScaledVariableDebt: Scalars['BigInt'];
  totalCurrentVariableDebt: Scalars['BigInt'];
  totalDeposits: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  averageStableRate: Scalars['BigInt'];
  variableBorrowRate: Scalars['BigInt'];
  stableBorrowRate: Scalars['BigInt'];
  liquidityIndex: Scalars['BigInt'];
  variableBorrowIndex: Scalars['BigInt'];
  aToken: AToken;
  vToken: VToken;
  sToken: SToken;
  reserveFactor: Scalars['BigInt'];
  lastUpdateTimestamp: Scalars['Int'];
  stableDebtLastUpdateTimestamp: Scalars['Int'];
  aEmissionPerSecond: Scalars['BigInt'];
  vEmissionPerSecond: Scalars['BigInt'];
  sEmissionPerSecond: Scalars['BigInt'];
  aTokenIncentivesIndex: Scalars['BigInt'];
  vTokenIncentivesIndex: Scalars['BigInt'];
  sTokenIncentivesIndex: Scalars['BigInt'];
  aIncentivesLastUpdateTimestamp: Scalars['Int'];
  vIncentivesLastUpdateTimestamp: Scalars['Int'];
  sIncentivesLastUpdateTimestamp: Scalars['Int'];
  lifetimeLiquidity: Scalars['BigInt'];
  lifetimePrincipalStableDebt: Scalars['BigInt'];
  lifetimeScaledVariableDebt: Scalars['BigInt'];
  lifetimeCurrentVariableDebt: Scalars['BigInt'];
  lifetimeRepayments: Scalars['BigInt'];
  lifetimeWithdrawals: Scalars['BigInt'];
  lifetimeBorrows: Scalars['BigInt'];
  lifetimeLiquidated: Scalars['BigInt'];
  lifetimeFlashLoans: Scalars['BigInt'];
  lifetimeFlashLoanPremium: Scalars['BigInt'];
  lifetimeDepositorsInterestEarned: Scalars['BigInt'];
  lifetimeReserveFactorAccrued: Scalars['BigInt'];
  userReserves: Array<UserReserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  paramsHistory: Array<ReserveParamsHistoryItem>;
  configurationHistory: Array<ReserveConfigurationHistoryItem>;
  deposits: Array<Deposit>;
};


export type ReserveuserReservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
};


export type ReservedepositHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type ReserveredeemUnderlyingHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
};


export type ReserveborrowHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type ReserveusageAsCollateralHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
};


export type ReserveswapHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type ReserverebalanceStableBorrowRateHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
};


export type ReserverepayHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type ReserveflashLoanHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
};


export type ReserveliquidationCallHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
};


export type ReserveparamsHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveParamsHistoryItem_filter>;
};


export type ReserveconfigurationHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveConfigurationHistoryItem_filter>;
};


export type ReservedepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};

export type ReserveConfigurationHistoryItem = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  reserve: Reserve;
  usageAsCollateralEnabled: Scalars['Boolean'];
  borrowingEnabled: Scalars['Boolean'];
  stableBorrowRateEnabled: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isFrozen: Scalars['Boolean'];
  reserveInterestRateStrategy: Scalars['Bytes'];
  baseLTVasCollateral: Scalars['BigInt'];
  reserveLiquidationThreshold: Scalars['BigInt'];
  reserveLiquidationBonus: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type ReserveConfigurationHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  usageAsCollateralEnabled?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_not?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowingEnabled?: InputMaybe<Scalars['Boolean']>;
  borrowingEnabled_not?: InputMaybe<Scalars['Boolean']>;
  borrowingEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowingEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled?: InputMaybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_not?: InputMaybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFrozen?: InputMaybe<Scalars['Boolean']>;
  isFrozen_not?: InputMaybe<Scalars['Boolean']>;
  isFrozen_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFrozen_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  reserveInterestRateStrategy?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_contains?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseLTVasCollateral?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_not?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_gt?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_lt?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_gte?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_lte?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseLTVasCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_not?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_not?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ReserveConfigurationHistoryItem_orderBy =
  | 'id'
  | 'reserve'
  | 'usageAsCollateralEnabled'
  | 'borrowingEnabled'
  | 'stableBorrowRateEnabled'
  | 'isActive'
  | 'isFrozen'
  | 'reserveInterestRateStrategy'
  | 'baseLTVasCollateral'
  | 'reserveLiquidationThreshold'
  | 'reserveLiquidationBonus'
  | 'timestamp';

export type ReserveParamsHistoryItem = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  reserve: Reserve;
  variableBorrowRate: Scalars['BigInt'];
  variableBorrowIndex: Scalars['BigInt'];
  utilizationRate: Scalars['BigDecimal'];
  stableBorrowRate: Scalars['BigInt'];
  averageStableBorrowRate: Scalars['BigInt'];
  liquidityIndex: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  totalLiquidity: Scalars['BigInt'];
  totalATokenSupply: Scalars['BigInt'];
  totalLiquidityAsCollateral: Scalars['BigInt'];
  availableLiquidity: Scalars['BigInt'];
  priceInEth: Scalars['BigInt'];
  priceInUsd: Scalars['BigDecimal'];
  timestamp: Scalars['Int'];
  totalScaledVariableDebt: Scalars['BigInt'];
  totalCurrentVariableDebt: Scalars['BigInt'];
  totalPrincipalStableDebt: Scalars['BigInt'];
  lifetimePrincipalStableDebt: Scalars['BigInt'];
  lifetimeScaledVariableDebt: Scalars['BigInt'];
  lifetimeCurrentVariableDebt: Scalars['BigInt'];
  lifetimeLiquidity: Scalars['BigInt'];
  lifetimeRepayments: Scalars['BigInt'];
  lifetimeWithdrawals: Scalars['BigInt'];
  lifetimeBorrows: Scalars['BigInt'];
  lifetimeLiquidated: Scalars['BigInt'];
  lifetimeFlashLoans: Scalars['BigInt'];
  lifetimeFlashLoanPremium: Scalars['BigInt'];
  lifetimeReserveFactorAccrued: Scalars['BigInt'];
  lifetimeDepositorsInterestEarned: Scalars['BigInt'];
};

export type ReserveParamsHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  variableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilizationRate?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_not?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageStableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  averageStableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageStableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityIndex?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_not?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_not?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalATokenSupply?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalATokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableLiquidity?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceInEth?: InputMaybe<Scalars['BigInt']>;
  priceInEth_not?: InputMaybe<Scalars['BigInt']>;
  priceInEth_gt?: InputMaybe<Scalars['BigInt']>;
  priceInEth_lt?: InputMaybe<Scalars['BigInt']>;
  priceInEth_gte?: InputMaybe<Scalars['BigInt']>;
  priceInEth_lte?: InputMaybe<Scalars['BigInt']>;
  priceInEth_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceInEth_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceInUsd?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_not?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceInUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceInUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalScaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalScaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPrincipalStableDebt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPrincipalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePrincipalStableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePrincipalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeScaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeScaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeCurrentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidity?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRepayments?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRepayments_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeWithdrawals?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeWithdrawals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeBorrows?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeBorrows_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidated?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoans?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeDepositorsInterestEarned?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeDepositorsInterestEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ReserveParamsHistoryItem_orderBy =
  | 'id'
  | 'reserve'
  | 'variableBorrowRate'
  | 'variableBorrowIndex'
  | 'utilizationRate'
  | 'stableBorrowRate'
  | 'averageStableBorrowRate'
  | 'liquidityIndex'
  | 'liquidityRate'
  | 'totalLiquidity'
  | 'totalATokenSupply'
  | 'totalLiquidityAsCollateral'
  | 'availableLiquidity'
  | 'priceInEth'
  | 'priceInUsd'
  | 'timestamp'
  | 'totalScaledVariableDebt'
  | 'totalCurrentVariableDebt'
  | 'totalPrincipalStableDebt'
  | 'lifetimePrincipalStableDebt'
  | 'lifetimeScaledVariableDebt'
  | 'lifetimeCurrentVariableDebt'
  | 'lifetimeLiquidity'
  | 'lifetimeRepayments'
  | 'lifetimeWithdrawals'
  | 'lifetimeBorrows'
  | 'lifetimeLiquidated'
  | 'lifetimeFlashLoans'
  | 'lifetimeFlashLoanPremium'
  | 'lifetimeReserveFactorAccrued'
  | 'lifetimeDepositorsInterestEarned';

export type Reserve_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  underlyingAsset?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAsset_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  usageAsCollateralEnabled?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_not?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowingEnabled?: InputMaybe<Scalars['Boolean']>;
  borrowingEnabled_not?: InputMaybe<Scalars['Boolean']>;
  borrowingEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowingEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled?: InputMaybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_not?: InputMaybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFrozen?: InputMaybe<Scalars['Boolean']>;
  isFrozen_not?: InputMaybe<Scalars['Boolean']>;
  isFrozen_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFrozen_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_?: InputMaybe<PriceOracleAsset_filter>;
  reserveInterestRateStrategy?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_contains?: InputMaybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not_contains?: InputMaybe<Scalars['Bytes']>;
  optimalUtilisationRate?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_not?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_gt?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_lt?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_gte?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_lte?: InputMaybe<Scalars['BigInt']>;
  optimalUtilisationRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  optimalUtilisationRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableRateSlope1?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_not?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_gt?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_lt?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_gte?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_lte?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableRateSlope1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableRateSlope2?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_not?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_gt?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_lt?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_gte?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_lte?: InputMaybe<Scalars['BigInt']>;
  variableRateSlope2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableRateSlope2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableRateSlope1?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_not?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_gt?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_lt?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_gte?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_lte?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableRateSlope1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableRateSlope2?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_not?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_gt?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_lt?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_gte?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_lte?: InputMaybe<Scalars['BigInt']>;
  stableRateSlope2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableRateSlope2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseVariableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  baseVariableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseVariableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseLTVasCollateral?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_not?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_gt?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_lt?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_gte?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_lte?: InputMaybe<Scalars['BigInt']>;
  baseLTVasCollateral_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseLTVasCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_not?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_not?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lt?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lte?: InputMaybe<Scalars['BigInt']>;
  reserveLiquidationBonus_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilizationRate?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_not?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalATokenSupply?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalATokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalATokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableLiquidity?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  availableLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPrincipalStableDebt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalPrincipalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPrincipalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalScaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalScaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalScaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposits?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_not?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageStableRate?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_not?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_gt?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_lt?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_gte?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_lte?: InputMaybe<Scalars['BigInt']>;
  averageStableRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageStableRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityIndex?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_not?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aToken?: InputMaybe<Scalars['String']>;
  aToken_not?: InputMaybe<Scalars['String']>;
  aToken_gt?: InputMaybe<Scalars['String']>;
  aToken_lt?: InputMaybe<Scalars['String']>;
  aToken_gte?: InputMaybe<Scalars['String']>;
  aToken_lte?: InputMaybe<Scalars['String']>;
  aToken_in?: InputMaybe<Array<Scalars['String']>>;
  aToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  aToken_contains?: InputMaybe<Scalars['String']>;
  aToken_contains_nocase?: InputMaybe<Scalars['String']>;
  aToken_not_contains?: InputMaybe<Scalars['String']>;
  aToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  aToken_starts_with?: InputMaybe<Scalars['String']>;
  aToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aToken_not_starts_with?: InputMaybe<Scalars['String']>;
  aToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aToken_ends_with?: InputMaybe<Scalars['String']>;
  aToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aToken_not_ends_with?: InputMaybe<Scalars['String']>;
  aToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aToken_?: InputMaybe<AToken_filter>;
  vToken?: InputMaybe<Scalars['String']>;
  vToken_not?: InputMaybe<Scalars['String']>;
  vToken_gt?: InputMaybe<Scalars['String']>;
  vToken_lt?: InputMaybe<Scalars['String']>;
  vToken_gte?: InputMaybe<Scalars['String']>;
  vToken_lte?: InputMaybe<Scalars['String']>;
  vToken_in?: InputMaybe<Array<Scalars['String']>>;
  vToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  vToken_contains?: InputMaybe<Scalars['String']>;
  vToken_contains_nocase?: InputMaybe<Scalars['String']>;
  vToken_not_contains?: InputMaybe<Scalars['String']>;
  vToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vToken_starts_with?: InputMaybe<Scalars['String']>;
  vToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vToken_not_starts_with?: InputMaybe<Scalars['String']>;
  vToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vToken_ends_with?: InputMaybe<Scalars['String']>;
  vToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vToken_not_ends_with?: InputMaybe<Scalars['String']>;
  vToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vToken_?: InputMaybe<VToken_filter>;
  sToken?: InputMaybe<Scalars['String']>;
  sToken_not?: InputMaybe<Scalars['String']>;
  sToken_gt?: InputMaybe<Scalars['String']>;
  sToken_lt?: InputMaybe<Scalars['String']>;
  sToken_gte?: InputMaybe<Scalars['String']>;
  sToken_lte?: InputMaybe<Scalars['String']>;
  sToken_in?: InputMaybe<Array<Scalars['String']>>;
  sToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  sToken_contains?: InputMaybe<Scalars['String']>;
  sToken_contains_nocase?: InputMaybe<Scalars['String']>;
  sToken_not_contains?: InputMaybe<Scalars['String']>;
  sToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sToken_starts_with?: InputMaybe<Scalars['String']>;
  sToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sToken_not_starts_with?: InputMaybe<Scalars['String']>;
  sToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sToken_ends_with?: InputMaybe<Scalars['String']>;
  sToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sToken_not_ends_with?: InputMaybe<Scalars['String']>;
  sToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sToken_?: InputMaybe<SToken_filter>;
  reserveFactor?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_not?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_gt?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_lt?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_gte?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_lte?: InputMaybe<Scalars['BigInt']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stableDebtLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  stableDebtLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  stableDebtLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  aEmissionPerSecond?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_not?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
  aEmissionPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aEmissionPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vEmissionPerSecond?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_not?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
  vEmissionPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vEmissionPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sEmissionPerSecond?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_not?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
  sEmissionPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sEmissionPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aTokenIncentivesIndex?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_not?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_gt?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_lt?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_gte?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_lte?: InputMaybe<Scalars['BigInt']>;
  aTokenIncentivesIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vTokenIncentivesIndex?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_not?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_gt?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_lt?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_gte?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_lte?: InputMaybe<Scalars['BigInt']>;
  vTokenIncentivesIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sTokenIncentivesIndex?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_not?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_gt?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_lt?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_gte?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_lte?: InputMaybe<Scalars['BigInt']>;
  sTokenIncentivesIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  aIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  vIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  vIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  sIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lifetimeLiquidity?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePrincipalStableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePrincipalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePrincipalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeScaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeScaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeScaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeCurrentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeCurrentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRepayments?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRepayments_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRepayments_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeWithdrawals?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeWithdrawals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeWithdrawals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeBorrows?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeBorrows_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeBorrows_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidated?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeLiquidated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoans?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeDepositorsInterestEarned?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeDepositorsInterestEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeDepositorsInterestEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userReserves_?: InputMaybe<UserReserve_filter>;
  depositHistory_?: InputMaybe<Deposit_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  swapHistory_?: InputMaybe<Swap_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  flashLoanHistory_?: InputMaybe<FlashLoan_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  paramsHistory_?: InputMaybe<ReserveParamsHistoryItem_filter>;
  configurationHistory_?: InputMaybe<ReserveConfigurationHistoryItem_filter>;
  deposits_?: InputMaybe<Deposit_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Reserve_orderBy =
  | 'id'
  | 'underlyingAsset'
  | 'pool'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'usageAsCollateralEnabled'
  | 'borrowingEnabled'
  | 'stableBorrowRateEnabled'
  | 'isActive'
  | 'isFrozen'
  | 'price'
  | 'reserveInterestRateStrategy'
  | 'optimalUtilisationRate'
  | 'variableRateSlope1'
  | 'variableRateSlope2'
  | 'stableRateSlope1'
  | 'stableRateSlope2'
  | 'baseVariableBorrowRate'
  | 'baseLTVasCollateral'
  | 'reserveLiquidationThreshold'
  | 'reserveLiquidationBonus'
  | 'utilizationRate'
  | 'totalLiquidity'
  | 'totalATokenSupply'
  | 'totalLiquidityAsCollateral'
  | 'availableLiquidity'
  | 'totalPrincipalStableDebt'
  | 'totalScaledVariableDebt'
  | 'totalCurrentVariableDebt'
  | 'totalDeposits'
  | 'liquidityRate'
  | 'averageStableRate'
  | 'variableBorrowRate'
  | 'stableBorrowRate'
  | 'liquidityIndex'
  | 'variableBorrowIndex'
  | 'aToken'
  | 'vToken'
  | 'sToken'
  | 'reserveFactor'
  | 'lastUpdateTimestamp'
  | 'stableDebtLastUpdateTimestamp'
  | 'aEmissionPerSecond'
  | 'vEmissionPerSecond'
  | 'sEmissionPerSecond'
  | 'aTokenIncentivesIndex'
  | 'vTokenIncentivesIndex'
  | 'sTokenIncentivesIndex'
  | 'aIncentivesLastUpdateTimestamp'
  | 'vIncentivesLastUpdateTimestamp'
  | 'sIncentivesLastUpdateTimestamp'
  | 'lifetimeLiquidity'
  | 'lifetimePrincipalStableDebt'
  | 'lifetimeScaledVariableDebt'
  | 'lifetimeCurrentVariableDebt'
  | 'lifetimeRepayments'
  | 'lifetimeWithdrawals'
  | 'lifetimeBorrows'
  | 'lifetimeLiquidated'
  | 'lifetimeFlashLoans'
  | 'lifetimeFlashLoanPremium'
  | 'lifetimeDepositorsInterestEarned'
  | 'lifetimeReserveFactorAccrued'
  | 'userReserves'
  | 'depositHistory'
  | 'redeemUnderlyingHistory'
  | 'borrowHistory'
  | 'usageAsCollateralHistory'
  | 'swapHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'flashLoanHistory'
  | 'liquidationCallHistory'
  | 'paramsHistory'
  | 'configurationHistory'
  | 'deposits';

export type SToken = {
  /**
   * SToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
  tokenContractImpl: Scalars['Bytes'];
};

export type STokenBalanceHistoryItem = {
  /**
   * userReserve + txHash
   *
   */
  id: Scalars['ID'];
  userReserve: UserReserve;
  principalStableDebt: Scalars['BigInt'];
  currentStableDebt: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  avgStableBorrowRate: Scalars['BigInt'];
};

export type STokenBalanceHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  principalStableDebt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentStableDebt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  avgStableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  avgStableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avgStableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type STokenBalanceHistoryItem_orderBy =
  | 'id'
  | 'userReserve'
  | 'principalStableDebt'
  | 'currentStableDebt'
  | 'timestamp'
  | 'avgStableBorrowRate';

export type SToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  underlyingAssetAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenContractImpl?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_contains?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SToken_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals'
  | 'tokenContractImpl';

export type StableDebtToken = {
  /**
   * StableDebtToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
};

export type StableDebtToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  underlyingAssetAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type StableDebtToken_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals';

export type StableTokenDelegatedAllowance = {
  /**
   * stable + fromuser address + touser address+ reserve address
   *
   */
  id: Scalars['ID'];
  fromUser: User;
  toUser: User;
  amountAllowed: Scalars['BigInt'];
  userReserve: UserReserve;
};

export type StableTokenDelegatedAllowance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromUser?: InputMaybe<Scalars['String']>;
  fromUser_not?: InputMaybe<Scalars['String']>;
  fromUser_gt?: InputMaybe<Scalars['String']>;
  fromUser_lt?: InputMaybe<Scalars['String']>;
  fromUser_gte?: InputMaybe<Scalars['String']>;
  fromUser_lte?: InputMaybe<Scalars['String']>;
  fromUser_in?: InputMaybe<Array<Scalars['String']>>;
  fromUser_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromUser_contains?: InputMaybe<Scalars['String']>;
  fromUser_contains_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_contains?: InputMaybe<Scalars['String']>;
  fromUser_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromUser_starts_with?: InputMaybe<Scalars['String']>;
  fromUser_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_starts_with?: InputMaybe<Scalars['String']>;
  fromUser_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_ends_with?: InputMaybe<Scalars['String']>;
  fromUser_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_ends_with?: InputMaybe<Scalars['String']>;
  fromUser_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_?: InputMaybe<User_filter>;
  toUser?: InputMaybe<Scalars['String']>;
  toUser_not?: InputMaybe<Scalars['String']>;
  toUser_gt?: InputMaybe<Scalars['String']>;
  toUser_lt?: InputMaybe<Scalars['String']>;
  toUser_gte?: InputMaybe<Scalars['String']>;
  toUser_lte?: InputMaybe<Scalars['String']>;
  toUser_in?: InputMaybe<Array<Scalars['String']>>;
  toUser_not_in?: InputMaybe<Array<Scalars['String']>>;
  toUser_contains?: InputMaybe<Scalars['String']>;
  toUser_contains_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_contains?: InputMaybe<Scalars['String']>;
  toUser_not_contains_nocase?: InputMaybe<Scalars['String']>;
  toUser_starts_with?: InputMaybe<Scalars['String']>;
  toUser_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_starts_with?: InputMaybe<Scalars['String']>;
  toUser_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_ends_with?: InputMaybe<Scalars['String']>;
  toUser_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_ends_with?: InputMaybe<Scalars['String']>;
  toUser_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_?: InputMaybe<User_filter>;
  amountAllowed?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_not?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_gt?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_lt?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_gte?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_lte?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountAllowed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type StableTokenDelegatedAllowance_orderBy =
  | 'id'
  | 'fromUser'
  | 'toUser'
  | 'amountAllowed'
  | 'userReserve';

export type Subscription = {
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  contractToPoolMapping?: Maybe<ContractToPoolMapping>;
  contractToPoolMappings: Array<ContractToPoolMapping>;
  poolConfigurationHistoryItem?: Maybe<PoolConfigurationHistoryItem>;
  poolConfigurationHistoryItems: Array<PoolConfigurationHistoryItem>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  chainlinkENS?: Maybe<ChainlinkENS>;
  chainlinkENSs: Array<ChainlinkENS>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracles: Array<PriceOracle>;
  stoken?: Maybe<SToken>;
  stokens: Array<SToken>;
  vtoken?: Maybe<VToken>;
  vtokens: Array<VToken>;
  atoken?: Maybe<AToken>;
  atokens: Array<AToken>;
  variableDebtToken?: Maybe<VariableDebtToken>;
  variableDebtTokens: Array<VariableDebtToken>;
  stableDebtToken?: Maybe<StableDebtToken>;
  stableDebtTokens: Array<StableDebtToken>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  incentivesController?: Maybe<IncentivesController>;
  incentivesControllers: Array<IncentivesController>;
  incentivizedAction?: Maybe<IncentivizedAction>;
  incentivizedActions: Array<IncentivizedAction>;
  claimIncentiveCall?: Maybe<ClaimIncentiveCall>;
  claimIncentiveCalls: Array<ClaimIncentiveCall>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  reserve?: Maybe<Reserve>;
  reserves: Array<Reserve>;
  wethreserve?: Maybe<WETHReserve>;
  wethreserves: Array<WETHReserve>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  vtokenBalanceHistoryItem?: Maybe<VTokenBalanceHistoryItem>;
  vtokenBalanceHistoryItems: Array<VTokenBalanceHistoryItem>;
  stokenBalanceHistoryItem?: Maybe<STokenBalanceHistoryItem>;
  stokenBalanceHistoryItems: Array<STokenBalanceHistoryItem>;
  stableTokenDelegatedAllowance?: Maybe<StableTokenDelegatedAllowance>;
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowance?: Maybe<VariableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  user?: Maybe<User>;
  users: Array<User>;
  swapHistory?: Maybe<SwapHistory>;
  swapHistories: Array<SwapHistory>;
  userTransaction?: Maybe<UserTransaction>;
  userTransactions: Array<UserTransaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractToPoolMappingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractToPoolMappingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractToPoolMapping_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContractToPoolMapping_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolConfigurationHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConfigurationHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusdEthPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusdEthPriceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsdEthPriceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionchainlinkENSArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionchainlinkENSsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChainlinkENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ChainlinkENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionchainlinkAggregatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionchainlinkAggregatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChainlinkAggregator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ChainlinkAggregator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceOracleAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceOracleAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracleAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracleAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvtokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvtokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionatokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionatokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvariableDebtTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvariableDebtTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VariableDebtToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VariableDebtToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstableDebtTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstableDebtTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StableDebtToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StableDebtToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreferrerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreferrersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Referrer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Referrer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemUnderlyingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemUnderlyingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageAsCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageAsCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebalanceStableBorrowRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebalanceStableBorrowRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveConfigurationHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveConfigurationHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveParamsHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveParamsHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveParamsHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionincentivesControllerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionincentivesControllersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivesController_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivesController_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionincentivizedActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionincentivizedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivizedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivizedAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimIncentiveCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimIncentiveCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimIncentiveCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimIncentiveCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmapAssetPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmapAssetPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MapAssetPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MapAssetPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwethreserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwethreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WETHReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WETHReserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionatokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionatokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ATokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvtokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvtokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VTokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstokenBalanceHistoryItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<STokenBalanceHistoryItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstableTokenDelegatedAllowanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StableTokenDelegatedAllowance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvariableTokenDelegatedAllowanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvariableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VariableTokenDelegatedAllowance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserReserveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserReservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  borrowRateModeFrom: BorrowRateMode;
  borrowRateModeTo: BorrowRateMode;
  stableBorrowRate: Scalars['BigInt'];
  variableBorrowRate: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type SwapHistory = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  fromAsset: Scalars['String'];
  toAsset: Scalars['String'];
  fromAmount: Scalars['BigInt'];
  receivedAmount: Scalars['BigInt'];
  swapType: Scalars['String'];
};

export type SwapHistory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromAsset?: InputMaybe<Scalars['String']>;
  fromAsset_not?: InputMaybe<Scalars['String']>;
  fromAsset_gt?: InputMaybe<Scalars['String']>;
  fromAsset_lt?: InputMaybe<Scalars['String']>;
  fromAsset_gte?: InputMaybe<Scalars['String']>;
  fromAsset_lte?: InputMaybe<Scalars['String']>;
  fromAsset_in?: InputMaybe<Array<Scalars['String']>>;
  fromAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromAsset_contains?: InputMaybe<Scalars['String']>;
  fromAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  fromAsset_not_contains?: InputMaybe<Scalars['String']>;
  fromAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromAsset_starts_with?: InputMaybe<Scalars['String']>;
  fromAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  fromAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromAsset_ends_with?: InputMaybe<Scalars['String']>;
  fromAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  fromAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toAsset?: InputMaybe<Scalars['String']>;
  toAsset_not?: InputMaybe<Scalars['String']>;
  toAsset_gt?: InputMaybe<Scalars['String']>;
  toAsset_lt?: InputMaybe<Scalars['String']>;
  toAsset_gte?: InputMaybe<Scalars['String']>;
  toAsset_lte?: InputMaybe<Scalars['String']>;
  toAsset_in?: InputMaybe<Array<Scalars['String']>>;
  toAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  toAsset_contains?: InputMaybe<Scalars['String']>;
  toAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  toAsset_not_contains?: InputMaybe<Scalars['String']>;
  toAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  toAsset_starts_with?: InputMaybe<Scalars['String']>;
  toAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  toAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toAsset_ends_with?: InputMaybe<Scalars['String']>;
  toAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  toAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromAmount?: InputMaybe<Scalars['BigInt']>;
  fromAmount_not?: InputMaybe<Scalars['BigInt']>;
  fromAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fromAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fromAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fromAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fromAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fromAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivedAmount?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_not?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  receivedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapType?: InputMaybe<Scalars['String']>;
  swapType_not?: InputMaybe<Scalars['String']>;
  swapType_gt?: InputMaybe<Scalars['String']>;
  swapType_lt?: InputMaybe<Scalars['String']>;
  swapType_gte?: InputMaybe<Scalars['String']>;
  swapType_lte?: InputMaybe<Scalars['String']>;
  swapType_in?: InputMaybe<Array<Scalars['String']>>;
  swapType_not_in?: InputMaybe<Array<Scalars['String']>>;
  swapType_contains?: InputMaybe<Scalars['String']>;
  swapType_contains_nocase?: InputMaybe<Scalars['String']>;
  swapType_not_contains?: InputMaybe<Scalars['String']>;
  swapType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  swapType_starts_with?: InputMaybe<Scalars['String']>;
  swapType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapType_not_starts_with?: InputMaybe<Scalars['String']>;
  swapType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapType_ends_with?: InputMaybe<Scalars['String']>;
  swapType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapType_not_ends_with?: InputMaybe<Scalars['String']>;
  swapType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SwapHistory_orderBy =
  | 'id'
  | 'fromAsset'
  | 'toAsset'
  | 'fromAmount'
  | 'receivedAmount'
  | 'swapType';

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  borrowRateModeFrom?: InputMaybe<BorrowRateMode>;
  borrowRateModeFrom_not?: InputMaybe<BorrowRateMode>;
  borrowRateModeFrom_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeFrom_not_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeTo?: InputMaybe<BorrowRateMode>;
  borrowRateModeTo_not?: InputMaybe<BorrowRateMode>;
  borrowRateModeTo_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeTo_not_in?: InputMaybe<Array<BorrowRateMode>>;
  stableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Swap_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'reserve'
  | 'userReserve'
  | 'borrowRateModeFrom'
  | 'borrowRateModeTo'
  | 'stableBorrowRate'
  | 'variableBorrowRate'
  | 'timestamp';

export type UsageAsCollateral = UserTransaction & {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  fromState: Scalars['Boolean'];
  toState: Scalars['Boolean'];
  timestamp: Scalars['Int'];
};

export type UsageAsCollateral_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  fromState?: InputMaybe<Scalars['Boolean']>;
  fromState_not?: InputMaybe<Scalars['Boolean']>;
  fromState_in?: InputMaybe<Array<Scalars['Boolean']>>;
  fromState_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  toState?: InputMaybe<Scalars['Boolean']>;
  toState_not?: InputMaybe<Scalars['Boolean']>;
  toState_in?: InputMaybe<Array<Scalars['Boolean']>>;
  toState_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsageAsCollateral_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'reserve'
  | 'userReserve'
  | 'fromState'
  | 'toState'
  | 'timestamp';

export type UsdEthPriceHistoryItem = {
  id: Scalars['ID'];
  oracle: PriceOracle;
  price: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type UsdEthPriceHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oracle?: InputMaybe<Scalars['String']>;
  oracle_not?: InputMaybe<Scalars['String']>;
  oracle_gt?: InputMaybe<Scalars['String']>;
  oracle_lt?: InputMaybe<Scalars['String']>;
  oracle_gte?: InputMaybe<Scalars['String']>;
  oracle_lte?: InputMaybe<Scalars['String']>;
  oracle_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_contains?: InputMaybe<Scalars['String']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_contains?: InputMaybe<Scalars['String']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_starts_with?: InputMaybe<Scalars['String']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_ends_with?: InputMaybe<Scalars['String']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_?: InputMaybe<PriceOracle_filter>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsdEthPriceHistoryItem_orderBy =
  | 'id'
  | 'oracle'
  | 'price'
  | 'timestamp';

export type User = {
  /**
   * user address
   *
   */
  id: Scalars['ID'];
  borrowedReservesCount: Scalars['Int'];
  unclaimedRewards: Scalars['BigInt'];
  lifetimeRewards: Scalars['BigInt'];
  incentivesLastUpdated: Scalars['Int'];
  reserves: Array<UserReserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  liquidationCallHistory: Array<LiquidationCall>;
  incentivizedActions: Array<IncentivizedAction>;
  claimIncentives: Array<ClaimIncentiveCall>;
};


export type UserreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
};


export type UserdepositHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type UserredeemUnderlyingHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
};


export type UserusageAsCollateralHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
};


export type UserborrowHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type UserswapHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type UserrebalanceStableBorrowRateHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
};


export type UserrepayHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type UserliquidationCallHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
};


export type UserincentivizedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncentivizedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IncentivizedAction_filter>;
};


export type UserclaimIncentivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimIncentiveCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimIncentiveCall_filter>;
};

export type UserReserve = {
  /**
   * user address + reserve address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  reserve: Reserve;
  user: User;
  usageAsCollateralEnabledOnUser: Scalars['Boolean'];
  scaledATokenBalance: Scalars['BigInt'];
  currentATokenBalance: Scalars['BigInt'];
  scaledVariableDebt: Scalars['BigInt'];
  currentVariableDebt: Scalars['BigInt'];
  principalStableDebt: Scalars['BigInt'];
  currentStableDebt: Scalars['BigInt'];
  currentTotalDebt: Scalars['BigInt'];
  stableBorrowRate: Scalars['BigInt'];
  oldStableBorrowRate: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  stableBorrowLastUpdateTimestamp: Scalars['Int'];
  variableBorrowIndex: Scalars['BigInt'];
  aTokenincentivesUserIndex: Scalars['BigInt'];
  vTokenincentivesUserIndex: Scalars['BigInt'];
  sTokenincentivesUserIndex: Scalars['BigInt'];
  aIncentivesLastUpdateTimestamp: Scalars['Int'];
  vIncentivesLastUpdateTimestamp: Scalars['Int'];
  sIncentivesLastUpdateTimestamp: Scalars['Int'];
  /**
   * Amount in currency units included as fee
   *
   */
  lastUpdateTimestamp: Scalars['Int'];
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
  aTokenBalanceHistory: Array<ATokenBalanceHistoryItem>;
  vTokenBalanceHistory: Array<VTokenBalanceHistoryItem>;
  sTokenBalanceHistory: Array<STokenBalanceHistoryItem>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  liquidationCallHistory: Array<LiquidationCall>;
};


export type UserReservestableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StableTokenDelegatedAllowance_filter>;
};


export type UserReservevariableTokenDelegatedAllowancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VariableTokenDelegatedAllowance_filter>;
};


export type UserReserveaTokenBalanceHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ATokenBalanceHistoryItem_filter>;
};


export type UserReservevTokenBalanceHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VTokenBalanceHistoryItem_filter>;
};


export type UserReservesTokenBalanceHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<STokenBalanceHistoryItem_filter>;
};


export type UserReserveusageAsCollateralHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageAsCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageAsCollateral_filter>;
};


export type UserReservedepositHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type UserReserveredeemUnderlyingHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemUnderlying_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemUnderlying_filter>;
};


export type UserReserveborrowHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type UserReserveswapHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type UserReserverebalanceStableBorrowRateHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceStableBorrowRate_filter>;
};


export type UserReserverepayHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type UserReserveliquidationCallHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidationCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationCall_filter>;
};

export type UserReserve_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  reserve?: InputMaybe<Scalars['String']>;
  reserve_not?: InputMaybe<Scalars['String']>;
  reserve_gt?: InputMaybe<Scalars['String']>;
  reserve_lt?: InputMaybe<Scalars['String']>;
  reserve_gte?: InputMaybe<Scalars['String']>;
  reserve_lte?: InputMaybe<Scalars['String']>;
  reserve_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  reserve_contains?: InputMaybe<Scalars['String']>;
  reserve_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_contains?: InputMaybe<Scalars['String']>;
  reserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reserve_starts_with?: InputMaybe<Scalars['String']>;
  reserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with?: InputMaybe<Scalars['String']>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_ends_with?: InputMaybe<Scalars['String']>;
  reserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with?: InputMaybe<Scalars['String']>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reserve_?: InputMaybe<Reserve_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  usageAsCollateralEnabledOnUser?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabledOnUser_not?: InputMaybe<Scalars['Boolean']>;
  usageAsCollateralEnabledOnUser_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabledOnUser_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  scaledATokenBalance?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  scaledATokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentATokenBalance?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  currentATokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentATokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principalStableDebt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  principalStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principalStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentStableDebt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_not?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  currentStableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentStableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTotalDebt?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_not?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_gt?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_lt?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_gte?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_lte?: InputMaybe<Scalars['BigInt']>;
  currentTotalDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTotalDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldStableBorrowRate?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_not?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_gt?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_lt?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_gte?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_lte?: InputMaybe<Scalars['BigInt']>;
  oldStableBorrowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldStableBorrowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_not?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  stableBorrowLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  stableBorrowLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  variableBorrowIndex?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aTokenincentivesUserIndex?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_not?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_gt?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_lt?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_gte?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_lte?: InputMaybe<Scalars['BigInt']>;
  aTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vTokenincentivesUserIndex?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_not?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_gt?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_lt?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_gte?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_lte?: InputMaybe<Scalars['BigInt']>;
  vTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sTokenincentivesUserIndex?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_not?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_gt?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_lt?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_gte?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_lte?: InputMaybe<Scalars['BigInt']>;
  sTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  aIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  aIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  vIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  vIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  vIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sIncentivesLastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  sIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  sIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stableTokenDelegatedAllowances_?: InputMaybe<StableTokenDelegatedAllowance_filter>;
  variableTokenDelegatedAllowances_?: InputMaybe<VariableTokenDelegatedAllowance_filter>;
  aTokenBalanceHistory_?: InputMaybe<ATokenBalanceHistoryItem_filter>;
  vTokenBalanceHistory_?: InputMaybe<VTokenBalanceHistoryItem_filter>;
  sTokenBalanceHistory_?: InputMaybe<STokenBalanceHistoryItem_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  depositHistory_?: InputMaybe<Deposit_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<Swap_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserReserve_orderBy =
  | 'id'
  | 'pool'
  | 'reserve'
  | 'user'
  | 'usageAsCollateralEnabledOnUser'
  | 'scaledATokenBalance'
  | 'currentATokenBalance'
  | 'scaledVariableDebt'
  | 'currentVariableDebt'
  | 'principalStableDebt'
  | 'currentStableDebt'
  | 'currentTotalDebt'
  | 'stableBorrowRate'
  | 'oldStableBorrowRate'
  | 'liquidityRate'
  | 'stableBorrowLastUpdateTimestamp'
  | 'variableBorrowIndex'
  | 'aTokenincentivesUserIndex'
  | 'vTokenincentivesUserIndex'
  | 'sTokenincentivesUserIndex'
  | 'aIncentivesLastUpdateTimestamp'
  | 'vIncentivesLastUpdateTimestamp'
  | 'sIncentivesLastUpdateTimestamp'
  | 'lastUpdateTimestamp'
  | 'stableTokenDelegatedAllowances'
  | 'variableTokenDelegatedAllowances'
  | 'aTokenBalanceHistory'
  | 'vTokenBalanceHistory'
  | 'sTokenBalanceHistory'
  | 'usageAsCollateralHistory'
  | 'depositHistory'
  | 'redeemUnderlyingHistory'
  | 'borrowHistory'
  | 'swapHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'liquidationCallHistory';

export type UserTransaction = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  action: Action;
  pool: Pool;
  user: User;
  timestamp: Scalars['Int'];
};

export type UserTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<Action>;
  action_not?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not_in?: InputMaybe<Array<Action>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserTransaction_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'timestamp';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  borrowedReservesCount?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_not?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_gt?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_lt?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_gte?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_lte?: InputMaybe<Scalars['Int']>;
  borrowedReservesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowedReservesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unclaimedRewards?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_not?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  unclaimedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unclaimedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRewards?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  incentivesLastUpdated?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_not?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_gt?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_lt?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_gte?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_lte?: InputMaybe<Scalars['Int']>;
  incentivesLastUpdated_in?: InputMaybe<Array<Scalars['Int']>>;
  incentivesLastUpdated_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reserves_?: InputMaybe<UserReserve_filter>;
  depositHistory_?: InputMaybe<Deposit_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<Swap_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  incentivizedActions_?: InputMaybe<IncentivizedAction_filter>;
  claimIncentives_?: InputMaybe<ClaimIncentiveCall_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'borrowedReservesCount'
  | 'unclaimedRewards'
  | 'lifetimeRewards'
  | 'incentivesLastUpdated'
  | 'reserves'
  | 'depositHistory'
  | 'redeemUnderlyingHistory'
  | 'usageAsCollateralHistory'
  | 'borrowHistory'
  | 'swapHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'liquidationCallHistory'
  | 'incentivizedActions'
  | 'claimIncentives';

export type VToken = {
  /**
   * VToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
  tokenContractImpl: Scalars['Bytes'];
};

export type VTokenBalanceHistoryItem = {
  /**
   * userReserve + txHash
   *
   */
  id: Scalars['ID'];
  userReserve: UserReserve;
  scaledVariableDebt: Scalars['BigInt'];
  currentVariableDebt: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  index: Scalars['BigInt'];
};

export type VTokenBalanceHistoryItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  scaledVariableDebt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  scaledVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVariableDebt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_not?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_gt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_lt?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_gte?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_lte?: InputMaybe<Scalars['BigInt']>;
  currentVariableDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVariableDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type VTokenBalanceHistoryItem_orderBy =
  | 'id'
  | 'userReserve'
  | 'scaledVariableDebt'
  | 'currentVariableDebt'
  | 'timestamp'
  | 'index';

export type VToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  underlyingAssetAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenContractImpl?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_contains?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type VToken_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals'
  | 'tokenContractImpl';

export type VariableDebtToken = {
  /**
   * VariableDebtToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
};

export type VariableDebtToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  underlyingAssetAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type VariableDebtToken_orderBy =
  | 'id'
  | 'pool'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals';

export type VariableTokenDelegatedAllowance = {
  /**
   * variable + fromuser address + touser address+ reserve address
   *
   */
  id: Scalars['ID'];
  fromUser: User;
  toUser: User;
  amountAllowed: Scalars['BigInt'];
  userReserve: UserReserve;
};

export type VariableTokenDelegatedAllowance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromUser?: InputMaybe<Scalars['String']>;
  fromUser_not?: InputMaybe<Scalars['String']>;
  fromUser_gt?: InputMaybe<Scalars['String']>;
  fromUser_lt?: InputMaybe<Scalars['String']>;
  fromUser_gte?: InputMaybe<Scalars['String']>;
  fromUser_lte?: InputMaybe<Scalars['String']>;
  fromUser_in?: InputMaybe<Array<Scalars['String']>>;
  fromUser_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromUser_contains?: InputMaybe<Scalars['String']>;
  fromUser_contains_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_contains?: InputMaybe<Scalars['String']>;
  fromUser_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromUser_starts_with?: InputMaybe<Scalars['String']>;
  fromUser_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_starts_with?: InputMaybe<Scalars['String']>;
  fromUser_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_ends_with?: InputMaybe<Scalars['String']>;
  fromUser_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_not_ends_with?: InputMaybe<Scalars['String']>;
  fromUser_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromUser_?: InputMaybe<User_filter>;
  toUser?: InputMaybe<Scalars['String']>;
  toUser_not?: InputMaybe<Scalars['String']>;
  toUser_gt?: InputMaybe<Scalars['String']>;
  toUser_lt?: InputMaybe<Scalars['String']>;
  toUser_gte?: InputMaybe<Scalars['String']>;
  toUser_lte?: InputMaybe<Scalars['String']>;
  toUser_in?: InputMaybe<Array<Scalars['String']>>;
  toUser_not_in?: InputMaybe<Array<Scalars['String']>>;
  toUser_contains?: InputMaybe<Scalars['String']>;
  toUser_contains_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_contains?: InputMaybe<Scalars['String']>;
  toUser_not_contains_nocase?: InputMaybe<Scalars['String']>;
  toUser_starts_with?: InputMaybe<Scalars['String']>;
  toUser_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_starts_with?: InputMaybe<Scalars['String']>;
  toUser_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_ends_with?: InputMaybe<Scalars['String']>;
  toUser_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_not_ends_with?: InputMaybe<Scalars['String']>;
  toUser_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toUser_?: InputMaybe<User_filter>;
  amountAllowed?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_not?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_gt?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_lt?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_gte?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_lte?: InputMaybe<Scalars['BigInt']>;
  amountAllowed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountAllowed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userReserve?: InputMaybe<Scalars['String']>;
  userReserve_not?: InputMaybe<Scalars['String']>;
  userReserve_gt?: InputMaybe<Scalars['String']>;
  userReserve_lt?: InputMaybe<Scalars['String']>;
  userReserve_gte?: InputMaybe<Scalars['String']>;
  userReserve_lte?: InputMaybe<Scalars['String']>;
  userReserve_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_not_in?: InputMaybe<Array<Scalars['String']>>;
  userReserve_contains?: InputMaybe<Scalars['String']>;
  userReserve_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_contains?: InputMaybe<Scalars['String']>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userReserve_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with?: InputMaybe<Scalars['String']>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with?: InputMaybe<Scalars['String']>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userReserve_?: InputMaybe<UserReserve_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type VariableTokenDelegatedAllowance_orderBy =
  | 'id'
  | 'fromUser'
  | 'toUser'
  | 'amountAllowed'
  | 'userReserve';

export type WETHReserve = {
  /**
   * weth address
   *
   */
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['Int'];
  updatedTimestamp: Scalars['Int'];
  updatedBlockNumber: Scalars['BigInt'];
};

export type WETHReserve_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedTimestamp?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type WETHReserve_orderBy =
  | 'id'
  | 'address'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'updatedTimestamp'
  | 'updatedBlockNumber';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
  AToken: ResolverTypeWrapper<AToken>;
  ATokenBalanceHistoryItem: ResolverTypeWrapper<ATokenBalanceHistoryItem>;
  ATokenBalanceHistoryItem_filter: ATokenBalanceHistoryItem_filter;
  ATokenBalanceHistoryItem_orderBy: ATokenBalanceHistoryItem_orderBy;
  AToken_filter: AToken_filter;
  AToken_orderBy: AToken_orderBy;
  Action: Action;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Borrow: ResolverTypeWrapper<Borrow>;
  BorrowRateMode: BorrowRateMode;
  Borrow_filter: Borrow_filter;
  Borrow_orderBy: Borrow_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  ChainlinkAggregator: ResolverTypeWrapper<ChainlinkAggregator>;
  ChainlinkAggregator_filter: ChainlinkAggregator_filter;
  ChainlinkAggregator_orderBy: ChainlinkAggregator_orderBy;
  ChainlinkENS: ResolverTypeWrapper<ChainlinkENS>;
  ChainlinkENS_filter: ChainlinkENS_filter;
  ChainlinkENS_orderBy: ChainlinkENS_orderBy;
  ClaimIncentiveCall: ResolverTypeWrapper<ClaimIncentiveCall>;
  ClaimIncentiveCall_filter: ClaimIncentiveCall_filter;
  ClaimIncentiveCall_orderBy: ClaimIncentiveCall_orderBy;
  ContractToPoolMapping: ResolverTypeWrapper<ContractToPoolMapping>;
  ContractToPoolMapping_filter: ContractToPoolMapping_filter;
  ContractToPoolMapping_orderBy: ContractToPoolMapping_orderBy;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  FlashLoan: ResolverTypeWrapper<FlashLoan>;
  FlashLoan_filter: FlashLoan_filter;
  FlashLoan_orderBy: FlashLoan_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IncentivesController: ResolverTypeWrapper<IncentivesController>;
  IncentivesController_filter: IncentivesController_filter;
  IncentivesController_orderBy: IncentivesController_orderBy;
  IncentivizedAction: ResolverTypeWrapper<IncentivizedAction>;
  IncentivizedAction_filter: IncentivizedAction_filter;
  IncentivizedAction_orderBy: IncentivizedAction_orderBy;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LiquidationCall: ResolverTypeWrapper<LiquidationCall>;
  LiquidationCall_filter: LiquidationCall_filter;
  LiquidationCall_orderBy: LiquidationCall_orderBy;
  MapAssetPool: ResolverTypeWrapper<MapAssetPool>;
  MapAssetPool_filter: MapAssetPool_filter;
  MapAssetPool_orderBy: MapAssetPool_orderBy;
  OrderDirection: OrderDirection;
  Pool: ResolverTypeWrapper<Pool>;
  PoolConfigurationHistoryItem: ResolverTypeWrapper<PoolConfigurationHistoryItem>;
  PoolConfigurationHistoryItem_filter: PoolConfigurationHistoryItem_filter;
  PoolConfigurationHistoryItem_orderBy: PoolConfigurationHistoryItem_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  PriceHistoryItem: ResolverTypeWrapper<PriceHistoryItem>;
  PriceHistoryItem_filter: PriceHistoryItem_filter;
  PriceHistoryItem_orderBy: PriceHistoryItem_orderBy;
  PriceOracle: ResolverTypeWrapper<PriceOracle>;
  PriceOracleAsset: ResolverTypeWrapper<PriceOracleAsset>;
  PriceOracleAssetPlatform: PriceOracleAssetPlatform;
  PriceOracleAssetType: PriceOracleAssetType;
  PriceOracleAsset_filter: PriceOracleAsset_filter;
  PriceOracleAsset_orderBy: PriceOracleAsset_orderBy;
  PriceOracle_filter: PriceOracle_filter;
  PriceOracle_orderBy: PriceOracle_orderBy;
  Protocol: ResolverTypeWrapper<Protocol>;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RebalanceStableBorrowRate: ResolverTypeWrapper<RebalanceStableBorrowRate>;
  RebalanceStableBorrowRate_filter: RebalanceStableBorrowRate_filter;
  RebalanceStableBorrowRate_orderBy: RebalanceStableBorrowRate_orderBy;
  RedeemUnderlying: ResolverTypeWrapper<RedeemUnderlying>;
  RedeemUnderlying_filter: RedeemUnderlying_filter;
  RedeemUnderlying_orderBy: RedeemUnderlying_orderBy;
  Referrer: ResolverTypeWrapper<Referrer>;
  Referrer_filter: Referrer_filter;
  Referrer_orderBy: Referrer_orderBy;
  Repay: ResolverTypeWrapper<Repay>;
  Repay_filter: Repay_filter;
  Repay_orderBy: Repay_orderBy;
  Reserve: ResolverTypeWrapper<Reserve>;
  ReserveConfigurationHistoryItem: ResolverTypeWrapper<ReserveConfigurationHistoryItem>;
  ReserveConfigurationHistoryItem_filter: ReserveConfigurationHistoryItem_filter;
  ReserveConfigurationHistoryItem_orderBy: ReserveConfigurationHistoryItem_orderBy;
  ReserveParamsHistoryItem: ResolverTypeWrapper<ReserveParamsHistoryItem>;
  ReserveParamsHistoryItem_filter: ReserveParamsHistoryItem_filter;
  ReserveParamsHistoryItem_orderBy: ReserveParamsHistoryItem_orderBy;
  Reserve_filter: Reserve_filter;
  Reserve_orderBy: Reserve_orderBy;
  SToken: ResolverTypeWrapper<SToken>;
  STokenBalanceHistoryItem: ResolverTypeWrapper<STokenBalanceHistoryItem>;
  STokenBalanceHistoryItem_filter: STokenBalanceHistoryItem_filter;
  STokenBalanceHistoryItem_orderBy: STokenBalanceHistoryItem_orderBy;
  SToken_filter: SToken_filter;
  SToken_orderBy: SToken_orderBy;
  StableDebtToken: ResolverTypeWrapper<StableDebtToken>;
  StableDebtToken_filter: StableDebtToken_filter;
  StableDebtToken_orderBy: StableDebtToken_orderBy;
  StableTokenDelegatedAllowance: ResolverTypeWrapper<StableTokenDelegatedAllowance>;
  StableTokenDelegatedAllowance_filter: StableTokenDelegatedAllowance_filter;
  StableTokenDelegatedAllowance_orderBy: StableTokenDelegatedAllowance_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Swap: ResolverTypeWrapper<Swap>;
  SwapHistory: ResolverTypeWrapper<SwapHistory>;
  SwapHistory_filter: SwapHistory_filter;
  SwapHistory_orderBy: SwapHistory_orderBy;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  UsageAsCollateral: ResolverTypeWrapper<UsageAsCollateral>;
  UsageAsCollateral_filter: UsageAsCollateral_filter;
  UsageAsCollateral_orderBy: UsageAsCollateral_orderBy;
  UsdEthPriceHistoryItem: ResolverTypeWrapper<UsdEthPriceHistoryItem>;
  UsdEthPriceHistoryItem_filter: UsdEthPriceHistoryItem_filter;
  UsdEthPriceHistoryItem_orderBy: UsdEthPriceHistoryItem_orderBy;
  User: ResolverTypeWrapper<User>;
  UserReserve: ResolverTypeWrapper<UserReserve>;
  UserReserve_filter: UserReserve_filter;
  UserReserve_orderBy: UserReserve_orderBy;
  UserTransaction: ResolversTypes['Borrow'] | ResolversTypes['Deposit'] | ResolversTypes['LiquidationCall'] | ResolversTypes['RebalanceStableBorrowRate'] | ResolversTypes['RedeemUnderlying'] | ResolversTypes['Repay'] | ResolversTypes['Swap'] | ResolversTypes['UsageAsCollateral'];
  UserTransaction_filter: UserTransaction_filter;
  UserTransaction_orderBy: UserTransaction_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  VToken: ResolverTypeWrapper<VToken>;
  VTokenBalanceHistoryItem: ResolverTypeWrapper<VTokenBalanceHistoryItem>;
  VTokenBalanceHistoryItem_filter: VTokenBalanceHistoryItem_filter;
  VTokenBalanceHistoryItem_orderBy: VTokenBalanceHistoryItem_orderBy;
  VToken_filter: VToken_filter;
  VToken_orderBy: VToken_orderBy;
  VariableDebtToken: ResolverTypeWrapper<VariableDebtToken>;
  VariableDebtToken_filter: VariableDebtToken_filter;
  VariableDebtToken_orderBy: VariableDebtToken_orderBy;
  VariableTokenDelegatedAllowance: ResolverTypeWrapper<VariableTokenDelegatedAllowance>;
  VariableTokenDelegatedAllowance_filter: VariableTokenDelegatedAllowance_filter;
  VariableTokenDelegatedAllowance_orderBy: VariableTokenDelegatedAllowance_orderBy;
  WETHReserve: ResolverTypeWrapper<WETHReserve>;
  WETHReserve_filter: WETHReserve_filter;
  WETHReserve_orderBy: WETHReserve_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AToken: AToken;
  ATokenBalanceHistoryItem: ATokenBalanceHistoryItem;
  ATokenBalanceHistoryItem_filter: ATokenBalanceHistoryItem_filter;
  AToken_filter: AToken_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Borrow: Borrow;
  Borrow_filter: Borrow_filter;
  Bytes: Scalars['Bytes'];
  ChainlinkAggregator: ChainlinkAggregator;
  ChainlinkAggregator_filter: ChainlinkAggregator_filter;
  ChainlinkENS: ChainlinkENS;
  ChainlinkENS_filter: ChainlinkENS_filter;
  ClaimIncentiveCall: ClaimIncentiveCall;
  ClaimIncentiveCall_filter: ClaimIncentiveCall_filter;
  ContractToPoolMapping: ContractToPoolMapping;
  ContractToPoolMapping_filter: ContractToPoolMapping_filter;
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  FlashLoan: FlashLoan;
  FlashLoan_filter: FlashLoan_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IncentivesController: IncentivesController;
  IncentivesController_filter: IncentivesController_filter;
  IncentivizedAction: IncentivizedAction;
  IncentivizedAction_filter: IncentivizedAction_filter;
  Int: Scalars['Int'];
  LiquidationCall: LiquidationCall;
  LiquidationCall_filter: LiquidationCall_filter;
  MapAssetPool: MapAssetPool;
  MapAssetPool_filter: MapAssetPool_filter;
  Pool: Pool;
  PoolConfigurationHistoryItem: PoolConfigurationHistoryItem;
  PoolConfigurationHistoryItem_filter: PoolConfigurationHistoryItem_filter;
  Pool_filter: Pool_filter;
  PriceHistoryItem: PriceHistoryItem;
  PriceHistoryItem_filter: PriceHistoryItem_filter;
  PriceOracle: PriceOracle;
  PriceOracleAsset: PriceOracleAsset;
  PriceOracleAsset_filter: PriceOracleAsset_filter;
  PriceOracle_filter: PriceOracle_filter;
  Protocol: Protocol;
  Protocol_filter: Protocol_filter;
  Query: {};
  RebalanceStableBorrowRate: RebalanceStableBorrowRate;
  RebalanceStableBorrowRate_filter: RebalanceStableBorrowRate_filter;
  RedeemUnderlying: RedeemUnderlying;
  RedeemUnderlying_filter: RedeemUnderlying_filter;
  Referrer: Referrer;
  Referrer_filter: Referrer_filter;
  Repay: Repay;
  Repay_filter: Repay_filter;
  Reserve: Reserve;
  ReserveConfigurationHistoryItem: ReserveConfigurationHistoryItem;
  ReserveConfigurationHistoryItem_filter: ReserveConfigurationHistoryItem_filter;
  ReserveParamsHistoryItem: ReserveParamsHistoryItem;
  ReserveParamsHistoryItem_filter: ReserveParamsHistoryItem_filter;
  Reserve_filter: Reserve_filter;
  SToken: SToken;
  STokenBalanceHistoryItem: STokenBalanceHistoryItem;
  STokenBalanceHistoryItem_filter: STokenBalanceHistoryItem_filter;
  SToken_filter: SToken_filter;
  StableDebtToken: StableDebtToken;
  StableDebtToken_filter: StableDebtToken_filter;
  StableTokenDelegatedAllowance: StableTokenDelegatedAllowance;
  StableTokenDelegatedAllowance_filter: StableTokenDelegatedAllowance_filter;
  String: Scalars['String'];
  Subscription: {};
  Swap: Swap;
  SwapHistory: SwapHistory;
  SwapHistory_filter: SwapHistory_filter;
  Swap_filter: Swap_filter;
  UsageAsCollateral: UsageAsCollateral;
  UsageAsCollateral_filter: UsageAsCollateral_filter;
  UsdEthPriceHistoryItem: UsdEthPriceHistoryItem;
  UsdEthPriceHistoryItem_filter: UsdEthPriceHistoryItem_filter;
  User: User;
  UserReserve: UserReserve;
  UserReserve_filter: UserReserve_filter;
  UserTransaction: ResolversParentTypes['Borrow'] | ResolversParentTypes['Deposit'] | ResolversParentTypes['LiquidationCall'] | ResolversParentTypes['RebalanceStableBorrowRate'] | ResolversParentTypes['RedeemUnderlying'] | ResolversParentTypes['Repay'] | ResolversParentTypes['Swap'] | ResolversParentTypes['UsageAsCollateral'];
  UserTransaction_filter: UserTransaction_filter;
  User_filter: User_filter;
  VToken: VToken;
  VTokenBalanceHistoryItem: VTokenBalanceHistoryItem;
  VTokenBalanceHistoryItem_filter: VTokenBalanceHistoryItem_filter;
  VToken_filter: VToken_filter;
  VariableDebtToken: VariableDebtToken;
  VariableDebtToken_filter: VariableDebtToken_filter;
  VariableTokenDelegatedAllowance: VariableTokenDelegatedAllowance;
  VariableTokenDelegatedAllowance_filter: VariableTokenDelegatedAllowance_filter;
  WETHReserve: WETHReserve;
  WETHReserve_filter: WETHReserve_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ATokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AToken'] = ResolversParentTypes['AToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  underlyingAssetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAssetDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenContractImpl?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ATokenBalanceHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ATokenBalanceHistoryItem'] = ResolversParentTypes['ATokenBalanceHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scaledATokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentATokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BorrowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Borrow'] = ResolversParentTypes['Borrow']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowRateMode?: Resolver<ResolversTypes['BorrowRateMode'], ParentType, ContextType>;
  referrer?: Resolver<Maybe<ResolversTypes['Referrer']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stableTokenDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableTokenDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  assetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ChainlinkAggregatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChainlinkAggregator'] = ResolversParentTypes['ChainlinkAggregator']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracleAsset?: Resolver<ResolversTypes['PriceOracleAsset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChainlinkENSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChainlinkENS'] = ResolversParentTypes['ChainlinkENS']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aggregatorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimIncentiveCallResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimIncentiveCall'] = ResolversParentTypes['ClaimIncentiveCall']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incentivesController?: Resolver<ResolversTypes['IncentivesController'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContractToPoolMappingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContractToPoolMapping'] = ResolversParentTypes['ContractToPoolMapping']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  referrer?: Resolver<Maybe<ResolversTypes['Referrer']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashLoanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlashLoan'] = ResolversParentTypes['FlashLoan']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  initiator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncentivesControllerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IncentivesController'] = ResolversParentTypes['IncentivesController']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewardTokenDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rewardTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  precision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  emissionEndTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  incentivizedActions?: Resolver<Array<ResolversTypes['IncentivizedAction']>, ParentType, ContextType, RequireFields<IncentivesControllerincentivizedActionsArgs, 'skip' | 'first'>>;
  claimIncentives?: Resolver<Array<ResolversTypes['ClaimIncentiveCall']>, ParentType, ContextType, RequireFields<IncentivesControllerclaimIncentivesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncentivizedActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IncentivizedAction'] = ResolversParentTypes['IncentivizedAction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incentivesController?: Resolver<ResolversTypes['IncentivesController'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidationCallResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidationCall'] = ResolversParentTypes['LiquidationCall']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  collateralReserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  collateralUserReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  collateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  principalReserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  principalUserReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  principalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateralAssetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  borrowAssetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MapAssetPoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MapAssetPool'] = ResolversParentTypes['MapAssetPool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingAsset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['Protocol'], ParentType, ContextType>;
  lendingPool?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolCollateralManager?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolConfiguratorImpl?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolImpl?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolConfigurator?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  proxyPriceProvider?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingRateOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  configurationAdmin?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  ethereumAddress?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  emergencyAdmin?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['PoolConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<PoolhistoryArgs, 'skip' | 'first'>>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reserves?: Resolver<Array<ResolversTypes['Reserve']>, ParentType, ContextType, RequireFields<PoolreservesArgs, 'skip' | 'first'>>;
  depositHistory?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<PooldepositHistoryArgs, 'skip' | 'first'>>;
  redeemUnderlyingHistory?: Resolver<Array<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<PoolredeemUnderlyingHistoryArgs, 'skip' | 'first'>>;
  borrowHistory?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<PoolborrowHistoryArgs, 'skip' | 'first'>>;
  swapHistory?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<PoolswapHistoryArgs, 'skip' | 'first'>>;
  usageAsCollateralHistory?: Resolver<Array<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<PoolusageAsCollateralHistoryArgs, 'skip' | 'first'>>;
  rebalanceStableBorrowRateHistory?: Resolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<PoolrebalanceStableBorrowRateHistoryArgs, 'skip' | 'first'>>;
  repayHistory?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<PoolrepayHistoryArgs, 'skip' | 'first'>>;
  flashLoanHistory?: Resolver<Array<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<PoolflashLoanHistoryArgs, 'skip' | 'first'>>;
  liquidationCallHistory?: Resolver<Array<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<PoolliquidationCallHistoryArgs, 'skip' | 'first'>>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paused?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolConfigurationHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolConfigurationHistoryItem'] = ResolversParentTypes['PoolConfigurationHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  lendingPool?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolCollateralManager?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolConfiguratorImpl?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolImpl?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingPoolConfigurator?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  proxyPriceProvider?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lendingRateOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  configurationAdmin?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceHistoryItem'] = ResolversParentTypes['PriceHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['PriceOracleAsset'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceOracleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceOracle'] = ResolversParentTypes['PriceOracle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proxyPriceProvider?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  usdPriceEth?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  usdPriceEthMainSource?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  usdPriceEthFallbackRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  usdDependentAssets?: Resolver<Array<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<PriceOracleusdDependentAssetsArgs, 'skip' | 'first'>>;
  fallbackPriceOracle?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<PriceOracletokensArgs, 'skip' | 'first'>>;
  usdPriceEthHistory?: Resolver<Array<ResolversTypes['UsdEthPriceHistoryItem']>, ParentType, ContextType, RequireFields<PriceOracleusdPriceEthHistoryArgs, 'skip' | 'first'>>;
  tokensWithFallback?: Resolver<Array<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<PriceOracletokensWithFallbackArgs, 'skip' | 'first'>>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  baseCurrency?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  baseCurrencyUnit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceOracleAssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceOracleAsset'] = ResolversParentTypes['PriceOracleAsset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracle?: Resolver<ResolversTypes['PriceOracle'], ParentType, ContextType>;
  priceInEth?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceSource?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isFallbackRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PriceOracleAssetType'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['PriceOracleAssetPlatform'], ParentType, ContextType>;
  dependentAssets?: Resolver<Array<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<PriceOracleAssetdependentAssetsArgs, 'skip' | 'first'>>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceHistory?: Resolver<Array<ResolversTypes['PriceHistoryItem']>, ParentType, ContextType, RequireFields<PriceOracleAssetpriceHistoryArgs, 'skip' | 'first'>>;
  fromChainlinkSourcesRegistry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<ProtocolpoolsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contractToPoolMapping?: Resolver<Maybe<ResolversTypes['ContractToPoolMapping']>, ParentType, ContextType, RequireFields<QuerycontractToPoolMappingArgs, 'id' | 'subgraphError'>>;
  contractToPoolMappings?: Resolver<Array<ResolversTypes['ContractToPoolMapping']>, ParentType, ContextType, RequireFields<QuerycontractToPoolMappingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolConfigurationHistoryItem?: Resolver<Maybe<ResolversTypes['PoolConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<QuerypoolConfigurationHistoryItemArgs, 'id' | 'subgraphError'>>;
  poolConfigurationHistoryItems?: Resolver<Array<ResolversTypes['PoolConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<QuerypoolConfigurationHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceHistoryItem?: Resolver<Maybe<ResolversTypes['PriceHistoryItem']>, ParentType, ContextType, RequireFields<QuerypriceHistoryItemArgs, 'id' | 'subgraphError'>>;
  priceHistoryItems?: Resolver<Array<ResolversTypes['PriceHistoryItem']>, ParentType, ContextType, RequireFields<QuerypriceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usdEthPriceHistoryItem?: Resolver<Maybe<ResolversTypes['UsdEthPriceHistoryItem']>, ParentType, ContextType, RequireFields<QueryusdEthPriceHistoryItemArgs, 'id' | 'subgraphError'>>;
  usdEthPriceHistoryItems?: Resolver<Array<ResolversTypes['UsdEthPriceHistoryItem']>, ParentType, ContextType, RequireFields<QueryusdEthPriceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  chainlinkENS?: Resolver<Maybe<ResolversTypes['ChainlinkENS']>, ParentType, ContextType, RequireFields<QuerychainlinkENSArgs, 'id' | 'subgraphError'>>;
  chainlinkENSs?: Resolver<Array<ResolversTypes['ChainlinkENS']>, ParentType, ContextType, RequireFields<QuerychainlinkENSsArgs, 'skip' | 'first' | 'subgraphError'>>;
  chainlinkAggregator?: Resolver<Maybe<ResolversTypes['ChainlinkAggregator']>, ParentType, ContextType, RequireFields<QuerychainlinkAggregatorArgs, 'id' | 'subgraphError'>>;
  chainlinkAggregators?: Resolver<Array<ResolversTypes['ChainlinkAggregator']>, ParentType, ContextType, RequireFields<QuerychainlinkAggregatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceOracleAsset?: Resolver<Maybe<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<QuerypriceOracleAssetArgs, 'id' | 'subgraphError'>>;
  priceOracleAssets?: Resolver<Array<ResolversTypes['PriceOracleAsset']>, ParentType, ContextType, RequireFields<QuerypriceOracleAssetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceOracle?: Resolver<Maybe<ResolversTypes['PriceOracle']>, ParentType, ContextType, RequireFields<QuerypriceOracleArgs, 'id' | 'subgraphError'>>;
  priceOracles?: Resolver<Array<ResolversTypes['PriceOracle']>, ParentType, ContextType, RequireFields<QuerypriceOraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  stoken?: Resolver<Maybe<ResolversTypes['SToken']>, ParentType, ContextType, RequireFields<QuerystokenArgs, 'id' | 'subgraphError'>>;
  stokens?: Resolver<Array<ResolversTypes['SToken']>, ParentType, ContextType, RequireFields<QuerystokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  vtoken?: Resolver<Maybe<ResolversTypes['VToken']>, ParentType, ContextType, RequireFields<QueryvtokenArgs, 'id' | 'subgraphError'>>;
  vtokens?: Resolver<Array<ResolversTypes['VToken']>, ParentType, ContextType, RequireFields<QueryvtokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  atoken?: Resolver<Maybe<ResolversTypes['AToken']>, ParentType, ContextType, RequireFields<QueryatokenArgs, 'id' | 'subgraphError'>>;
  atokens?: Resolver<Array<ResolversTypes['AToken']>, ParentType, ContextType, RequireFields<QueryatokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  variableDebtToken?: Resolver<Maybe<ResolversTypes['VariableDebtToken']>, ParentType, ContextType, RequireFields<QueryvariableDebtTokenArgs, 'id' | 'subgraphError'>>;
  variableDebtTokens?: Resolver<Array<ResolversTypes['VariableDebtToken']>, ParentType, ContextType, RequireFields<QueryvariableDebtTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  stableDebtToken?: Resolver<Maybe<ResolversTypes['StableDebtToken']>, ParentType, ContextType, RequireFields<QuerystableDebtTokenArgs, 'id' | 'subgraphError'>>;
  stableDebtTokens?: Resolver<Array<ResolversTypes['StableDebtToken']>, ParentType, ContextType, RequireFields<QuerystableDebtTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  referrer?: Resolver<Maybe<ResolversTypes['Referrer']>, ParentType, ContextType, RequireFields<QueryreferrerArgs, 'id' | 'subgraphError'>>;
  referrers?: Resolver<Array<ResolversTypes['Referrer']>, ParentType, ContextType, RequireFields<QueryreferrersArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  redeemUnderlying?: Resolver<Maybe<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<QueryredeemUnderlyingArgs, 'id' | 'subgraphError'>>;
  redeemUnderlyings?: Resolver<Array<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<QueryredeemUnderlyingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrow?: Resolver<Maybe<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowArgs, 'id' | 'subgraphError'>>;
  borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageAsCollateral?: Resolver<Maybe<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<QueryusageAsCollateralArgs, 'id' | 'subgraphError'>>;
  usageAsCollaterals?: Resolver<Array<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<QueryusageAsCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebalanceStableBorrowRate?: Resolver<Maybe<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<QueryrebalanceStableBorrowRateArgs, 'id' | 'subgraphError'>>;
  rebalanceStableBorrowRates?: Resolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<QueryrebalanceStableBorrowRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  repay?: Resolver<Maybe<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepayArgs, 'id' | 'subgraphError'>>;
  repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: Resolver<Maybe<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: Resolver<Array<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidationCall?: Resolver<Maybe<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<QueryliquidationCallArgs, 'id' | 'subgraphError'>>;
  liquidationCalls?: Resolver<Array<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<QueryliquidationCallsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserveConfigurationHistoryItem?: Resolver<Maybe<ResolversTypes['ReserveConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<QueryreserveConfigurationHistoryItemArgs, 'id' | 'subgraphError'>>;
  reserveConfigurationHistoryItems?: Resolver<Array<ResolversTypes['ReserveConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<QueryreserveConfigurationHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserveParamsHistoryItem?: Resolver<Maybe<ResolversTypes['ReserveParamsHistoryItem']>, ParentType, ContextType, RequireFields<QueryreserveParamsHistoryItemArgs, 'id' | 'subgraphError'>>;
  reserveParamsHistoryItems?: Resolver<Array<ResolversTypes['ReserveParamsHistoryItem']>, ParentType, ContextType, RequireFields<QueryreserveParamsHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  incentivesController?: Resolver<Maybe<ResolversTypes['IncentivesController']>, ParentType, ContextType, RequireFields<QueryincentivesControllerArgs, 'id' | 'subgraphError'>>;
  incentivesControllers?: Resolver<Array<ResolversTypes['IncentivesController']>, ParentType, ContextType, RequireFields<QueryincentivesControllersArgs, 'skip' | 'first' | 'subgraphError'>>;
  incentivizedAction?: Resolver<Maybe<ResolversTypes['IncentivizedAction']>, ParentType, ContextType, RequireFields<QueryincentivizedActionArgs, 'id' | 'subgraphError'>>;
  incentivizedActions?: Resolver<Array<ResolversTypes['IncentivizedAction']>, ParentType, ContextType, RequireFields<QueryincentivizedActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimIncentiveCall?: Resolver<Maybe<ResolversTypes['ClaimIncentiveCall']>, ParentType, ContextType, RequireFields<QueryclaimIncentiveCallArgs, 'id' | 'subgraphError'>>;
  claimIncentiveCalls?: Resolver<Array<ResolversTypes['ClaimIncentiveCall']>, ParentType, ContextType, RequireFields<QueryclaimIncentiveCallsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mapAssetPool?: Resolver<Maybe<ResolversTypes['MapAssetPool']>, ParentType, ContextType, RequireFields<QuerymapAssetPoolArgs, 'id' | 'subgraphError'>>;
  mapAssetPools?: Resolver<Array<ResolversTypes['MapAssetPool']>, ParentType, ContextType, RequireFields<QuerymapAssetPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserve?: Resolver<Maybe<ResolversTypes['Reserve']>, ParentType, ContextType, RequireFields<QueryreserveArgs, 'id' | 'subgraphError'>>;
  reserves?: Resolver<Array<ResolversTypes['Reserve']>, ParentType, ContextType, RequireFields<QueryreservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  wethreserve?: Resolver<Maybe<ResolversTypes['WETHReserve']>, ParentType, ContextType, RequireFields<QuerywethreserveArgs, 'id' | 'subgraphError'>>;
  wethreserves?: Resolver<Array<ResolversTypes['WETHReserve']>, ParentType, ContextType, RequireFields<QuerywethreservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  atokenBalanceHistoryItem?: Resolver<Maybe<ResolversTypes['ATokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QueryatokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  atokenBalanceHistoryItems?: Resolver<Array<ResolversTypes['ATokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QueryatokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  vtokenBalanceHistoryItem?: Resolver<Maybe<ResolversTypes['VTokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QueryvtokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  vtokenBalanceHistoryItems?: Resolver<Array<ResolversTypes['VTokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QueryvtokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stokenBalanceHistoryItem?: Resolver<Maybe<ResolversTypes['STokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QuerystokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  stokenBalanceHistoryItems?: Resolver<Array<ResolversTypes['STokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<QuerystokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stableTokenDelegatedAllowance?: Resolver<Maybe<ResolversTypes['StableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<QuerystableTokenDelegatedAllowanceArgs, 'id' | 'subgraphError'>>;
  stableTokenDelegatedAllowances?: Resolver<Array<ResolversTypes['StableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<QuerystableTokenDelegatedAllowancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  variableTokenDelegatedAllowance?: Resolver<Maybe<ResolversTypes['VariableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<QueryvariableTokenDelegatedAllowanceArgs, 'id' | 'subgraphError'>>;
  variableTokenDelegatedAllowances?: Resolver<Array<ResolversTypes['VariableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<QueryvariableTokenDelegatedAllowancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userReserve?: Resolver<Maybe<ResolversTypes['UserReserve']>, ParentType, ContextType, RequireFields<QueryuserReserveArgs, 'id' | 'subgraphError'>>;
  userReserves?: Resolver<Array<ResolversTypes['UserReserve']>, ParentType, ContextType, RequireFields<QueryuserReservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapHistory?: Resolver<Maybe<ResolversTypes['SwapHistory']>, ParentType, ContextType, RequireFields<QueryswapHistoryArgs, 'id' | 'subgraphError'>>;
  swapHistories?: Resolver<Array<ResolversTypes['SwapHistory']>, ParentType, ContextType, RequireFields<QueryswapHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userTransaction?: Resolver<Maybe<ResolversTypes['UserTransaction']>, ParentType, ContextType, RequireFields<QueryuserTransactionArgs, 'id' | 'subgraphError'>>;
  userTransactions?: Resolver<Array<ResolversTypes['UserTransaction']>, ParentType, ContextType, RequireFields<QueryuserTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RebalanceStableBorrowRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RebalanceStableBorrowRate'] = ResolversParentTypes['RebalanceStableBorrowRate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  borrowRateFrom?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowRateTo?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedeemUnderlyingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RedeemUnderlying'] = ResolversParentTypes['RedeemUnderlying']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReferrerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Referrer'] = ResolversParentTypes['Referrer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<ReferrerdepositsArgs, 'skip' | 'first'>>;
  borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<ReferrerborrowsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RepayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Repay'] = ResolversParentTypes['Repay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  repayer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReserveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Reserve'] = ResolversParentTypes['Reserve']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  underlyingAsset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  usageAsCollateralEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  borrowingEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stableBorrowRateEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFrozen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['PriceOracleAsset'], ParentType, ContextType>;
  reserveInterestRateStrategy?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  optimalUtilisationRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableRateSlope1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableRateSlope2?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stableRateSlope1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stableRateSlope2?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  baseVariableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  baseLTVasCollateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveLiquidationThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveLiquidationBonus?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  utilizationRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalATokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidityAsCollateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  availableLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPrincipalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalScaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCurrentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDeposits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageStableRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableBorrowIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aToken?: Resolver<ResolversTypes['AToken'], ParentType, ContextType>;
  vToken?: Resolver<ResolversTypes['VToken'], ParentType, ContextType>;
  sToken?: Resolver<ResolversTypes['SToken'], ParentType, ContextType>;
  reserveFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stableDebtLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  aEmissionPerSecond?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vEmissionPerSecond?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sEmissionPerSecond?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aTokenIncentivesIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vTokenIncentivesIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sTokenIncentivesIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lifetimeLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimePrincipalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeScaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeCurrentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeRepayments?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeWithdrawals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeBorrows?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeLiquidated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeFlashLoans?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeFlashLoanPremium?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeDepositorsInterestEarned?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeReserveFactorAccrued?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userReserves?: Resolver<Array<ResolversTypes['UserReserve']>, ParentType, ContextType, RequireFields<ReserveuserReservesArgs, 'skip' | 'first'>>;
  depositHistory?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<ReservedepositHistoryArgs, 'skip' | 'first'>>;
  redeemUnderlyingHistory?: Resolver<Array<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<ReserveredeemUnderlyingHistoryArgs, 'skip' | 'first'>>;
  borrowHistory?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<ReserveborrowHistoryArgs, 'skip' | 'first'>>;
  usageAsCollateralHistory?: Resolver<Array<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<ReserveusageAsCollateralHistoryArgs, 'skip' | 'first'>>;
  swapHistory?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<ReserveswapHistoryArgs, 'skip' | 'first'>>;
  rebalanceStableBorrowRateHistory?: Resolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<ReserverebalanceStableBorrowRateHistoryArgs, 'skip' | 'first'>>;
  repayHistory?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<ReserverepayHistoryArgs, 'skip' | 'first'>>;
  flashLoanHistory?: Resolver<Array<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<ReserveflashLoanHistoryArgs, 'skip' | 'first'>>;
  liquidationCallHistory?: Resolver<Array<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<ReserveliquidationCallHistoryArgs, 'skip' | 'first'>>;
  paramsHistory?: Resolver<Array<ResolversTypes['ReserveParamsHistoryItem']>, ParentType, ContextType, RequireFields<ReserveparamsHistoryArgs, 'skip' | 'first'>>;
  configurationHistory?: Resolver<Array<ResolversTypes['ReserveConfigurationHistoryItem']>, ParentType, ContextType, RequireFields<ReserveconfigurationHistoryArgs, 'skip' | 'first'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<ReservedepositsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReserveConfigurationHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReserveConfigurationHistoryItem'] = ResolversParentTypes['ReserveConfigurationHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  usageAsCollateralEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  borrowingEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stableBorrowRateEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFrozen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reserveInterestRateStrategy?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  baseLTVasCollateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveLiquidationThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveLiquidationBonus?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReserveParamsHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReserveParamsHistoryItem'] = ResolversParentTypes['ReserveParamsHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  variableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableBorrowIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  utilizationRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  stableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageStableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalATokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidityAsCollateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  availableLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceInEth?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceInUsd?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalScaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCurrentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPrincipalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimePrincipalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeScaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeCurrentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeRepayments?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeWithdrawals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeBorrows?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeLiquidated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeFlashLoans?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeFlashLoanPremium?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeReserveFactorAccrued?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeDepositorsInterestEarned?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type STokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SToken'] = ResolversParentTypes['SToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  underlyingAssetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAssetDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenContractImpl?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type STokenBalanceHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['STokenBalanceHistoryItem'] = ResolversParentTypes['STokenBalanceHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  principalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  avgStableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StableDebtTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StableDebtToken'] = ResolversParentTypes['StableDebtToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  underlyingAssetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAssetDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StableTokenDelegatedAllowanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StableTokenDelegatedAllowance'] = ResolversParentTypes['StableTokenDelegatedAllowance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  toUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  amountAllowed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contractToPoolMapping?: SubscriptionResolver<Maybe<ResolversTypes['ContractToPoolMapping']>, "contractToPoolMapping", ParentType, ContextType, RequireFields<SubscriptioncontractToPoolMappingArgs, 'id' | 'subgraphError'>>;
  contractToPoolMappings?: SubscriptionResolver<Array<ResolversTypes['ContractToPoolMapping']>, "contractToPoolMappings", ParentType, ContextType, RequireFields<SubscriptioncontractToPoolMappingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolConfigurationHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['PoolConfigurationHistoryItem']>, "poolConfigurationHistoryItem", ParentType, ContextType, RequireFields<SubscriptionpoolConfigurationHistoryItemArgs, 'id' | 'subgraphError'>>;
  poolConfigurationHistoryItems?: SubscriptionResolver<Array<ResolversTypes['PoolConfigurationHistoryItem']>, "poolConfigurationHistoryItems", ParentType, ContextType, RequireFields<SubscriptionpoolConfigurationHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['PriceHistoryItem']>, "priceHistoryItem", ParentType, ContextType, RequireFields<SubscriptionpriceHistoryItemArgs, 'id' | 'subgraphError'>>;
  priceHistoryItems?: SubscriptionResolver<Array<ResolversTypes['PriceHistoryItem']>, "priceHistoryItems", ParentType, ContextType, RequireFields<SubscriptionpriceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usdEthPriceHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['UsdEthPriceHistoryItem']>, "usdEthPriceHistoryItem", ParentType, ContextType, RequireFields<SubscriptionusdEthPriceHistoryItemArgs, 'id' | 'subgraphError'>>;
  usdEthPriceHistoryItems?: SubscriptionResolver<Array<ResolversTypes['UsdEthPriceHistoryItem']>, "usdEthPriceHistoryItems", ParentType, ContextType, RequireFields<SubscriptionusdEthPriceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  chainlinkENS?: SubscriptionResolver<Maybe<ResolversTypes['ChainlinkENS']>, "chainlinkENS", ParentType, ContextType, RequireFields<SubscriptionchainlinkENSArgs, 'id' | 'subgraphError'>>;
  chainlinkENSs?: SubscriptionResolver<Array<ResolversTypes['ChainlinkENS']>, "chainlinkENSs", ParentType, ContextType, RequireFields<SubscriptionchainlinkENSsArgs, 'skip' | 'first' | 'subgraphError'>>;
  chainlinkAggregator?: SubscriptionResolver<Maybe<ResolversTypes['ChainlinkAggregator']>, "chainlinkAggregator", ParentType, ContextType, RequireFields<SubscriptionchainlinkAggregatorArgs, 'id' | 'subgraphError'>>;
  chainlinkAggregators?: SubscriptionResolver<Array<ResolversTypes['ChainlinkAggregator']>, "chainlinkAggregators", ParentType, ContextType, RequireFields<SubscriptionchainlinkAggregatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceOracleAsset?: SubscriptionResolver<Maybe<ResolversTypes['PriceOracleAsset']>, "priceOracleAsset", ParentType, ContextType, RequireFields<SubscriptionpriceOracleAssetArgs, 'id' | 'subgraphError'>>;
  priceOracleAssets?: SubscriptionResolver<Array<ResolversTypes['PriceOracleAsset']>, "priceOracleAssets", ParentType, ContextType, RequireFields<SubscriptionpriceOracleAssetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceOracle?: SubscriptionResolver<Maybe<ResolversTypes['PriceOracle']>, "priceOracle", ParentType, ContextType, RequireFields<SubscriptionpriceOracleArgs, 'id' | 'subgraphError'>>;
  priceOracles?: SubscriptionResolver<Array<ResolversTypes['PriceOracle']>, "priceOracles", ParentType, ContextType, RequireFields<SubscriptionpriceOraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  stoken?: SubscriptionResolver<Maybe<ResolversTypes['SToken']>, "stoken", ParentType, ContextType, RequireFields<SubscriptionstokenArgs, 'id' | 'subgraphError'>>;
  stokens?: SubscriptionResolver<Array<ResolversTypes['SToken']>, "stokens", ParentType, ContextType, RequireFields<SubscriptionstokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  vtoken?: SubscriptionResolver<Maybe<ResolversTypes['VToken']>, "vtoken", ParentType, ContextType, RequireFields<SubscriptionvtokenArgs, 'id' | 'subgraphError'>>;
  vtokens?: SubscriptionResolver<Array<ResolversTypes['VToken']>, "vtokens", ParentType, ContextType, RequireFields<SubscriptionvtokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  atoken?: SubscriptionResolver<Maybe<ResolversTypes['AToken']>, "atoken", ParentType, ContextType, RequireFields<SubscriptionatokenArgs, 'id' | 'subgraphError'>>;
  atokens?: SubscriptionResolver<Array<ResolversTypes['AToken']>, "atokens", ParentType, ContextType, RequireFields<SubscriptionatokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  variableDebtToken?: SubscriptionResolver<Maybe<ResolversTypes['VariableDebtToken']>, "variableDebtToken", ParentType, ContextType, RequireFields<SubscriptionvariableDebtTokenArgs, 'id' | 'subgraphError'>>;
  variableDebtTokens?: SubscriptionResolver<Array<ResolversTypes['VariableDebtToken']>, "variableDebtTokens", ParentType, ContextType, RequireFields<SubscriptionvariableDebtTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  stableDebtToken?: SubscriptionResolver<Maybe<ResolversTypes['StableDebtToken']>, "stableDebtToken", ParentType, ContextType, RequireFields<SubscriptionstableDebtTokenArgs, 'id' | 'subgraphError'>>;
  stableDebtTokens?: SubscriptionResolver<Array<ResolversTypes['StableDebtToken']>, "stableDebtTokens", ParentType, ContextType, RequireFields<SubscriptionstableDebtTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  referrer?: SubscriptionResolver<Maybe<ResolversTypes['Referrer']>, "referrer", ParentType, ContextType, RequireFields<SubscriptionreferrerArgs, 'id' | 'subgraphError'>>;
  referrers?: SubscriptionResolver<Array<ResolversTypes['Referrer']>, "referrers", ParentType, ContextType, RequireFields<SubscriptionreferrersArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
  deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  redeemUnderlying?: SubscriptionResolver<Maybe<ResolversTypes['RedeemUnderlying']>, "redeemUnderlying", ParentType, ContextType, RequireFields<SubscriptionredeemUnderlyingArgs, 'id' | 'subgraphError'>>;
  redeemUnderlyings?: SubscriptionResolver<Array<ResolversTypes['RedeemUnderlying']>, "redeemUnderlyings", ParentType, ContextType, RequireFields<SubscriptionredeemUnderlyingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrow?: SubscriptionResolver<Maybe<ResolversTypes['Borrow']>, "borrow", ParentType, ContextType, RequireFields<SubscriptionborrowArgs, 'id' | 'subgraphError'>>;
  borrows?: SubscriptionResolver<Array<ResolversTypes['Borrow']>, "borrows", ParentType, ContextType, RequireFields<SubscriptionborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageAsCollateral?: SubscriptionResolver<Maybe<ResolversTypes['UsageAsCollateral']>, "usageAsCollateral", ParentType, ContextType, RequireFields<SubscriptionusageAsCollateralArgs, 'id' | 'subgraphError'>>;
  usageAsCollaterals?: SubscriptionResolver<Array<ResolversTypes['UsageAsCollateral']>, "usageAsCollaterals", ParentType, ContextType, RequireFields<SubscriptionusageAsCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebalanceStableBorrowRate?: SubscriptionResolver<Maybe<ResolversTypes['RebalanceStableBorrowRate']>, "rebalanceStableBorrowRate", ParentType, ContextType, RequireFields<SubscriptionrebalanceStableBorrowRateArgs, 'id' | 'subgraphError'>>;
  rebalanceStableBorrowRates?: SubscriptionResolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, "rebalanceStableBorrowRates", ParentType, ContextType, RequireFields<SubscriptionrebalanceStableBorrowRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  repay?: SubscriptionResolver<Maybe<ResolversTypes['Repay']>, "repay", ParentType, ContextType, RequireFields<SubscriptionrepayArgs, 'id' | 'subgraphError'>>;
  repays?: SubscriptionResolver<Array<ResolversTypes['Repay']>, "repays", ParentType, ContextType, RequireFields<SubscriptionrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: SubscriptionResolver<Maybe<ResolversTypes['FlashLoan']>, "flashLoan", ParentType, ContextType, RequireFields<SubscriptionflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: SubscriptionResolver<Array<ResolversTypes['FlashLoan']>, "flashLoans", ParentType, ContextType, RequireFields<SubscriptionflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidationCall?: SubscriptionResolver<Maybe<ResolversTypes['LiquidationCall']>, "liquidationCall", ParentType, ContextType, RequireFields<SubscriptionliquidationCallArgs, 'id' | 'subgraphError'>>;
  liquidationCalls?: SubscriptionResolver<Array<ResolversTypes['LiquidationCall']>, "liquidationCalls", ParentType, ContextType, RequireFields<SubscriptionliquidationCallsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserveConfigurationHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['ReserveConfigurationHistoryItem']>, "reserveConfigurationHistoryItem", ParentType, ContextType, RequireFields<SubscriptionreserveConfigurationHistoryItemArgs, 'id' | 'subgraphError'>>;
  reserveConfigurationHistoryItems?: SubscriptionResolver<Array<ResolversTypes['ReserveConfigurationHistoryItem']>, "reserveConfigurationHistoryItems", ParentType, ContextType, RequireFields<SubscriptionreserveConfigurationHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserveParamsHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['ReserveParamsHistoryItem']>, "reserveParamsHistoryItem", ParentType, ContextType, RequireFields<SubscriptionreserveParamsHistoryItemArgs, 'id' | 'subgraphError'>>;
  reserveParamsHistoryItems?: SubscriptionResolver<Array<ResolversTypes['ReserveParamsHistoryItem']>, "reserveParamsHistoryItems", ParentType, ContextType, RequireFields<SubscriptionreserveParamsHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  incentivesController?: SubscriptionResolver<Maybe<ResolversTypes['IncentivesController']>, "incentivesController", ParentType, ContextType, RequireFields<SubscriptionincentivesControllerArgs, 'id' | 'subgraphError'>>;
  incentivesControllers?: SubscriptionResolver<Array<ResolversTypes['IncentivesController']>, "incentivesControllers", ParentType, ContextType, RequireFields<SubscriptionincentivesControllersArgs, 'skip' | 'first' | 'subgraphError'>>;
  incentivizedAction?: SubscriptionResolver<Maybe<ResolversTypes['IncentivizedAction']>, "incentivizedAction", ParentType, ContextType, RequireFields<SubscriptionincentivizedActionArgs, 'id' | 'subgraphError'>>;
  incentivizedActions?: SubscriptionResolver<Array<ResolversTypes['IncentivizedAction']>, "incentivizedActions", ParentType, ContextType, RequireFields<SubscriptionincentivizedActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimIncentiveCall?: SubscriptionResolver<Maybe<ResolversTypes['ClaimIncentiveCall']>, "claimIncentiveCall", ParentType, ContextType, RequireFields<SubscriptionclaimIncentiveCallArgs, 'id' | 'subgraphError'>>;
  claimIncentiveCalls?: SubscriptionResolver<Array<ResolversTypes['ClaimIncentiveCall']>, "claimIncentiveCalls", ParentType, ContextType, RequireFields<SubscriptionclaimIncentiveCallsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mapAssetPool?: SubscriptionResolver<Maybe<ResolversTypes['MapAssetPool']>, "mapAssetPool", ParentType, ContextType, RequireFields<SubscriptionmapAssetPoolArgs, 'id' | 'subgraphError'>>;
  mapAssetPools?: SubscriptionResolver<Array<ResolversTypes['MapAssetPool']>, "mapAssetPools", ParentType, ContextType, RequireFields<SubscriptionmapAssetPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reserve?: SubscriptionResolver<Maybe<ResolversTypes['Reserve']>, "reserve", ParentType, ContextType, RequireFields<SubscriptionreserveArgs, 'id' | 'subgraphError'>>;
  reserves?: SubscriptionResolver<Array<ResolversTypes['Reserve']>, "reserves", ParentType, ContextType, RequireFields<SubscriptionreservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  wethreserve?: SubscriptionResolver<Maybe<ResolversTypes['WETHReserve']>, "wethreserve", ParentType, ContextType, RequireFields<SubscriptionwethreserveArgs, 'id' | 'subgraphError'>>;
  wethreserves?: SubscriptionResolver<Array<ResolversTypes['WETHReserve']>, "wethreserves", ParentType, ContextType, RequireFields<SubscriptionwethreservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  atokenBalanceHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['ATokenBalanceHistoryItem']>, "atokenBalanceHistoryItem", ParentType, ContextType, RequireFields<SubscriptionatokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  atokenBalanceHistoryItems?: SubscriptionResolver<Array<ResolversTypes['ATokenBalanceHistoryItem']>, "atokenBalanceHistoryItems", ParentType, ContextType, RequireFields<SubscriptionatokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  vtokenBalanceHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['VTokenBalanceHistoryItem']>, "vtokenBalanceHistoryItem", ParentType, ContextType, RequireFields<SubscriptionvtokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  vtokenBalanceHistoryItems?: SubscriptionResolver<Array<ResolversTypes['VTokenBalanceHistoryItem']>, "vtokenBalanceHistoryItems", ParentType, ContextType, RequireFields<SubscriptionvtokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stokenBalanceHistoryItem?: SubscriptionResolver<Maybe<ResolversTypes['STokenBalanceHistoryItem']>, "stokenBalanceHistoryItem", ParentType, ContextType, RequireFields<SubscriptionstokenBalanceHistoryItemArgs, 'id' | 'subgraphError'>>;
  stokenBalanceHistoryItems?: SubscriptionResolver<Array<ResolversTypes['STokenBalanceHistoryItem']>, "stokenBalanceHistoryItems", ParentType, ContextType, RequireFields<SubscriptionstokenBalanceHistoryItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stableTokenDelegatedAllowance?: SubscriptionResolver<Maybe<ResolversTypes['StableTokenDelegatedAllowance']>, "stableTokenDelegatedAllowance", ParentType, ContextType, RequireFields<SubscriptionstableTokenDelegatedAllowanceArgs, 'id' | 'subgraphError'>>;
  stableTokenDelegatedAllowances?: SubscriptionResolver<Array<ResolversTypes['StableTokenDelegatedAllowance']>, "stableTokenDelegatedAllowances", ParentType, ContextType, RequireFields<SubscriptionstableTokenDelegatedAllowancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  variableTokenDelegatedAllowance?: SubscriptionResolver<Maybe<ResolversTypes['VariableTokenDelegatedAllowance']>, "variableTokenDelegatedAllowance", ParentType, ContextType, RequireFields<SubscriptionvariableTokenDelegatedAllowanceArgs, 'id' | 'subgraphError'>>;
  variableTokenDelegatedAllowances?: SubscriptionResolver<Array<ResolversTypes['VariableTokenDelegatedAllowance']>, "variableTokenDelegatedAllowances", ParentType, ContextType, RequireFields<SubscriptionvariableTokenDelegatedAllowancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userReserve?: SubscriptionResolver<Maybe<ResolversTypes['UserReserve']>, "userReserve", ParentType, ContextType, RequireFields<SubscriptionuserReserveArgs, 'id' | 'subgraphError'>>;
  userReserves?: SubscriptionResolver<Array<ResolversTypes['UserReserve']>, "userReserves", ParentType, ContextType, RequireFields<SubscriptionuserReservesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapHistory?: SubscriptionResolver<Maybe<ResolversTypes['SwapHistory']>, "swapHistory", ParentType, ContextType, RequireFields<SubscriptionswapHistoryArgs, 'id' | 'subgraphError'>>;
  swapHistories?: SubscriptionResolver<Array<ResolversTypes['SwapHistory']>, "swapHistories", ParentType, ContextType, RequireFields<SubscriptionswapHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userTransaction?: SubscriptionResolver<Maybe<ResolversTypes['UserTransaction']>, "userTransaction", ParentType, ContextType, RequireFields<SubscriptionuserTransactionArgs, 'id' | 'subgraphError'>>;
  userTransactions?: SubscriptionResolver<Array<ResolversTypes['UserTransaction']>, "userTransactions", ParentType, ContextType, RequireFields<SubscriptionuserTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  borrowRateModeFrom?: Resolver<ResolversTypes['BorrowRateMode'], ParentType, ContextType>;
  borrowRateModeTo?: Resolver<ResolversTypes['BorrowRateMode'], ParentType, ContextType>;
  stableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  variableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapHistory'] = ResolversParentTypes['SwapHistory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromAsset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toAsset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  receivedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  swapType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsageAsCollateralResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageAsCollateral'] = ResolversParentTypes['UsageAsCollateral']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsdEthPriceHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsdEthPriceHistoryItem'] = ResolversParentTypes['UsdEthPriceHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracle?: Resolver<ResolversTypes['PriceOracle'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  borrowedReservesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unclaimedRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  incentivesLastUpdated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reserves?: Resolver<Array<ResolversTypes['UserReserve']>, ParentType, ContextType, RequireFields<UserreservesArgs, 'skip' | 'first'>>;
  depositHistory?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<UserdepositHistoryArgs, 'skip' | 'first'>>;
  redeemUnderlyingHistory?: Resolver<Array<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<UserredeemUnderlyingHistoryArgs, 'skip' | 'first'>>;
  usageAsCollateralHistory?: Resolver<Array<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<UserusageAsCollateralHistoryArgs, 'skip' | 'first'>>;
  borrowHistory?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<UserborrowHistoryArgs, 'skip' | 'first'>>;
  swapHistory?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<UserswapHistoryArgs, 'skip' | 'first'>>;
  rebalanceStableBorrowRateHistory?: Resolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<UserrebalanceStableBorrowRateHistoryArgs, 'skip' | 'first'>>;
  repayHistory?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<UserrepayHistoryArgs, 'skip' | 'first'>>;
  liquidationCallHistory?: Resolver<Array<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<UserliquidationCallHistoryArgs, 'skip' | 'first'>>;
  incentivizedActions?: Resolver<Array<ResolversTypes['IncentivizedAction']>, ParentType, ContextType, RequireFields<UserincentivizedActionsArgs, 'skip' | 'first'>>;
  claimIncentives?: Resolver<Array<ResolversTypes['ClaimIncentiveCall']>, ParentType, ContextType, RequireFields<UserclaimIncentivesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserReserveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserReserve'] = ResolversParentTypes['UserReserve']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['Reserve'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  usageAsCollateralEnabledOnUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  scaledATokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentATokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  principalStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentStableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentTotalDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  oldStableBorrowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stableBorrowLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variableBorrowIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aTokenincentivesUserIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vTokenincentivesUserIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sTokenincentivesUserIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sIncentivesLastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stableTokenDelegatedAllowances?: Resolver<Array<ResolversTypes['StableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<UserReservestableTokenDelegatedAllowancesArgs, 'skip' | 'first'>>;
  variableTokenDelegatedAllowances?: Resolver<Array<ResolversTypes['VariableTokenDelegatedAllowance']>, ParentType, ContextType, RequireFields<UserReservevariableTokenDelegatedAllowancesArgs, 'skip' | 'first'>>;
  aTokenBalanceHistory?: Resolver<Array<ResolversTypes['ATokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<UserReserveaTokenBalanceHistoryArgs, 'skip' | 'first'>>;
  vTokenBalanceHistory?: Resolver<Array<ResolversTypes['VTokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<UserReservevTokenBalanceHistoryArgs, 'skip' | 'first'>>;
  sTokenBalanceHistory?: Resolver<Array<ResolversTypes['STokenBalanceHistoryItem']>, ParentType, ContextType, RequireFields<UserReservesTokenBalanceHistoryArgs, 'skip' | 'first'>>;
  usageAsCollateralHistory?: Resolver<Array<ResolversTypes['UsageAsCollateral']>, ParentType, ContextType, RequireFields<UserReserveusageAsCollateralHistoryArgs, 'skip' | 'first'>>;
  depositHistory?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<UserReservedepositHistoryArgs, 'skip' | 'first'>>;
  redeemUnderlyingHistory?: Resolver<Array<ResolversTypes['RedeemUnderlying']>, ParentType, ContextType, RequireFields<UserReserveredeemUnderlyingHistoryArgs, 'skip' | 'first'>>;
  borrowHistory?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<UserReserveborrowHistoryArgs, 'skip' | 'first'>>;
  swapHistory?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<UserReserveswapHistoryArgs, 'skip' | 'first'>>;
  rebalanceStableBorrowRateHistory?: Resolver<Array<ResolversTypes['RebalanceStableBorrowRate']>, ParentType, ContextType, RequireFields<UserReserverebalanceStableBorrowRateHistoryArgs, 'skip' | 'first'>>;
  repayHistory?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<UserReserverepayHistoryArgs, 'skip' | 'first'>>;
  liquidationCallHistory?: Resolver<Array<ResolversTypes['LiquidationCall']>, ParentType, ContextType, RequireFields<UserReserveliquidationCallHistoryArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserTransaction'] = ResolversParentTypes['UserTransaction']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Borrow' | 'Deposit' | 'LiquidationCall' | 'RebalanceStableBorrowRate' | 'RedeemUnderlying' | 'Repay' | 'Swap' | 'UsageAsCollateral', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type VTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VToken'] = ResolversParentTypes['VToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  underlyingAssetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAssetDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenContractImpl?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VTokenBalanceHistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VTokenBalanceHistoryItem'] = ResolversParentTypes['VTokenBalanceHistoryItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  scaledVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentVariableDebt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VariableDebtTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VariableDebtToken'] = ResolversParentTypes['VariableDebtToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  underlyingAssetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingAssetDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VariableTokenDelegatedAllowanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VariableTokenDelegatedAllowance'] = ResolversParentTypes['VariableTokenDelegatedAllowance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  toUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  amountAllowed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userReserve?: Resolver<ResolversTypes['UserReserve'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WETHReserveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WETHReserve'] = ResolversParentTypes['WETHReserve']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  AToken?: ATokenResolvers<ContextType>;
  ATokenBalanceHistoryItem?: ATokenBalanceHistoryItemResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Borrow?: BorrowResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  ChainlinkAggregator?: ChainlinkAggregatorResolvers<ContextType>;
  ChainlinkENS?: ChainlinkENSResolvers<ContextType>;
  ClaimIncentiveCall?: ClaimIncentiveCallResolvers<ContextType>;
  ContractToPoolMapping?: ContractToPoolMappingResolvers<ContextType>;
  Deposit?: DepositResolvers<ContextType>;
  FlashLoan?: FlashLoanResolvers<ContextType>;
  IncentivesController?: IncentivesControllerResolvers<ContextType>;
  IncentivizedAction?: IncentivizedActionResolvers<ContextType>;
  LiquidationCall?: LiquidationCallResolvers<ContextType>;
  MapAssetPool?: MapAssetPoolResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolConfigurationHistoryItem?: PoolConfigurationHistoryItemResolvers<ContextType>;
  PriceHistoryItem?: PriceHistoryItemResolvers<ContextType>;
  PriceOracle?: PriceOracleResolvers<ContextType>;
  PriceOracleAsset?: PriceOracleAssetResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RebalanceStableBorrowRate?: RebalanceStableBorrowRateResolvers<ContextType>;
  RedeemUnderlying?: RedeemUnderlyingResolvers<ContextType>;
  Referrer?: ReferrerResolvers<ContextType>;
  Repay?: RepayResolvers<ContextType>;
  Reserve?: ReserveResolvers<ContextType>;
  ReserveConfigurationHistoryItem?: ReserveConfigurationHistoryItemResolvers<ContextType>;
  ReserveParamsHistoryItem?: ReserveParamsHistoryItemResolvers<ContextType>;
  SToken?: STokenResolvers<ContextType>;
  STokenBalanceHistoryItem?: STokenBalanceHistoryItemResolvers<ContextType>;
  StableDebtToken?: StableDebtTokenResolvers<ContextType>;
  StableTokenDelegatedAllowance?: StableTokenDelegatedAllowanceResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  SwapHistory?: SwapHistoryResolvers<ContextType>;
  UsageAsCollateral?: UsageAsCollateralResolvers<ContextType>;
  UsdEthPriceHistoryItem?: UsdEthPriceHistoryItemResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserReserve?: UserReserveResolvers<ContextType>;
  UserTransaction?: UserTransactionResolvers<ContextType>;
  VToken?: VTokenResolvers<ContextType>;
  VTokenBalanceHistoryItem?: VTokenBalanceHistoryItemResolvers<ContextType>;
  VariableDebtToken?: VariableDebtTokenResolvers<ContextType>;
  VariableTokenDelegatedAllowance?: VariableTokenDelegatedAllowanceResolvers<ContextType>;
  WETHReserve?: WETHReserveResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = EthMainnetV2Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/eth-mainnet-v2/introspectionSchema":
      return import("./sources/eth-mainnet-v2/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const ethMainnetV2Transforms = [];
const additionalTypeDefs = [] as any[];
const ethMainnetV2Handler = new GraphqlHandler({
              name: "eth-mainnet-v2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/aave/protocol-v2","timeout":5000,"retry":2},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("eth-mainnet-v2"),
              logger: logger.child("eth-mainnet-v2"),
              importFn,
            });
ethMainnetV2Transforms[0] = new BlockTrackingTransform({
                  apiName: "eth-mainnet-v2",
                  config: {"validateSchema":false},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                });
sources[0] = {
          name: 'eth-mainnet-v2',
          handler: ethMainnetV2Handler,
          transforms: ethMainnetV2Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));