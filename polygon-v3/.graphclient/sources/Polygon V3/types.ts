// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PolygonV3Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type Action =
  | 'Supply'
  | 'RedeemUnderlying'
  | 'Repay'
  | 'Borrow'
  | 'SwapBorrowRate'
  | 'UsageAsCollateral'
  | 'RebalanceStableBorrowRate'
  | 'LiquidationCall';

export type BackUnbacked = {
  id: Scalars['ID'];
  pool: Pool;
  reserve: Reserve;
  userReserve: UserReserve;
  backer: User;
  amount: Scalars['BigInt'];
  fee: Scalars['BigInt'];
  lpFee: Scalars['BigInt'];
  protocolFee: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type BackUnbacked_filter = {
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
  backer?: InputMaybe<Scalars['String']>;
  backer_not?: InputMaybe<Scalars['String']>;
  backer_gt?: InputMaybe<Scalars['String']>;
  backer_lt?: InputMaybe<Scalars['String']>;
  backer_gte?: InputMaybe<Scalars['String']>;
  backer_lte?: InputMaybe<Scalars['String']>;
  backer_in?: InputMaybe<Array<Scalars['String']>>;
  backer_not_in?: InputMaybe<Array<Scalars['String']>>;
  backer_contains?: InputMaybe<Scalars['String']>;
  backer_contains_nocase?: InputMaybe<Scalars['String']>;
  backer_not_contains?: InputMaybe<Scalars['String']>;
  backer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  backer_starts_with?: InputMaybe<Scalars['String']>;
  backer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backer_not_starts_with?: InputMaybe<Scalars['String']>;
  backer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backer_ends_with?: InputMaybe<Scalars['String']>;
  backer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backer_not_ends_with?: InputMaybe<Scalars['String']>;
  backer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backer_?: InputMaybe<User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee?: InputMaybe<Scalars['BigInt']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee?: InputMaybe<Scalars['BigInt']>;
  protocolFee_not?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type BackUnbacked_orderBy =
  | 'id'
  | 'pool'
  | 'reserve'
  | 'userReserve'
  | 'backer'
  | 'amount'
  | 'fee'
  | 'lpFee'
  | 'protocolFee'
  | 'timestamp';

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
  borrowRateMode: Scalars['Int'];
  referrer?: Maybe<Referrer>;
  timestamp: Scalars['Int'];
  stableTokenDebt: Scalars['BigInt'];
  variableTokenDebt: Scalars['BigInt'];
  assetPriceUSD: Scalars['BigDecimal'];
};

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
  borrowRateMode?: InputMaybe<Scalars['Int']>;
  borrowRateMode_not?: InputMaybe<Scalars['Int']>;
  borrowRateMode_gt?: InputMaybe<Scalars['Int']>;
  borrowRateMode_lt?: InputMaybe<Scalars['Int']>;
  borrowRateMode_gte?: InputMaybe<Scalars['Int']>;
  borrowRateMode_lte?: InputMaybe<Scalars['Int']>;
  borrowRateMode_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowRateMode_not_in?: InputMaybe<Array<Scalars['Int']>>;
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

export type ClaimRewardsCall = {
  /**
   * txHash
   *
   */
  id: Scalars['ID'];
  rewardsController: RewardsController;
  user: User;
  amount: Scalars['BigInt'];
  to: User;
  caller: User;
};

export type ClaimRewardsCall_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardsController?: InputMaybe<Scalars['String']>;
  rewardsController_not?: InputMaybe<Scalars['String']>;
  rewardsController_gt?: InputMaybe<Scalars['String']>;
  rewardsController_lt?: InputMaybe<Scalars['String']>;
  rewardsController_gte?: InputMaybe<Scalars['String']>;
  rewardsController_lte?: InputMaybe<Scalars['String']>;
  rewardsController_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_contains?: InputMaybe<Scalars['String']>;
  rewardsController_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_?: InputMaybe<RewardsController_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ClaimRewardsCall_orderBy =
  | 'id'
  | 'rewardsController'
  | 'user'
  | 'amount'
  | 'to'
  | 'caller';

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

export type EModeCategory = {
  /**
   * id: categoryId
   *
   */
  id: Scalars['ID'];
  ltv: Scalars['BigInt'];
  liquidationThreshold: Scalars['BigInt'];
  liquidationBonus: Scalars['BigInt'];
  oracle: Scalars['Bytes'];
  label: Scalars['String'];
};

export type EModeCategory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ltv?: InputMaybe<Scalars['BigInt']>;
  ltv_not?: InputMaybe<Scalars['BigInt']>;
  ltv_gt?: InputMaybe<Scalars['BigInt']>;
  ltv_lt?: InputMaybe<Scalars['BigInt']>;
  ltv_gte?: InputMaybe<Scalars['BigInt']>;
  ltv_lte?: InputMaybe<Scalars['BigInt']>;
  ltv_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ltv_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationThreshold?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_not?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationBonus?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_not?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationBonus_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationBonus_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oracle?: InputMaybe<Scalars['Bytes']>;
  oracle_not?: InputMaybe<Scalars['Bytes']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oracle_contains?: InputMaybe<Scalars['Bytes']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  label?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type EModeCategory_orderBy =
  | 'id'
  | 'ltv'
  | 'liquidationThreshold'
  | 'liquidationBonus'
  | 'oracle'
  | 'label';

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
  lpFee: Scalars['BigInt'];
  protocolFee: Scalars['BigInt'];
  initiator: User;
  timestamp: Scalars['Int'];
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
  lpFee?: InputMaybe<Scalars['BigInt']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee?: InputMaybe<Scalars['BigInt']>;
  protocolFee_not?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'lpFee'
  | 'protocolFee'
  | 'initiator'
  | 'timestamp';

export type IsolationModeTotalDebtUpdated = {
  /**
   * tx hash
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  reserve: Reserve;
  isolatedDebt: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type IsolationModeTotalDebtUpdated_filter = {
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
  isolatedDebt?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_not?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_gt?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_lt?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_gte?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_lte?: InputMaybe<Scalars['BigInt']>;
  isolatedDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isolatedDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type IsolationModeTotalDebtUpdated_orderBy =
  | 'id'
  | 'pool'
  | 'reserve'
  | 'isolatedDebt'
  | 'timestamp';

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

export type MintUnbacked = {
  id: Scalars['ID'];
  pool: Pool;
  user: User;
  caller: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  referral: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type MintUnbacked_filter = {
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
  referral?: InputMaybe<Scalars['Int']>;
  referral_not?: InputMaybe<Scalars['Int']>;
  referral_gt?: InputMaybe<Scalars['Int']>;
  referral_lt?: InputMaybe<Scalars['Int']>;
  referral_gte?: InputMaybe<Scalars['Int']>;
  referral_lte?: InputMaybe<Scalars['Int']>;
  referral_in?: InputMaybe<Array<Scalars['Int']>>;
  referral_not_in?: InputMaybe<Array<Scalars['Int']>>;
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

export type MintUnbacked_orderBy =
  | 'id'
  | 'pool'
  | 'user'
  | 'caller'
  | 'reserve'
  | 'userReserve'
  | 'amount'
  | 'referral'
  | 'timestamp';

export type MintedToTreasury = {
  id: Scalars['ID'];
  pool: Pool;
  reserve: Reserve;
  amount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type MintedToTreasury_filter = {
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MintedToTreasury_orderBy =
  | 'id'
  | 'pool'
  | 'reserve'
  | 'amount'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['ID'];
  addressProviderId: Scalars['BigInt'];
  protocol: Protocol;
  pool?: Maybe<Scalars['Bytes']>;
  poolCollateralManager?: Maybe<Scalars['Bytes']>;
  poolConfiguratorImpl?: Maybe<Scalars['Bytes']>;
  poolImpl?: Maybe<Scalars['Bytes']>;
  poolConfigurator?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lastUpdateTimestamp: Scalars['Int'];
  bridgeProtocolFee?: Maybe<Scalars['BigInt']>;
  flashloanPremiumTotal?: Maybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol?: Maybe<Scalars['BigInt']>;
  reserves: Array<Reserve>;
  supplyHistory: Array<Supply>;
  mintUnbackedHistory: Array<MintUnbacked>;
  backUnbackedHistory: Array<BackUnbacked>;
  mintedToTreasuryHistory: Array<MintedToTreasury>;
  isolationModeTotalDebtUpdatedHistory: Array<IsolationModeTotalDebtUpdated>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<SwapBorrowRate>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  active: Scalars['Boolean'];
  paused: Scalars['Boolean'];
};


export type PoolreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reserve_filter>;
};


export type PoolsupplyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
};


export type PoolmintUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
};


export type PoolbackUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
};


export type PoolmintedToTreasuryHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedToTreasury_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedToTreasury_filter>;
};


export type PoolisolationModeTotalDebtUpdatedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IsolationModeTotalDebtUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
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
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  addressProviderId?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_not?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_gt?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_lt?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_gte?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_lte?: InputMaybe<Scalars['BigInt']>;
  addressProviderId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addressProviderId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  pool?: InputMaybe<Scalars['Bytes']>;
  pool_not?: InputMaybe<Scalars['Bytes']>;
  pool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pool_contains?: InputMaybe<Scalars['Bytes']>;
  pool_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolCollateralManager?: InputMaybe<Scalars['Bytes']>;
  poolCollateralManager_not?: InputMaybe<Scalars['Bytes']>;
  poolCollateralManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolCollateralManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolCollateralManager_contains?: InputMaybe<Scalars['Bytes']>;
  poolCollateralManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolConfiguratorImpl?: InputMaybe<Scalars['Bytes']>;
  poolConfiguratorImpl_not?: InputMaybe<Scalars['Bytes']>;
  poolConfiguratorImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolConfiguratorImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolConfiguratorImpl_contains?: InputMaybe<Scalars['Bytes']>;
  poolConfiguratorImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolImpl?: InputMaybe<Scalars['Bytes']>;
  poolImpl_not?: InputMaybe<Scalars['Bytes']>;
  poolImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolImpl_contains?: InputMaybe<Scalars['Bytes']>;
  poolImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolConfigurator?: InputMaybe<Scalars['Bytes']>;
  poolConfigurator_not?: InputMaybe<Scalars['Bytes']>;
  poolConfigurator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolConfigurator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolConfigurator_contains?: InputMaybe<Scalars['Bytes']>;
  poolConfigurator_not_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: InputMaybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars['Bytes']>;
  lastUpdateTimestamp?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  bridgeProtocolFee?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  bridgeProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgeProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanPremiumTotal?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_not?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_gt?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_lt?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_gte?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_lte?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanPremiumTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanPremiumToProtocol?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_not?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_gt?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_lt?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_gte?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_lte?: InputMaybe<Scalars['BigInt']>;
  flashloanPremiumToProtocol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanPremiumToProtocol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserves_?: InputMaybe<Reserve_filter>;
  supplyHistory_?: InputMaybe<Supply_filter>;
  mintUnbackedHistory_?: InputMaybe<MintUnbacked_filter>;
  backUnbackedHistory_?: InputMaybe<BackUnbacked_filter>;
  mintedToTreasuryHistory_?: InputMaybe<MintedToTreasury_filter>;
  isolationModeTotalDebtUpdatedHistory_?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<SwapBorrowRate_filter>;
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
  | 'addressProviderId'
  | 'protocol'
  | 'pool'
  | 'poolCollateralManager'
  | 'poolConfiguratorImpl'
  | 'poolImpl'
  | 'poolConfigurator'
  | 'proxyPriceProvider'
  | 'lastUpdateTimestamp'
  | 'bridgeProtocolFee'
  | 'flashloanPremiumTotal'
  | 'flashloanPremiumToProtocol'
  | 'reserves'
  | 'supplyHistory'
  | 'mintUnbackedHistory'
  | 'backUnbackedHistory'
  | 'mintedToTreasuryHistory'
  | 'isolationModeTotalDebtUpdatedHistory'
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
  baseCurrency: Scalars['Bytes'];
  baseCurrencyUnit: Scalars['BigInt'];
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
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracles: Array<PriceOracle>;
  subToken?: Maybe<SubToken>;
  subTokens: Array<SubToken>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  supply?: Maybe<Supply>;
  supplies: Array<Supply>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  swapBorrowRate?: Maybe<SwapBorrowRate>;
  swapBorrowRates: Array<SwapBorrowRate>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  isolationModeTotalDebtUpdated?: Maybe<IsolationModeTotalDebtUpdated>;
  isolationModeTotalDebtUpdateds: Array<IsolationModeTotalDebtUpdated>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  mintUnbacked?: Maybe<MintUnbacked>;
  mintUnbackeds: Array<MintUnbacked>;
  backUnbacked?: Maybe<BackUnbacked>;
  backUnbackeds: Array<BackUnbacked>;
  mintedToTreasury?: Maybe<MintedToTreasury>;
  mintedToTreasuries: Array<MintedToTreasury>;
  userEModeSet?: Maybe<UserEModeSet>;
  userEModeSets: Array<UserEModeSet>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  rewardFeedOracle?: Maybe<RewardFeedOracle>;
  rewardFeedOracles: Array<RewardFeedOracle>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  userReward?: Maybe<UserReward>;
  userRewards: Array<UserReward>;
  rewardsController?: Maybe<RewardsController>;
  rewardsControllers: Array<RewardsController>;
  rewardedAction?: Maybe<RewardedAction>;
  rewardedActions: Array<RewardedAction>;
  claimRewardsCall?: Maybe<ClaimRewardsCall>;
  claimRewardsCalls: Array<ClaimRewardsCall>;
  emodeCategory?: Maybe<EModeCategory>;
  emodeCategories: Array<EModeCategory>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  reserve?: Maybe<Reserve>;
  reserves: Array<Reserve>;
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


export type QuerysubTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubToken_filter>;
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


export type QuerysupplyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuppliesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
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


export type QueryswapBorrowRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapBorrowRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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


export type QueryisolationModeTotalDebtUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryisolationModeTotalDebtUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IsolationModeTotalDebtUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
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


export type QuerymintUnbackedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintUnbackedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybackUnbackedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybackUnbackedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedToTreasuryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedToTreasuriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedToTreasury_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedToTreasury_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserEModeSetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserEModeSetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserEModeSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserEModeSet_filter>;
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


export type QueryrewardFeedOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardFeedOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardFeedOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardFeedOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reward_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserRewardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserRewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReward_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardsControllerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardsControllersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardsController_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardsController_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardedActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardedAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimRewardsCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimRewardsCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRewardsCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRewardsCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryemodeCategoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryemodeCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EModeCategory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EModeCategory_filter>;
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
  supplies: Array<Supply>;
  borrows: Array<Borrow>;
};


export type ReferrersuppliesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
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
  supplies_?: InputMaybe<Supply_filter>;
  borrows_?: InputMaybe<Borrow_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Referrer_orderBy =
  | 'id'
  | 'supplies'
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
  useATokens: Scalars['Boolean'];
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
  useATokens?: InputMaybe<Scalars['Boolean']>;
  useATokens_not?: InputMaybe<Scalars['Boolean']>;
  useATokens_in?: InputMaybe<Array<Scalars['Boolean']>>;
  useATokens_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  | 'useATokens'
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
  totalSupplies: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  accruedToTreasury: Scalars['BigInt'];
  averageStableRate: Scalars['BigInt'];
  variableBorrowRate: Scalars['BigInt'];
  stableBorrowRate: Scalars['BigInt'];
  liquidityIndex: Scalars['BigInt'];
  variableBorrowIndex: Scalars['BigInt'];
  aToken: SubToken;
  vToken: SubToken;
  sToken: SubToken;
  reserveFactor: Scalars['BigInt'];
  lastUpdateTimestamp: Scalars['Int'];
  stableDebtLastUpdateTimestamp: Scalars['Int'];
  isPaused: Scalars['Boolean'];
  isDropped: Scalars['Boolean'];
  borrowCap?: Maybe<Scalars['BigInt']>;
  supplyCap?: Maybe<Scalars['BigInt']>;
  debtCeiling?: Maybe<Scalars['BigInt']>;
  unbackedMintCap?: Maybe<Scalars['BigInt']>;
  liquidationProtocolFee?: Maybe<Scalars['BigInt']>;
  borrowableInIsolation?: Maybe<Scalars['Boolean']>;
  eMode?: Maybe<EModeCategory>;
  siloedBorrowing: Scalars['Boolean'];
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
  lifetimeFlashLoanLPPremium: Scalars['BigInt'];
  lifetimeFlashLoanProtocolPremium: Scalars['BigInt'];
  lifetimePortalLPFee: Scalars['BigInt'];
  lifetimePortalProtocolFee: Scalars['BigInt'];
  lifetimeSuppliersInterestEarned: Scalars['BigInt'];
  lifetimeReserveFactorAccrued: Scalars['BigInt'];
  userReserves: Array<UserReserve>;
  supplyHistory: Array<Supply>;
  mintUnbackedHistory: Array<MintUnbacked>;
  backUnbackedHistory: Array<BackUnbacked>;
  mintedToTreasuryHistory: Array<MintedToTreasury>;
  isolationModeTotalDebtUpdatedHistory: Array<IsolationModeTotalDebtUpdated>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  swapHistory: Array<SwapBorrowRate>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  paramsHistory: Array<ReserveParamsHistoryItem>;
  configurationHistory: Array<ReserveConfigurationHistoryItem>;
  supplies: Array<Supply>;
};


export type ReserveuserReservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
};


export type ReservesupplyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
};


export type ReservemintUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
};


export type ReservebackUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
};


export type ReservemintedToTreasuryHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedToTreasury_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedToTreasury_filter>;
};


export type ReserveisolationModeTotalDebtUpdatedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IsolationModeTotalDebtUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
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
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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


export type ReservesuppliesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
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
  accruedToTreasury: Scalars['BigInt'];
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
  lifetimeFlashLoanLPPremium: Scalars['BigInt'];
  lifetimeFlashLoanProtocolPremium: Scalars['BigInt'];
  lifetimeReserveFactorAccrued: Scalars['BigInt'];
  lifetimePortalLPFee: Scalars['BigInt'];
  lifetimePortalProtocolFee: Scalars['BigInt'];
  lifetimeSuppliersInterestEarned: Scalars['BigInt'];
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
  accruedToTreasury?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_not?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_gt?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_lt?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_gte?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_lte?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accruedToTreasury_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  lifetimeFlashLoanLPPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanLPPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanProtocolPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanProtocolPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalLPFee?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalLPFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalProtocolFee?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeSuppliersInterestEarned?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeSuppliersInterestEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'accruedToTreasury'
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
  | 'lifetimeFlashLoanLPPremium'
  | 'lifetimeFlashLoanProtocolPremium'
  | 'lifetimeReserveFactorAccrued'
  | 'lifetimePortalLPFee'
  | 'lifetimePortalProtocolFee'
  | 'lifetimeSuppliersInterestEarned';

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
  totalSupplies?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_not?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupplies_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupplies_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_not?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accruedToTreasury?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_not?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_gt?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_lt?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_gte?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_lte?: InputMaybe<Scalars['BigInt']>;
  accruedToTreasury_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accruedToTreasury_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  aToken_?: InputMaybe<SubToken_filter>;
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
  vToken_?: InputMaybe<SubToken_filter>;
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
  sToken_?: InputMaybe<SubToken_filter>;
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
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDropped?: InputMaybe<Scalars['Boolean']>;
  isDropped_not?: InputMaybe<Scalars['Boolean']>;
  isDropped_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDropped_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowCap?: InputMaybe<Scalars['BigInt']>;
  borrowCap_not?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap?: InputMaybe<Scalars['BigInt']>;
  supplyCap_not?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  debtCeiling?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_not?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_gt?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_lt?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_gte?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_lte?: InputMaybe<Scalars['BigInt']>;
  debtCeiling_in?: InputMaybe<Array<Scalars['BigInt']>>;
  debtCeiling_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unbackedMintCap?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_not?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_gt?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_lt?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_gte?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_lte?: InputMaybe<Scalars['BigInt']>;
  unbackedMintCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unbackedMintCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationProtocolFee?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowableInIsolation?: InputMaybe<Scalars['Boolean']>;
  borrowableInIsolation_not?: InputMaybe<Scalars['Boolean']>;
  borrowableInIsolation_in?: InputMaybe<Array<Scalars['Boolean']>>;
  borrowableInIsolation_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  eMode?: InputMaybe<Scalars['String']>;
  eMode_not?: InputMaybe<Scalars['String']>;
  eMode_gt?: InputMaybe<Scalars['String']>;
  eMode_lt?: InputMaybe<Scalars['String']>;
  eMode_gte?: InputMaybe<Scalars['String']>;
  eMode_lte?: InputMaybe<Scalars['String']>;
  eMode_in?: InputMaybe<Array<Scalars['String']>>;
  eMode_not_in?: InputMaybe<Array<Scalars['String']>>;
  eMode_contains?: InputMaybe<Scalars['String']>;
  eMode_contains_nocase?: InputMaybe<Scalars['String']>;
  eMode_not_contains?: InputMaybe<Scalars['String']>;
  eMode_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eMode_starts_with?: InputMaybe<Scalars['String']>;
  eMode_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eMode_not_starts_with?: InputMaybe<Scalars['String']>;
  eMode_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eMode_ends_with?: InputMaybe<Scalars['String']>;
  eMode_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eMode_not_ends_with?: InputMaybe<Scalars['String']>;
  eMode_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eMode_?: InputMaybe<EModeCategory_filter>;
  siloedBorrowing?: InputMaybe<Scalars['Boolean']>;
  siloedBorrowing_not?: InputMaybe<Scalars['Boolean']>;
  siloedBorrowing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  siloedBorrowing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  lifetimeFlashLoanLPPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanLPPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanLPPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanProtocolPremium?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeFlashLoanProtocolPremium_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeFlashLoanProtocolPremium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalLPFee?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalLPFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalLPFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalProtocolFee?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimePortalProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimePortalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeSuppliersInterestEarned?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeSuppliersInterestEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeSuppliersInterestEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars['BigInt']>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userReserves_?: InputMaybe<UserReserve_filter>;
  supplyHistory_?: InputMaybe<Supply_filter>;
  mintUnbackedHistory_?: InputMaybe<MintUnbacked_filter>;
  backUnbackedHistory_?: InputMaybe<BackUnbacked_filter>;
  mintedToTreasuryHistory_?: InputMaybe<MintedToTreasury_filter>;
  isolationModeTotalDebtUpdatedHistory_?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  swapHistory_?: InputMaybe<SwapBorrowRate_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  flashLoanHistory_?: InputMaybe<FlashLoan_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  paramsHistory_?: InputMaybe<ReserveParamsHistoryItem_filter>;
  configurationHistory_?: InputMaybe<ReserveConfigurationHistoryItem_filter>;
  supplies_?: InputMaybe<Supply_filter>;
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
  | 'totalSupplies'
  | 'liquidityRate'
  | 'accruedToTreasury'
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
  | 'isPaused'
  | 'isDropped'
  | 'borrowCap'
  | 'supplyCap'
  | 'debtCeiling'
  | 'unbackedMintCap'
  | 'liquidationProtocolFee'
  | 'borrowableInIsolation'
  | 'eMode'
  | 'siloedBorrowing'
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
  | 'lifetimeFlashLoanLPPremium'
  | 'lifetimeFlashLoanProtocolPremium'
  | 'lifetimePortalLPFee'
  | 'lifetimePortalProtocolFee'
  | 'lifetimeSuppliersInterestEarned'
  | 'lifetimeReserveFactorAccrued'
  | 'userReserves'
  | 'supplyHistory'
  | 'mintUnbackedHistory'
  | 'backUnbackedHistory'
  | 'mintedToTreasuryHistory'
  | 'isolationModeTotalDebtUpdatedHistory'
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
  | 'supplies';

export type Reward = {
  /**
   * address of ic:asset:reward
   *
   */
  id: Scalars['ID'];
  rewardToken: Scalars['Bytes'];
  asset: SubToken;
  rewardTokenDecimals: Scalars['Int'];
  rewardFeedOracle: RewardFeedOracle;
  rewardTokenSymbol: Scalars['String'];
  index: Scalars['BigInt'];
  precision: Scalars['Int'];
  distributionEnd: Scalars['Int'];
  emissionsPerSecond: Scalars['BigInt'];
  rewardsController: RewardsController;
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RewardFeedOracle = {
  /**
   * address of reward
   *
   */
  id: Scalars['ID'];
  rewardFeedAddress: Scalars['Bytes'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RewardFeedOracle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardFeedAddress?: InputMaybe<Scalars['Bytes']>;
  rewardFeedAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardFeedAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardFeedAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardFeedAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardFeedAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RewardFeedOracle_orderBy =
  | 'id'
  | 'rewardFeedAddress'
  | 'createdAt'
  | 'updatedAt';

export type Reward_filter = {
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
  asset_?: InputMaybe<SubToken_filter>;
  rewardTokenDecimals?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_not?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_gt?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_lt?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_gte?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_lte?: InputMaybe<Scalars['Int']>;
  rewardTokenDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardFeedOracle?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_gt?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_lt?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_gte?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_lte?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_in?: InputMaybe<Array<Scalars['String']>>;
  rewardFeedOracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardFeedOracle_contains?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_contains?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_starts_with?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_ends_with?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardFeedOracle_?: InputMaybe<RewardFeedOracle_filter>;
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
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  precision?: InputMaybe<Scalars['Int']>;
  precision_not?: InputMaybe<Scalars['Int']>;
  precision_gt?: InputMaybe<Scalars['Int']>;
  precision_lt?: InputMaybe<Scalars['Int']>;
  precision_gte?: InputMaybe<Scalars['Int']>;
  precision_lte?: InputMaybe<Scalars['Int']>;
  precision_in?: InputMaybe<Array<Scalars['Int']>>;
  precision_not_in?: InputMaybe<Array<Scalars['Int']>>;
  distributionEnd?: InputMaybe<Scalars['Int']>;
  distributionEnd_not?: InputMaybe<Scalars['Int']>;
  distributionEnd_gt?: InputMaybe<Scalars['Int']>;
  distributionEnd_lt?: InputMaybe<Scalars['Int']>;
  distributionEnd_gte?: InputMaybe<Scalars['Int']>;
  distributionEnd_lte?: InputMaybe<Scalars['Int']>;
  distributionEnd_in?: InputMaybe<Array<Scalars['Int']>>;
  distributionEnd_not_in?: InputMaybe<Array<Scalars['Int']>>;
  emissionsPerSecond?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_not?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
  emissionsPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  emissionsPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsController?: InputMaybe<Scalars['String']>;
  rewardsController_not?: InputMaybe<Scalars['String']>;
  rewardsController_gt?: InputMaybe<Scalars['String']>;
  rewardsController_lt?: InputMaybe<Scalars['String']>;
  rewardsController_gte?: InputMaybe<Scalars['String']>;
  rewardsController_lte?: InputMaybe<Scalars['String']>;
  rewardsController_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_contains?: InputMaybe<Scalars['String']>;
  rewardsController_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_?: InputMaybe<RewardsController_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Reward_orderBy =
  | 'id'
  | 'rewardToken'
  | 'asset'
  | 'rewardTokenDecimals'
  | 'rewardFeedOracle'
  | 'rewardTokenSymbol'
  | 'index'
  | 'precision'
  | 'distributionEnd'
  | 'emissionsPerSecond'
  | 'rewardsController'
  | 'createdAt'
  | 'updatedAt';

export type RewardedAction = {
  /**
   * txHash
   *
   */
  id: Scalars['ID'];
  rewardsController: RewardsController;
  user: User;
  amount: Scalars['BigInt'];
};

export type RewardedAction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardsController?: InputMaybe<Scalars['String']>;
  rewardsController_not?: InputMaybe<Scalars['String']>;
  rewardsController_gt?: InputMaybe<Scalars['String']>;
  rewardsController_lt?: InputMaybe<Scalars['String']>;
  rewardsController_gte?: InputMaybe<Scalars['String']>;
  rewardsController_lte?: InputMaybe<Scalars['String']>;
  rewardsController_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardsController_contains?: InputMaybe<Scalars['String']>;
  rewardsController_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains?: InputMaybe<Scalars['String']>;
  rewardsController_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardsController_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardsController_?: InputMaybe<RewardsController_filter>;
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

export type RewardedAction_orderBy =
  | 'id'
  | 'rewardsController'
  | 'user'
  | 'amount';

export type RewardsController = {
  /**
   * address of the incentives controller
   *
   */
  id: Scalars['ID'];
  rewards: Array<Reward>;
  rewardedActions: Array<RewardedAction>;
  claimIncentives: Array<ClaimRewardsCall>;
};


export type RewardsControllerrewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reward_filter>;
};


export type RewardsControllerrewardedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardedAction_filter>;
};


export type RewardsControllerclaimIncentivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRewardsCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRewardsCall_filter>;
};

export type RewardsController_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewards_?: InputMaybe<Reward_filter>;
  rewardedActions_?: InputMaybe<RewardedAction_filter>;
  claimIncentives_?: InputMaybe<ClaimRewardsCall_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RewardsController_orderBy =
  | 'id'
  | 'rewards'
  | 'rewardedActions'
  | 'claimIncentives';

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

export type SubToken = {
  /**
   * SubToken address
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  tokenContractImpl?: Maybe<Scalars['Bytes']>;
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
  rewards: Array<Reward>;
};


export type SubTokenrewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reward_filter>;
};

export type SubToken_filter = {
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
  tokenContractImpl?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenContractImpl_contains?: InputMaybe<Scalars['Bytes']>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  rewards_?: InputMaybe<Reward_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SubToken_orderBy =
  | 'id'
  | 'pool'
  | 'tokenContractImpl'
  | 'underlyingAssetAddress'
  | 'underlyingAssetDecimals'
  | 'rewards';

export type Subscription = {
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  contractToPoolMapping?: Maybe<ContractToPoolMapping>;
  contractToPoolMappings: Array<ContractToPoolMapping>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracles: Array<PriceOracle>;
  subToken?: Maybe<SubToken>;
  subTokens: Array<SubToken>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  supply?: Maybe<Supply>;
  supplies: Array<Supply>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  swapBorrowRate?: Maybe<SwapBorrowRate>;
  swapBorrowRates: Array<SwapBorrowRate>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  isolationModeTotalDebtUpdated?: Maybe<IsolationModeTotalDebtUpdated>;
  isolationModeTotalDebtUpdateds: Array<IsolationModeTotalDebtUpdated>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  mintUnbacked?: Maybe<MintUnbacked>;
  mintUnbackeds: Array<MintUnbacked>;
  backUnbacked?: Maybe<BackUnbacked>;
  backUnbackeds: Array<BackUnbacked>;
  mintedToTreasury?: Maybe<MintedToTreasury>;
  mintedToTreasuries: Array<MintedToTreasury>;
  userEModeSet?: Maybe<UserEModeSet>;
  userEModeSets: Array<UserEModeSet>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  rewardFeedOracle?: Maybe<RewardFeedOracle>;
  rewardFeedOracles: Array<RewardFeedOracle>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  userReward?: Maybe<UserReward>;
  userRewards: Array<UserReward>;
  rewardsController?: Maybe<RewardsController>;
  rewardsControllers: Array<RewardsController>;
  rewardedAction?: Maybe<RewardedAction>;
  rewardedActions: Array<RewardedAction>;
  claimRewardsCall?: Maybe<ClaimRewardsCall>;
  claimRewardsCalls: Array<ClaimRewardsCall>;
  emodeCategory?: Maybe<EModeCategory>;
  emodeCategories: Array<EModeCategory>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  reserve?: Maybe<Reserve>;
  reserves: Array<Reserve>;
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


export type SubscriptionsubTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubToken_filter>;
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


export type SubscriptionsupplyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuppliesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
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


export type SubscriptionswapBorrowRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapBorrowRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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


export type SubscriptionisolationModeTotalDebtUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionisolationModeTotalDebtUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IsolationModeTotalDebtUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IsolationModeTotalDebtUpdated_filter>;
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


export type SubscriptionmintUnbackedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintUnbackedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbackUnbackedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbackUnbackedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintedToTreasuryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintedToTreasuriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedToTreasury_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedToTreasury_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserEModeSetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserEModeSetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserEModeSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserEModeSet_filter>;
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


export type SubscriptionrewardFeedOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardFeedOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardFeedOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardFeedOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Reward_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserRewardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserRewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReward_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardsControllerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardsControllersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardsController_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardsController_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardedActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardedAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimRewardsCallArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimRewardsCallsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRewardsCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRewardsCall_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionemodeCategoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionemodeCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EModeCategory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EModeCategory_filter>;
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

export type Supply = UserTransaction & {
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
  referrer?: Maybe<Referrer>;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  assetPriceUSD: Scalars['BigDecimal'];
};

export type Supply_filter = {
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

export type Supply_orderBy =
  | 'id'
  | 'txHash'
  | 'action'
  | 'pool'
  | 'user'
  | 'caller'
  | 'reserve'
  | 'referrer'
  | 'userReserve'
  | 'amount'
  | 'timestamp'
  | 'assetPriceUSD';

export type SwapBorrowRate = UserTransaction & {
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
  borrowRateModeFrom: Scalars['Int'];
  borrowRateModeTo: Scalars['Int'];
  stableBorrowRate: Scalars['BigInt'];
  variableBorrowRate: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type SwapBorrowRate_filter = {
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
  borrowRateModeFrom?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_not?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_gt?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_lt?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_gte?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_lte?: InputMaybe<Scalars['Int']>;
  borrowRateModeFrom_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowRateModeFrom_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowRateModeTo?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_not?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_gt?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_lt?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_gte?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_lte?: InputMaybe<Scalars['Int']>;
  borrowRateModeTo_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowRateModeTo_not_in?: InputMaybe<Array<Scalars['Int']>>;
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

export type SwapBorrowRate_orderBy =
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
  rewardsLastUpdated: Scalars['Int'];
  rewards: Array<UserReward>;
  eModeCategoryId?: Maybe<EModeCategory>;
  reserves: Array<UserReserve>;
  supplyHistory: Array<Supply>;
  mintUnbackedHistory: Array<MintUnbacked>;
  backUnbackedHistory: Array<BackUnbacked>;
  userEmodeSetHistory: Array<UserEModeSet>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<SwapBorrowRate>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  liquidationCallHistory: Array<LiquidationCall>;
  rewardedActions: Array<RewardedAction>;
  claimRewards: Array<ClaimRewardsCall>;
};


export type UserrewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReward_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReward_filter>;
};


export type UserreservesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserReserve_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserReserve_filter>;
};


export type UsersupplyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
};


export type UsermintUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
};


export type UserbackUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
};


export type UseruserEmodeSetHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserEModeSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserEModeSet_filter>;
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
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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


export type UserrewardedActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardedAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardedAction_filter>;
};


export type UserclaimRewardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRewardsCall_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRewardsCall_filter>;
};

export type UserEModeSet = {
  id: Scalars['ID'];
  user: User;
  timestamp: Scalars['Int'];
  categoryId: Scalars['Int'];
};

export type UserEModeSet_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  categoryId?: InputMaybe<Scalars['Int']>;
  categoryId_not?: InputMaybe<Scalars['Int']>;
  categoryId_gt?: InputMaybe<Scalars['Int']>;
  categoryId_lt?: InputMaybe<Scalars['Int']>;
  categoryId_gte?: InputMaybe<Scalars['Int']>;
  categoryId_lte?: InputMaybe<Scalars['Int']>;
  categoryId_in?: InputMaybe<Array<Scalars['Int']>>;
  categoryId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserEModeSet_orderBy =
  | 'id'
  | 'user'
  | 'timestamp'
  | 'categoryId';

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
  supplyHistory: Array<Supply>;
  mintUnbackedHistory: Array<MintUnbacked>;
  backUnbackedHistory: Array<BackUnbacked>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<SwapBorrowRate>;
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


export type UserReservesupplyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Supply_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Supply_filter>;
};


export type UserReservemintUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintUnbacked_filter>;
};


export type UserReservebackUnbackedHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BackUnbacked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BackUnbacked_filter>;
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
  orderBy?: InputMaybe<SwapBorrowRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapBorrowRate_filter>;
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
  supplyHistory_?: InputMaybe<Supply_filter>;
  mintUnbackedHistory_?: InputMaybe<MintUnbacked_filter>;
  backUnbackedHistory_?: InputMaybe<BackUnbacked_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<SwapBorrowRate_filter>;
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
  | 'lastUpdateTimestamp'
  | 'stableTokenDelegatedAllowances'
  | 'variableTokenDelegatedAllowances'
  | 'aTokenBalanceHistory'
  | 'vTokenBalanceHistory'
  | 'sTokenBalanceHistory'
  | 'usageAsCollateralHistory'
  | 'supplyHistory'
  | 'mintUnbackedHistory'
  | 'backUnbackedHistory'
  | 'redeemUnderlyingHistory'
  | 'borrowHistory'
  | 'swapHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'liquidationCallHistory';

export type UserReward = {
  /**
   * id: ic:asset:reward:user
   *
   */
  id: Scalars['ID'];
  user: User;
  index: Scalars['BigInt'];
  reward: Reward;
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserReward_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward?: InputMaybe<Scalars['String']>;
  reward_not?: InputMaybe<Scalars['String']>;
  reward_gt?: InputMaybe<Scalars['String']>;
  reward_lt?: InputMaybe<Scalars['String']>;
  reward_gte?: InputMaybe<Scalars['String']>;
  reward_lte?: InputMaybe<Scalars['String']>;
  reward_in?: InputMaybe<Array<Scalars['String']>>;
  reward_not_in?: InputMaybe<Array<Scalars['String']>>;
  reward_contains?: InputMaybe<Scalars['String']>;
  reward_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_not_contains?: InputMaybe<Scalars['String']>;
  reward_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_starts_with?: InputMaybe<Scalars['String']>;
  reward_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reward_not_starts_with?: InputMaybe<Scalars['String']>;
  reward_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reward_ends_with?: InputMaybe<Scalars['String']>;
  reward_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_not_ends_with?: InputMaybe<Scalars['String']>;
  reward_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_?: InputMaybe<Reward_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserReward_orderBy =
  | 'id'
  | 'user'
  | 'index'
  | 'reward'
  | 'createdAt'
  | 'updatedAt';

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
  rewardsLastUpdated?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_not?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_gt?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_lt?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_gte?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_lte?: InputMaybe<Scalars['Int']>;
  rewardsLastUpdated_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardsLastUpdated_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewards_?: InputMaybe<UserReward_filter>;
  eModeCategoryId?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not?: InputMaybe<Scalars['String']>;
  eModeCategoryId_gt?: InputMaybe<Scalars['String']>;
  eModeCategoryId_lt?: InputMaybe<Scalars['String']>;
  eModeCategoryId_gte?: InputMaybe<Scalars['String']>;
  eModeCategoryId_lte?: InputMaybe<Scalars['String']>;
  eModeCategoryId_in?: InputMaybe<Array<Scalars['String']>>;
  eModeCategoryId_not_in?: InputMaybe<Array<Scalars['String']>>;
  eModeCategoryId_contains?: InputMaybe<Scalars['String']>;
  eModeCategoryId_contains_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_contains?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_starts_with?: InputMaybe<Scalars['String']>;
  eModeCategoryId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_starts_with?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_ends_with?: InputMaybe<Scalars['String']>;
  eModeCategoryId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_ends_with?: InputMaybe<Scalars['String']>;
  eModeCategoryId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eModeCategoryId_?: InputMaybe<EModeCategory_filter>;
  reserves_?: InputMaybe<UserReserve_filter>;
  supplyHistory_?: InputMaybe<Supply_filter>;
  mintUnbackedHistory_?: InputMaybe<MintUnbacked_filter>;
  backUnbackedHistory_?: InputMaybe<BackUnbacked_filter>;
  userEmodeSetHistory_?: InputMaybe<UserEModeSet_filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_filter>;
  borrowHistory_?: InputMaybe<Borrow_filter>;
  swapHistory_?: InputMaybe<SwapBorrowRate_filter>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_filter>;
  repayHistory_?: InputMaybe<Repay_filter>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_filter>;
  rewardedActions_?: InputMaybe<RewardedAction_filter>;
  claimRewards_?: InputMaybe<ClaimRewardsCall_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'borrowedReservesCount'
  | 'unclaimedRewards'
  | 'lifetimeRewards'
  | 'rewardsLastUpdated'
  | 'rewards'
  | 'eModeCategoryId'
  | 'reserves'
  | 'supplyHistory'
  | 'mintUnbackedHistory'
  | 'backUnbackedHistory'
  | 'userEmodeSetHistory'
  | 'redeemUnderlyingHistory'
  | 'usageAsCollateralHistory'
  | 'borrowHistory'
  | 'swapHistory'
  | 'rebalanceStableBorrowRateHistory'
  | 'repayHistory'
  | 'liquidationCallHistory'
  | 'rewardedActions'
  | 'claimRewards';

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

  export type QuerySdk = {
      /** null **/
  protocol: InContextSdkMethod<Query['protocol'], QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Query['protocols'], QueryprotocolsArgs, MeshContext>,
  /** null **/
  contractToPoolMapping: InContextSdkMethod<Query['contractToPoolMapping'], QuerycontractToPoolMappingArgs, MeshContext>,
  /** null **/
  contractToPoolMappings: InContextSdkMethod<Query['contractToPoolMappings'], QuerycontractToPoolMappingsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  priceHistoryItem: InContextSdkMethod<Query['priceHistoryItem'], QuerypriceHistoryItemArgs, MeshContext>,
  /** null **/
  priceHistoryItems: InContextSdkMethod<Query['priceHistoryItems'], QuerypriceHistoryItemsArgs, MeshContext>,
  /** null **/
  usdEthPriceHistoryItem: InContextSdkMethod<Query['usdEthPriceHistoryItem'], QueryusdEthPriceHistoryItemArgs, MeshContext>,
  /** null **/
  usdEthPriceHistoryItems: InContextSdkMethod<Query['usdEthPriceHistoryItems'], QueryusdEthPriceHistoryItemsArgs, MeshContext>,
  /** null **/
  chainlinkAggregator: InContextSdkMethod<Query['chainlinkAggregator'], QuerychainlinkAggregatorArgs, MeshContext>,
  /** null **/
  chainlinkAggregators: InContextSdkMethod<Query['chainlinkAggregators'], QuerychainlinkAggregatorsArgs, MeshContext>,
  /** null **/
  priceOracleAsset: InContextSdkMethod<Query['priceOracleAsset'], QuerypriceOracleAssetArgs, MeshContext>,
  /** null **/
  priceOracleAssets: InContextSdkMethod<Query['priceOracleAssets'], QuerypriceOracleAssetsArgs, MeshContext>,
  /** null **/
  priceOracle: InContextSdkMethod<Query['priceOracle'], QuerypriceOracleArgs, MeshContext>,
  /** null **/
  priceOracles: InContextSdkMethod<Query['priceOracles'], QuerypriceOraclesArgs, MeshContext>,
  /** null **/
  subToken: InContextSdkMethod<Query['subToken'], QuerysubTokenArgs, MeshContext>,
  /** null **/
  subTokens: InContextSdkMethod<Query['subTokens'], QuerysubTokensArgs, MeshContext>,
  /** null **/
  referrer: InContextSdkMethod<Query['referrer'], QueryreferrerArgs, MeshContext>,
  /** null **/
  referrers: InContextSdkMethod<Query['referrers'], QueryreferrersArgs, MeshContext>,
  /** null **/
  supply: InContextSdkMethod<Query['supply'], QuerysupplyArgs, MeshContext>,
  /** null **/
  supplies: InContextSdkMethod<Query['supplies'], QuerysuppliesArgs, MeshContext>,
  /** null **/
  redeemUnderlying: InContextSdkMethod<Query['redeemUnderlying'], QueryredeemUnderlyingArgs, MeshContext>,
  /** null **/
  redeemUnderlyings: InContextSdkMethod<Query['redeemUnderlyings'], QueryredeemUnderlyingsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Query['borrow'], QueryborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Query['borrows'], QueryborrowsArgs, MeshContext>,
  /** null **/
  swapBorrowRate: InContextSdkMethod<Query['swapBorrowRate'], QueryswapBorrowRateArgs, MeshContext>,
  /** null **/
  swapBorrowRates: InContextSdkMethod<Query['swapBorrowRates'], QueryswapBorrowRatesArgs, MeshContext>,
  /** null **/
  usageAsCollateral: InContextSdkMethod<Query['usageAsCollateral'], QueryusageAsCollateralArgs, MeshContext>,
  /** null **/
  usageAsCollaterals: InContextSdkMethod<Query['usageAsCollaterals'], QueryusageAsCollateralsArgs, MeshContext>,
  /** null **/
  rebalanceStableBorrowRate: InContextSdkMethod<Query['rebalanceStableBorrowRate'], QueryrebalanceStableBorrowRateArgs, MeshContext>,
  /** null **/
  rebalanceStableBorrowRates: InContextSdkMethod<Query['rebalanceStableBorrowRates'], QueryrebalanceStableBorrowRatesArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Query['repay'], QueryrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Query['repays'], QueryrepaysArgs, MeshContext>,
  /** null **/
  isolationModeTotalDebtUpdated: InContextSdkMethod<Query['isolationModeTotalDebtUpdated'], QueryisolationModeTotalDebtUpdatedArgs, MeshContext>,
  /** null **/
  isolationModeTotalDebtUpdateds: InContextSdkMethod<Query['isolationModeTotalDebtUpdateds'], QueryisolationModeTotalDebtUpdatedsArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Query['flashLoan'], QueryflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Query['flashLoans'], QueryflashLoansArgs, MeshContext>,
  /** null **/
  liquidationCall: InContextSdkMethod<Query['liquidationCall'], QueryliquidationCallArgs, MeshContext>,
  /** null **/
  liquidationCalls: InContextSdkMethod<Query['liquidationCalls'], QueryliquidationCallsArgs, MeshContext>,
  /** null **/
  mintUnbacked: InContextSdkMethod<Query['mintUnbacked'], QuerymintUnbackedArgs, MeshContext>,
  /** null **/
  mintUnbackeds: InContextSdkMethod<Query['mintUnbackeds'], QuerymintUnbackedsArgs, MeshContext>,
  /** null **/
  backUnbacked: InContextSdkMethod<Query['backUnbacked'], QuerybackUnbackedArgs, MeshContext>,
  /** null **/
  backUnbackeds: InContextSdkMethod<Query['backUnbackeds'], QuerybackUnbackedsArgs, MeshContext>,
  /** null **/
  mintedToTreasury: InContextSdkMethod<Query['mintedToTreasury'], QuerymintedToTreasuryArgs, MeshContext>,
  /** null **/
  mintedToTreasuries: InContextSdkMethod<Query['mintedToTreasuries'], QuerymintedToTreasuriesArgs, MeshContext>,
  /** null **/
  userEModeSet: InContextSdkMethod<Query['userEModeSet'], QueryuserEModeSetArgs, MeshContext>,
  /** null **/
  userEModeSets: InContextSdkMethod<Query['userEModeSets'], QueryuserEModeSetsArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItem: InContextSdkMethod<Query['reserveConfigurationHistoryItem'], QueryreserveConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItems: InContextSdkMethod<Query['reserveConfigurationHistoryItems'], QueryreserveConfigurationHistoryItemsArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItem: InContextSdkMethod<Query['reserveParamsHistoryItem'], QueryreserveParamsHistoryItemArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItems: InContextSdkMethod<Query['reserveParamsHistoryItems'], QueryreserveParamsHistoryItemsArgs, MeshContext>,
  /** null **/
  rewardFeedOracle: InContextSdkMethod<Query['rewardFeedOracle'], QueryrewardFeedOracleArgs, MeshContext>,
  /** null **/
  rewardFeedOracles: InContextSdkMethod<Query['rewardFeedOracles'], QueryrewardFeedOraclesArgs, MeshContext>,
  /** null **/
  reward: InContextSdkMethod<Query['reward'], QueryrewardArgs, MeshContext>,
  /** null **/
  rewards: InContextSdkMethod<Query['rewards'], QueryrewardsArgs, MeshContext>,
  /** null **/
  userReward: InContextSdkMethod<Query['userReward'], QueryuserRewardArgs, MeshContext>,
  /** null **/
  userRewards: InContextSdkMethod<Query['userRewards'], QueryuserRewardsArgs, MeshContext>,
  /** null **/
  rewardsController: InContextSdkMethod<Query['rewardsController'], QueryrewardsControllerArgs, MeshContext>,
  /** null **/
  rewardsControllers: InContextSdkMethod<Query['rewardsControllers'], QueryrewardsControllersArgs, MeshContext>,
  /** null **/
  rewardedAction: InContextSdkMethod<Query['rewardedAction'], QueryrewardedActionArgs, MeshContext>,
  /** null **/
  rewardedActions: InContextSdkMethod<Query['rewardedActions'], QueryrewardedActionsArgs, MeshContext>,
  /** null **/
  claimRewardsCall: InContextSdkMethod<Query['claimRewardsCall'], QueryclaimRewardsCallArgs, MeshContext>,
  /** null **/
  claimRewardsCalls: InContextSdkMethod<Query['claimRewardsCalls'], QueryclaimRewardsCallsArgs, MeshContext>,
  /** null **/
  emodeCategory: InContextSdkMethod<Query['emodeCategory'], QueryemodeCategoryArgs, MeshContext>,
  /** null **/
  emodeCategories: InContextSdkMethod<Query['emodeCategories'], QueryemodeCategoriesArgs, MeshContext>,
  /** null **/
  mapAssetPool: InContextSdkMethod<Query['mapAssetPool'], QuerymapAssetPoolArgs, MeshContext>,
  /** null **/
  mapAssetPools: InContextSdkMethod<Query['mapAssetPools'], QuerymapAssetPoolsArgs, MeshContext>,
  /** null **/
  reserve: InContextSdkMethod<Query['reserve'], QueryreserveArgs, MeshContext>,
  /** null **/
  reserves: InContextSdkMethod<Query['reserves'], QueryreservesArgs, MeshContext>,
  /** null **/
  atokenBalanceHistoryItem: InContextSdkMethod<Query['atokenBalanceHistoryItem'], QueryatokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  atokenBalanceHistoryItems: InContextSdkMethod<Query['atokenBalanceHistoryItems'], QueryatokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  vtokenBalanceHistoryItem: InContextSdkMethod<Query['vtokenBalanceHistoryItem'], QueryvtokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  vtokenBalanceHistoryItems: InContextSdkMethod<Query['vtokenBalanceHistoryItems'], QueryvtokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  stokenBalanceHistoryItem: InContextSdkMethod<Query['stokenBalanceHistoryItem'], QuerystokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  stokenBalanceHistoryItems: InContextSdkMethod<Query['stokenBalanceHistoryItems'], QuerystokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  stableTokenDelegatedAllowance: InContextSdkMethod<Query['stableTokenDelegatedAllowance'], QuerystableTokenDelegatedAllowanceArgs, MeshContext>,
  /** null **/
  stableTokenDelegatedAllowances: InContextSdkMethod<Query['stableTokenDelegatedAllowances'], QuerystableTokenDelegatedAllowancesArgs, MeshContext>,
  /** null **/
  variableTokenDelegatedAllowance: InContextSdkMethod<Query['variableTokenDelegatedAllowance'], QueryvariableTokenDelegatedAllowanceArgs, MeshContext>,
  /** null **/
  variableTokenDelegatedAllowances: InContextSdkMethod<Query['variableTokenDelegatedAllowances'], QueryvariableTokenDelegatedAllowancesArgs, MeshContext>,
  /** null **/
  userReserve: InContextSdkMethod<Query['userReserve'], QueryuserReserveArgs, MeshContext>,
  /** null **/
  userReserves: InContextSdkMethod<Query['userReserves'], QueryuserReservesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  swapHistory: InContextSdkMethod<Query['swapHistory'], QueryswapHistoryArgs, MeshContext>,
  /** null **/
  swapHistories: InContextSdkMethod<Query['swapHistories'], QueryswapHistoriesArgs, MeshContext>,
  /** null **/
  userTransaction: InContextSdkMethod<Query['userTransaction'], QueryuserTransactionArgs, MeshContext>,
  /** null **/
  userTransactions: InContextSdkMethod<Query['userTransactions'], QueryuserTransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  protocol: InContextSdkMethod<Subscription['protocol'], SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Subscription['protocols'], SubscriptionprotocolsArgs, MeshContext>,
  /** null **/
  contractToPoolMapping: InContextSdkMethod<Subscription['contractToPoolMapping'], SubscriptioncontractToPoolMappingArgs, MeshContext>,
  /** null **/
  contractToPoolMappings: InContextSdkMethod<Subscription['contractToPoolMappings'], SubscriptioncontractToPoolMappingsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** null **/
  priceHistoryItem: InContextSdkMethod<Subscription['priceHistoryItem'], SubscriptionpriceHistoryItemArgs, MeshContext>,
  /** null **/
  priceHistoryItems: InContextSdkMethod<Subscription['priceHistoryItems'], SubscriptionpriceHistoryItemsArgs, MeshContext>,
  /** null **/
  usdEthPriceHistoryItem: InContextSdkMethod<Subscription['usdEthPriceHistoryItem'], SubscriptionusdEthPriceHistoryItemArgs, MeshContext>,
  /** null **/
  usdEthPriceHistoryItems: InContextSdkMethod<Subscription['usdEthPriceHistoryItems'], SubscriptionusdEthPriceHistoryItemsArgs, MeshContext>,
  /** null **/
  chainlinkAggregator: InContextSdkMethod<Subscription['chainlinkAggregator'], SubscriptionchainlinkAggregatorArgs, MeshContext>,
  /** null **/
  chainlinkAggregators: InContextSdkMethod<Subscription['chainlinkAggregators'], SubscriptionchainlinkAggregatorsArgs, MeshContext>,
  /** null **/
  priceOracleAsset: InContextSdkMethod<Subscription['priceOracleAsset'], SubscriptionpriceOracleAssetArgs, MeshContext>,
  /** null **/
  priceOracleAssets: InContextSdkMethod<Subscription['priceOracleAssets'], SubscriptionpriceOracleAssetsArgs, MeshContext>,
  /** null **/
  priceOracle: InContextSdkMethod<Subscription['priceOracle'], SubscriptionpriceOracleArgs, MeshContext>,
  /** null **/
  priceOracles: InContextSdkMethod<Subscription['priceOracles'], SubscriptionpriceOraclesArgs, MeshContext>,
  /** null **/
  subToken: InContextSdkMethod<Subscription['subToken'], SubscriptionsubTokenArgs, MeshContext>,
  /** null **/
  subTokens: InContextSdkMethod<Subscription['subTokens'], SubscriptionsubTokensArgs, MeshContext>,
  /** null **/
  referrer: InContextSdkMethod<Subscription['referrer'], SubscriptionreferrerArgs, MeshContext>,
  /** null **/
  referrers: InContextSdkMethod<Subscription['referrers'], SubscriptionreferrersArgs, MeshContext>,
  /** null **/
  supply: InContextSdkMethod<Subscription['supply'], SubscriptionsupplyArgs, MeshContext>,
  /** null **/
  supplies: InContextSdkMethod<Subscription['supplies'], SubscriptionsuppliesArgs, MeshContext>,
  /** null **/
  redeemUnderlying: InContextSdkMethod<Subscription['redeemUnderlying'], SubscriptionredeemUnderlyingArgs, MeshContext>,
  /** null **/
  redeemUnderlyings: InContextSdkMethod<Subscription['redeemUnderlyings'], SubscriptionredeemUnderlyingsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Subscription['borrow'], SubscriptionborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Subscription['borrows'], SubscriptionborrowsArgs, MeshContext>,
  /** null **/
  swapBorrowRate: InContextSdkMethod<Subscription['swapBorrowRate'], SubscriptionswapBorrowRateArgs, MeshContext>,
  /** null **/
  swapBorrowRates: InContextSdkMethod<Subscription['swapBorrowRates'], SubscriptionswapBorrowRatesArgs, MeshContext>,
  /** null **/
  usageAsCollateral: InContextSdkMethod<Subscription['usageAsCollateral'], SubscriptionusageAsCollateralArgs, MeshContext>,
  /** null **/
  usageAsCollaterals: InContextSdkMethod<Subscription['usageAsCollaterals'], SubscriptionusageAsCollateralsArgs, MeshContext>,
  /** null **/
  rebalanceStableBorrowRate: InContextSdkMethod<Subscription['rebalanceStableBorrowRate'], SubscriptionrebalanceStableBorrowRateArgs, MeshContext>,
  /** null **/
  rebalanceStableBorrowRates: InContextSdkMethod<Subscription['rebalanceStableBorrowRates'], SubscriptionrebalanceStableBorrowRatesArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Subscription['repay'], SubscriptionrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Subscription['repays'], SubscriptionrepaysArgs, MeshContext>,
  /** null **/
  isolationModeTotalDebtUpdated: InContextSdkMethod<Subscription['isolationModeTotalDebtUpdated'], SubscriptionisolationModeTotalDebtUpdatedArgs, MeshContext>,
  /** null **/
  isolationModeTotalDebtUpdateds: InContextSdkMethod<Subscription['isolationModeTotalDebtUpdateds'], SubscriptionisolationModeTotalDebtUpdatedsArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Subscription['flashLoan'], SubscriptionflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Subscription['flashLoans'], SubscriptionflashLoansArgs, MeshContext>,
  /** null **/
  liquidationCall: InContextSdkMethod<Subscription['liquidationCall'], SubscriptionliquidationCallArgs, MeshContext>,
  /** null **/
  liquidationCalls: InContextSdkMethod<Subscription['liquidationCalls'], SubscriptionliquidationCallsArgs, MeshContext>,
  /** null **/
  mintUnbacked: InContextSdkMethod<Subscription['mintUnbacked'], SubscriptionmintUnbackedArgs, MeshContext>,
  /** null **/
  mintUnbackeds: InContextSdkMethod<Subscription['mintUnbackeds'], SubscriptionmintUnbackedsArgs, MeshContext>,
  /** null **/
  backUnbacked: InContextSdkMethod<Subscription['backUnbacked'], SubscriptionbackUnbackedArgs, MeshContext>,
  /** null **/
  backUnbackeds: InContextSdkMethod<Subscription['backUnbackeds'], SubscriptionbackUnbackedsArgs, MeshContext>,
  /** null **/
  mintedToTreasury: InContextSdkMethod<Subscription['mintedToTreasury'], SubscriptionmintedToTreasuryArgs, MeshContext>,
  /** null **/
  mintedToTreasuries: InContextSdkMethod<Subscription['mintedToTreasuries'], SubscriptionmintedToTreasuriesArgs, MeshContext>,
  /** null **/
  userEModeSet: InContextSdkMethod<Subscription['userEModeSet'], SubscriptionuserEModeSetArgs, MeshContext>,
  /** null **/
  userEModeSets: InContextSdkMethod<Subscription['userEModeSets'], SubscriptionuserEModeSetsArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItem: InContextSdkMethod<Subscription['reserveConfigurationHistoryItem'], SubscriptionreserveConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItems: InContextSdkMethod<Subscription['reserveConfigurationHistoryItems'], SubscriptionreserveConfigurationHistoryItemsArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItem: InContextSdkMethod<Subscription['reserveParamsHistoryItem'], SubscriptionreserveParamsHistoryItemArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItems: InContextSdkMethod<Subscription['reserveParamsHistoryItems'], SubscriptionreserveParamsHistoryItemsArgs, MeshContext>,
  /** null **/
  rewardFeedOracle: InContextSdkMethod<Subscription['rewardFeedOracle'], SubscriptionrewardFeedOracleArgs, MeshContext>,
  /** null **/
  rewardFeedOracles: InContextSdkMethod<Subscription['rewardFeedOracles'], SubscriptionrewardFeedOraclesArgs, MeshContext>,
  /** null **/
  reward: InContextSdkMethod<Subscription['reward'], SubscriptionrewardArgs, MeshContext>,
  /** null **/
  rewards: InContextSdkMethod<Subscription['rewards'], SubscriptionrewardsArgs, MeshContext>,
  /** null **/
  userReward: InContextSdkMethod<Subscription['userReward'], SubscriptionuserRewardArgs, MeshContext>,
  /** null **/
  userRewards: InContextSdkMethod<Subscription['userRewards'], SubscriptionuserRewardsArgs, MeshContext>,
  /** null **/
  rewardsController: InContextSdkMethod<Subscription['rewardsController'], SubscriptionrewardsControllerArgs, MeshContext>,
  /** null **/
  rewardsControllers: InContextSdkMethod<Subscription['rewardsControllers'], SubscriptionrewardsControllersArgs, MeshContext>,
  /** null **/
  rewardedAction: InContextSdkMethod<Subscription['rewardedAction'], SubscriptionrewardedActionArgs, MeshContext>,
  /** null **/
  rewardedActions: InContextSdkMethod<Subscription['rewardedActions'], SubscriptionrewardedActionsArgs, MeshContext>,
  /** null **/
  claimRewardsCall: InContextSdkMethod<Subscription['claimRewardsCall'], SubscriptionclaimRewardsCallArgs, MeshContext>,
  /** null **/
  claimRewardsCalls: InContextSdkMethod<Subscription['claimRewardsCalls'], SubscriptionclaimRewardsCallsArgs, MeshContext>,
  /** null **/
  emodeCategory: InContextSdkMethod<Subscription['emodeCategory'], SubscriptionemodeCategoryArgs, MeshContext>,
  /** null **/
  emodeCategories: InContextSdkMethod<Subscription['emodeCategories'], SubscriptionemodeCategoriesArgs, MeshContext>,
  /** null **/
  mapAssetPool: InContextSdkMethod<Subscription['mapAssetPool'], SubscriptionmapAssetPoolArgs, MeshContext>,
  /** null **/
  mapAssetPools: InContextSdkMethod<Subscription['mapAssetPools'], SubscriptionmapAssetPoolsArgs, MeshContext>,
  /** null **/
  reserve: InContextSdkMethod<Subscription['reserve'], SubscriptionreserveArgs, MeshContext>,
  /** null **/
  reserves: InContextSdkMethod<Subscription['reserves'], SubscriptionreservesArgs, MeshContext>,
  /** null **/
  atokenBalanceHistoryItem: InContextSdkMethod<Subscription['atokenBalanceHistoryItem'], SubscriptionatokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  atokenBalanceHistoryItems: InContextSdkMethod<Subscription['atokenBalanceHistoryItems'], SubscriptionatokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  vtokenBalanceHistoryItem: InContextSdkMethod<Subscription['vtokenBalanceHistoryItem'], SubscriptionvtokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  vtokenBalanceHistoryItems: InContextSdkMethod<Subscription['vtokenBalanceHistoryItems'], SubscriptionvtokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  stokenBalanceHistoryItem: InContextSdkMethod<Subscription['stokenBalanceHistoryItem'], SubscriptionstokenBalanceHistoryItemArgs, MeshContext>,
  /** null **/
  stokenBalanceHistoryItems: InContextSdkMethod<Subscription['stokenBalanceHistoryItems'], SubscriptionstokenBalanceHistoryItemsArgs, MeshContext>,
  /** null **/
  stableTokenDelegatedAllowance: InContextSdkMethod<Subscription['stableTokenDelegatedAllowance'], SubscriptionstableTokenDelegatedAllowanceArgs, MeshContext>,
  /** null **/
  stableTokenDelegatedAllowances: InContextSdkMethod<Subscription['stableTokenDelegatedAllowances'], SubscriptionstableTokenDelegatedAllowancesArgs, MeshContext>,
  /** null **/
  variableTokenDelegatedAllowance: InContextSdkMethod<Subscription['variableTokenDelegatedAllowance'], SubscriptionvariableTokenDelegatedAllowanceArgs, MeshContext>,
  /** null **/
  variableTokenDelegatedAllowances: InContextSdkMethod<Subscription['variableTokenDelegatedAllowances'], SubscriptionvariableTokenDelegatedAllowancesArgs, MeshContext>,
  /** null **/
  userReserve: InContextSdkMethod<Subscription['userReserve'], SubscriptionuserReserveArgs, MeshContext>,
  /** null **/
  userReserves: InContextSdkMethod<Subscription['userReserves'], SubscriptionuserReservesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  swapHistory: InContextSdkMethod<Subscription['swapHistory'], SubscriptionswapHistoryArgs, MeshContext>,
  /** null **/
  swapHistories: InContextSdkMethod<Subscription['swapHistories'], SubscriptionswapHistoriesArgs, MeshContext>,
  /** null **/
  userTransaction: InContextSdkMethod<Subscription['userTransaction'], SubscriptionuserTransactionArgs, MeshContext>,
  /** null **/
  userTransactions: InContextSdkMethod<Subscription['userTransactions'], SubscriptionuserTransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Polygon V3"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
