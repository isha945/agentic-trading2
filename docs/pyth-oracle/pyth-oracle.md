# Pyth Price Oracle

This project is configured to use **Pyth Network** price feeds on `arbitrum`.

## Environment Variables

- `PYTH_PRICE_FEED_ID` – Pyth price feed ID (32-byte hex string)
- `PYTH_CHAIN` – Chain identifier, e.g. `ARBITRUM` or `ARBITRUM_SEPOLIA`


## Example Usage (backend or serverless)

High level steps:

1. Use your preferred RPC provider for the configured chain.
2. Instantiate the Pyth contract with the appropriate ABI and address.
3. Call `getPriceUnsafe(priceFeedId)` or `getPrice(priceFeedId)`.
4. Apply staleness checks using `publishTime` and `PYTH_STALE_AFTER_SECONDS`.

> Note: This plugin focuses on configuration and wiring; you are free to implement the runtime fetch logic in the environment that best fits your app (server, edge, or client-side with care).
