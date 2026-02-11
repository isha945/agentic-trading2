import type { Address, Chain } from 'viem';

export interface WalletAuthConfig {
    appName: string;
    projectId: string;
    chains?: readonly Chain[];
}

export interface WalletStatus {
    isConnected: boolean;
    isConnecting: boolean;
    isDisconnected: boolean;
    address?: Address;
    chainId?: number;
    chainName?: string;
}

export interface WalletAuthState {
    status: WalletStatus;
    connect: () => void;
    disconnect: () => void;
    switchChain: (chainId: number) => Promise<void>;
}

// Additional types from merged plugins
export type SupportedPythChain = 'arbitrum' | 'arbitrum-sepolia';

export interface PythPriceOptions {
  chain: SupportedPythChain;
  priceFeedId: string;
  staleAfterSeconds?: number;
}

export interface PythPriceRaw {
  id: string;
  price: string;
  conf: string;
  expo: number;
  publishTime: number;
}

export interface PythPriceResult {
  /** Formatted human-readable price (string) */
  formattedPrice: string;
  /** Raw Pyth price data */
  raw: PythPriceRaw;
  /** Whether the price is considered stale based on staleAfterSeconds */
  isStale: boolean;
}

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Additional types from merged plugins
export type SupportedChainlinkChain = 'arbitrum' | 'arbitrum-sepolia';

export interface ChainlinkPriceOptions {
  chain: SupportedChainlinkChain;
  /** AggregatorV3Interface contract address */
  feedAddress: string;
  /** Optional: reject price older than this many seconds */
  staleAfterSeconds?: number;
  /** Optional: custom RPC URL (defaults to public RPC for chain) */
  rpcUrl?: string;
}

export interface ChainlinkPriceRaw {
  roundId: bigint;
  answer: bigint;
  startedAt: number;
  updatedAt: number;
  answeredInRound: bigint;
  decimals: number;
}

export interface ChainlinkPriceResult {
  formattedPrice: string;
  raw: ChainlinkPriceRaw;
  isStale: boolean;
}

// Additional types from merged plugins
/**
 * Maxxit Lazy Trader API Types
 * 4-step wallet-based setup flow
 */

/**
 * Trading preferences for the lazy trader agent
 */
export interface TradingPreferences {
  risk_tolerance: number;
  trade_frequency: number;
  social_sentiment_weight: number;
  price_momentum_focus: number;
  market_rank_priority: number;
}

/**
 * Step 1: Generate Ostium Agent
 */
export interface GenerateAgentResponse {
  agentAddress: string;
  isNew: boolean;
  error?: string;
}

/**
 * Step 2: Generate Telegram Link
 */
export interface GenerateTelegramLinkResponse {
  success: boolean;
  alreadyLinked: boolean;
  linkCode?: string;
  botUsername?: string;
  deepLink?: string;
  expiresIn?: number;
  telegramUser?: TelegramUser;
  error?: string;
}

/**
 * Telegram user info
 */
export interface TelegramUser {
  id: string;
  telegram_user_id: string;
  telegram_username: string;
}

/**
 * Step 3: Check Telegram Status
 */
export interface CheckTelegramStatusResponse {
  success: boolean;
  connected: boolean;
  telegramUser?: TelegramUser;
  error?: string;
}

/**
 * Step 4: Create Agent
 */
export interface CreateAgentResponse {
  success: boolean;
  agent?: {
    id: string;
    name: string;
    venue: string;
  };
  deployment?: {
    id: string;
    status: string;
    isTestnet: boolean;
  };
  ostiumAgentAddress?: string;
  error?: string;
}

/**
 * Check Setup Status - for returning users
 */
export interface CheckSetupResponse {
  success: boolean;
  isSetupComplete: boolean;
  agent?: {
    id: string;
    name: string;
    venue: string;
  };
  deployment?: {
    id: string;
    status: string;
    isTestnet: boolean;
  };
  telegramUser?: TelegramUser;
  ostiumAgentAddress?: string;
  tradingPreferences?: TradingPreferences;
  error?: string;
}

/**
 * Options for API calls
 */
export interface LazyTraderApiOptions {
  /**
   * Base URL for the API
   * @default '/api/lazy-trading'
   */
  baseUrl?: string;
}

/**
 * Setup step status
 */
export type SetupStep = 'idle' | 'agent' | 'telegram-link' | 'telegram-connect' | 'create-agent' | 'complete';

/**
 * State for async operations
 */

// Additional types from merged plugins
/**
 * Ostium One-Click Trading Types
 */


/**
 * Status of a delegation
 */
export interface DelegationStatus {
    isDelegated: boolean;
    delegateAddress: Address | null;
}

/**
 * Status of USDC approval
 */
export interface ApprovalStatus {
    hasApproval: boolean;
    currentAllowance: bigint;
    formattedAllowance: string;
}

/**
 * Combined status for one-click trading setup
 */
export interface OneClickTradingStatus {
    delegation: DelegationStatus;
    approval: ApprovalStatus;
    isReady: boolean;
}

/**
 * Transaction result
 */
export interface TransactionResult {
    hash: Hash;
    success: boolean;
}

/**
 * Configuration for Ostium one-click trading
 */
export interface OstiumConfig {
    network: SupportedNetwork;
    delegateAddress?: Address;
    approvalAmount?: bigint;
}

/**
 * Hook state for async operations
 */
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: Error };

/**
 * Transaction state
 */
export type TransactionState =
    | { status: 'idle' }
    | { status: 'pending' }
    | { status: 'confirming'; hash: Hash }
    | { status: 'success'; hash: Hash }
    | { status: 'error'; error: Error };
