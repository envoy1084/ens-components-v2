---
"@thenamespace/ens-components-v2": minor
---

Initial release of ENS Components v2, a typed React toolkit for building ENS v2
experiences with components, hooks, or framework-independent actions.

### Components

- Add complete name registration and renewal flows, including availability,
  pricing, commitments, payment-token approvals, transaction progress, and
  confirmation states.
- Add a name profile editor for text, address, content hash, avatar, and header
  records, with resolver and permission discovery built in.
- Add reusable transaction-progress UI for sequential and batched writes.
- Support inline and dialog presentations, custom messages, lifecycle events,
  and replaceable slots for product-specific UI.

### Hooks and actions

- Add TanStack Query-powered hooks for name availability, pricing, payment
  status, profile records, resolvers, permissions, commitments, and wallet
  capabilities.
- Add mutation hooks for registration, renewal, profile updates, address
  records, primary names, resolver deployment, and payment-token approval.
- Add standalone read, prepare, and execute actions for applications that need
  direct control without the packaged UI.
- Support sequential transactions and EIP-5792 wallet call batching with typed
  progress and confirmation handling.
- Return structured, typed errors and prepared write results so failures can be
  handled without parsing thrown messages.

### Configuration and packaging

- Add `EnsProvider` and `createEnsConfig` with mainnet and testnet presets,
  configurable contract addresses, and ERC-20 payment-token support.
- Publish dedicated root, `actions`, `hooks`, `icons`, and stylesheet entry
  points with generated TypeScript declarations.
- Include record and chain icons, compiled component styles, Satoshi typography,
  and package-owned default artwork.
- Keep Wagmi, Viem, TanStack Query, React, and React DOM as peer dependencies
  while shipping the exact internal UI Kit implementation used by the
  components.
