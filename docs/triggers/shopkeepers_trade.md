---
title: shopkeepers_trade
titleZh: shopkeepers_trade
category: triggers
subcategory: shopkeepers
tags:
  - libreforge
outline: deep
---

# shopkeepers_trade <Badge type="info" text="libreforge" /> <Badge type="info" text="Trigger" />

> Fires when the player completes a trade with a Shopkeepers shopkeeper.

> **Requires:** Shopkeepers

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shopkeepers_trade` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Trigger |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/shopkeepers/impl/TriggerShopkeepersTrade.kt`).

- **Source Description**: Fires when the player completes a trade with a Shopkeepers shopkeeper.

- **Categories**: `economy`

- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`

## Configuration Example

```yaml
triggers:
  - shopkeepers_trade
```

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
