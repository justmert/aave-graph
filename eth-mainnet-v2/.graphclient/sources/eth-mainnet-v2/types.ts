// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EthMainnetV2Types {
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
  poolConfigurationHistoryItem: InContextSdkMethod<Query['poolConfigurationHistoryItem'], QuerypoolConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  poolConfigurationHistoryItems: InContextSdkMethod<Query['poolConfigurationHistoryItems'], QuerypoolConfigurationHistoryItemsArgs, MeshContext>,
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
  chainlinkENS: InContextSdkMethod<Query['chainlinkENS'], QuerychainlinkENSArgs, MeshContext>,
  /** null **/
  chainlinkENSs: InContextSdkMethod<Query['chainlinkENSs'], QuerychainlinkENSsArgs, MeshContext>,
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
  stoken: InContextSdkMethod<Query['stoken'], QuerystokenArgs, MeshContext>,
  /** null **/
  stokens: InContextSdkMethod<Query['stokens'], QuerystokensArgs, MeshContext>,
  /** null **/
  vtoken: InContextSdkMethod<Query['vtoken'], QueryvtokenArgs, MeshContext>,
  /** null **/
  vtokens: InContextSdkMethod<Query['vtokens'], QueryvtokensArgs, MeshContext>,
  /** null **/
  atoken: InContextSdkMethod<Query['atoken'], QueryatokenArgs, MeshContext>,
  /** null **/
  atokens: InContextSdkMethod<Query['atokens'], QueryatokensArgs, MeshContext>,
  /** null **/
  variableDebtToken: InContextSdkMethod<Query['variableDebtToken'], QueryvariableDebtTokenArgs, MeshContext>,
  /** null **/
  variableDebtTokens: InContextSdkMethod<Query['variableDebtTokens'], QueryvariableDebtTokensArgs, MeshContext>,
  /** null **/
  stableDebtToken: InContextSdkMethod<Query['stableDebtToken'], QuerystableDebtTokenArgs, MeshContext>,
  /** null **/
  stableDebtTokens: InContextSdkMethod<Query['stableDebtTokens'], QuerystableDebtTokensArgs, MeshContext>,
  /** null **/
  referrer: InContextSdkMethod<Query['referrer'], QueryreferrerArgs, MeshContext>,
  /** null **/
  referrers: InContextSdkMethod<Query['referrers'], QueryreferrersArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Query['deposit'], QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Query['deposits'], QuerydepositsArgs, MeshContext>,
  /** null **/
  redeemUnderlying: InContextSdkMethod<Query['redeemUnderlying'], QueryredeemUnderlyingArgs, MeshContext>,
  /** null **/
  redeemUnderlyings: InContextSdkMethod<Query['redeemUnderlyings'], QueryredeemUnderlyingsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Query['borrow'], QueryborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Query['borrows'], QueryborrowsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
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
  flashLoan: InContextSdkMethod<Query['flashLoan'], QueryflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Query['flashLoans'], QueryflashLoansArgs, MeshContext>,
  /** null **/
  liquidationCall: InContextSdkMethod<Query['liquidationCall'], QueryliquidationCallArgs, MeshContext>,
  /** null **/
  liquidationCalls: InContextSdkMethod<Query['liquidationCalls'], QueryliquidationCallsArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItem: InContextSdkMethod<Query['reserveConfigurationHistoryItem'], QueryreserveConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItems: InContextSdkMethod<Query['reserveConfigurationHistoryItems'], QueryreserveConfigurationHistoryItemsArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItem: InContextSdkMethod<Query['reserveParamsHistoryItem'], QueryreserveParamsHistoryItemArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItems: InContextSdkMethod<Query['reserveParamsHistoryItems'], QueryreserveParamsHistoryItemsArgs, MeshContext>,
  /** null **/
  incentivesController: InContextSdkMethod<Query['incentivesController'], QueryincentivesControllerArgs, MeshContext>,
  /** null **/
  incentivesControllers: InContextSdkMethod<Query['incentivesControllers'], QueryincentivesControllersArgs, MeshContext>,
  /** null **/
  incentivizedAction: InContextSdkMethod<Query['incentivizedAction'], QueryincentivizedActionArgs, MeshContext>,
  /** null **/
  incentivizedActions: InContextSdkMethod<Query['incentivizedActions'], QueryincentivizedActionsArgs, MeshContext>,
  /** null **/
  claimIncentiveCall: InContextSdkMethod<Query['claimIncentiveCall'], QueryclaimIncentiveCallArgs, MeshContext>,
  /** null **/
  claimIncentiveCalls: InContextSdkMethod<Query['claimIncentiveCalls'], QueryclaimIncentiveCallsArgs, MeshContext>,
  /** null **/
  mapAssetPool: InContextSdkMethod<Query['mapAssetPool'], QuerymapAssetPoolArgs, MeshContext>,
  /** null **/
  mapAssetPools: InContextSdkMethod<Query['mapAssetPools'], QuerymapAssetPoolsArgs, MeshContext>,
  /** null **/
  reserve: InContextSdkMethod<Query['reserve'], QueryreserveArgs, MeshContext>,
  /** null **/
  reserves: InContextSdkMethod<Query['reserves'], QueryreservesArgs, MeshContext>,
  /** null **/
  wethreserve: InContextSdkMethod<Query['wethreserve'], QuerywethreserveArgs, MeshContext>,
  /** null **/
  wethreserves: InContextSdkMethod<Query['wethreserves'], QuerywethreservesArgs, MeshContext>,
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
  poolConfigurationHistoryItem: InContextSdkMethod<Subscription['poolConfigurationHistoryItem'], SubscriptionpoolConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  poolConfigurationHistoryItems: InContextSdkMethod<Subscription['poolConfigurationHistoryItems'], SubscriptionpoolConfigurationHistoryItemsArgs, MeshContext>,
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
  chainlinkENS: InContextSdkMethod<Subscription['chainlinkENS'], SubscriptionchainlinkENSArgs, MeshContext>,
  /** null **/
  chainlinkENSs: InContextSdkMethod<Subscription['chainlinkENSs'], SubscriptionchainlinkENSsArgs, MeshContext>,
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
  stoken: InContextSdkMethod<Subscription['stoken'], SubscriptionstokenArgs, MeshContext>,
  /** null **/
  stokens: InContextSdkMethod<Subscription['stokens'], SubscriptionstokensArgs, MeshContext>,
  /** null **/
  vtoken: InContextSdkMethod<Subscription['vtoken'], SubscriptionvtokenArgs, MeshContext>,
  /** null **/
  vtokens: InContextSdkMethod<Subscription['vtokens'], SubscriptionvtokensArgs, MeshContext>,
  /** null **/
  atoken: InContextSdkMethod<Subscription['atoken'], SubscriptionatokenArgs, MeshContext>,
  /** null **/
  atokens: InContextSdkMethod<Subscription['atokens'], SubscriptionatokensArgs, MeshContext>,
  /** null **/
  variableDebtToken: InContextSdkMethod<Subscription['variableDebtToken'], SubscriptionvariableDebtTokenArgs, MeshContext>,
  /** null **/
  variableDebtTokens: InContextSdkMethod<Subscription['variableDebtTokens'], SubscriptionvariableDebtTokensArgs, MeshContext>,
  /** null **/
  stableDebtToken: InContextSdkMethod<Subscription['stableDebtToken'], SubscriptionstableDebtTokenArgs, MeshContext>,
  /** null **/
  stableDebtTokens: InContextSdkMethod<Subscription['stableDebtTokens'], SubscriptionstableDebtTokensArgs, MeshContext>,
  /** null **/
  referrer: InContextSdkMethod<Subscription['referrer'], SubscriptionreferrerArgs, MeshContext>,
  /** null **/
  referrers: InContextSdkMethod<Subscription['referrers'], SubscriptionreferrersArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Subscription['deposit'], SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Subscription['deposits'], SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  redeemUnderlying: InContextSdkMethod<Subscription['redeemUnderlying'], SubscriptionredeemUnderlyingArgs, MeshContext>,
  /** null **/
  redeemUnderlyings: InContextSdkMethod<Subscription['redeemUnderlyings'], SubscriptionredeemUnderlyingsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Subscription['borrow'], SubscriptionborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Subscription['borrows'], SubscriptionborrowsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
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
  flashLoan: InContextSdkMethod<Subscription['flashLoan'], SubscriptionflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Subscription['flashLoans'], SubscriptionflashLoansArgs, MeshContext>,
  /** null **/
  liquidationCall: InContextSdkMethod<Subscription['liquidationCall'], SubscriptionliquidationCallArgs, MeshContext>,
  /** null **/
  liquidationCalls: InContextSdkMethod<Subscription['liquidationCalls'], SubscriptionliquidationCallsArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItem: InContextSdkMethod<Subscription['reserveConfigurationHistoryItem'], SubscriptionreserveConfigurationHistoryItemArgs, MeshContext>,
  /** null **/
  reserveConfigurationHistoryItems: InContextSdkMethod<Subscription['reserveConfigurationHistoryItems'], SubscriptionreserveConfigurationHistoryItemsArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItem: InContextSdkMethod<Subscription['reserveParamsHistoryItem'], SubscriptionreserveParamsHistoryItemArgs, MeshContext>,
  /** null **/
  reserveParamsHistoryItems: InContextSdkMethod<Subscription['reserveParamsHistoryItems'], SubscriptionreserveParamsHistoryItemsArgs, MeshContext>,
  /** null **/
  incentivesController: InContextSdkMethod<Subscription['incentivesController'], SubscriptionincentivesControllerArgs, MeshContext>,
  /** null **/
  incentivesControllers: InContextSdkMethod<Subscription['incentivesControllers'], SubscriptionincentivesControllersArgs, MeshContext>,
  /** null **/
  incentivizedAction: InContextSdkMethod<Subscription['incentivizedAction'], SubscriptionincentivizedActionArgs, MeshContext>,
  /** null **/
  incentivizedActions: InContextSdkMethod<Subscription['incentivizedActions'], SubscriptionincentivizedActionsArgs, MeshContext>,
  /** null **/
  claimIncentiveCall: InContextSdkMethod<Subscription['claimIncentiveCall'], SubscriptionclaimIncentiveCallArgs, MeshContext>,
  /** null **/
  claimIncentiveCalls: InContextSdkMethod<Subscription['claimIncentiveCalls'], SubscriptionclaimIncentiveCallsArgs, MeshContext>,
  /** null **/
  mapAssetPool: InContextSdkMethod<Subscription['mapAssetPool'], SubscriptionmapAssetPoolArgs, MeshContext>,
  /** null **/
  mapAssetPools: InContextSdkMethod<Subscription['mapAssetPools'], SubscriptionmapAssetPoolsArgs, MeshContext>,
  /** null **/
  reserve: InContextSdkMethod<Subscription['reserve'], SubscriptionreserveArgs, MeshContext>,
  /** null **/
  reserves: InContextSdkMethod<Subscription['reserves'], SubscriptionreservesArgs, MeshContext>,
  /** null **/
  wethreserve: InContextSdkMethod<Subscription['wethreserve'], SubscriptionwethreserveArgs, MeshContext>,
  /** null **/
  wethreserves: InContextSdkMethod<Subscription['wethreserves'], SubscriptionwethreservesArgs, MeshContext>,
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
      ["eth-mainnet-v2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
