---
title: Installation
description: Install ENS Components and its required peer dependencies.
---

# Installation

Install ENS Components and its peer dependencies.

:::code-group

```bash
npm install @thenamespace/ens-components-v2 @tanstack/react-query@^5 viem@^2.55.0 wagmi@^2.19.5
```

```bash [pnpm]
pnpm add @thenamespace/ens-components-v2 @tanstack/react-query@^5 viem@^2.55.0 wagmi@^2.19.5
```

```bash [yarn]
yarn add @thenamespace/ens-components-v2 @tanstack/react-query@^5 viem@^2.55.0 wagmi@^2.19.5
```

```bash [bun]
bun add @thenamespace/ens-components-v2 @tanstack/react-query@^5 viem@^2.55.0 wagmi@^2.19.5
```

:::

Import the stylesheet once from your application entry point.

```tsx [main.tsx]
import "@thenamespace/ens-components-v2/styles.css";
```

ENS Components ships compiled styles. Tailwind CSS is not required in the
consumer application.

## Peer dependencies

| Package              | Supported version |
| -------------------- | ----------------- |
| React                | `>=19.2.7 <20`    |
| React DOM            | `>=19.2.7 <20`    |
| TanStack React Query | `>=5.0.0 <6`      |
| Viem                 | `>=2.55.0 <3`     |
| Wagmi                | `>=2.19.5 <3`     |

## Entry points

| Import path                                  | Contents                                       |
| -------------------------------------------- | ---------------------------------------------- |
| `@thenamespace/ens-components-v2`            | Components, configuration, providers, and data |
| `@thenamespace/ens-components-v2/hooks`      | React query and mutation hooks                 |
| `@thenamespace/ens-components-v2/actions`    | Prepared reads, prepared writes, and executors |
| `@thenamespace/ens-components-v2/icons`      | ENS record and payment-token icons             |
| `@thenamespace/ens-components-v2/styles.css` | Compiled package styles                        |

:::tip
Import from the narrow `hooks`, `actions`, and `icons` entry points when using
those APIs. This keeps application imports explicit and tree-shakeable.
:::

Continue to [Getting Started](/docs/getting-started).
