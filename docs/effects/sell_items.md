---
title: sell_items
titleZh: sell_items
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_items <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sells dropped items / item from trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_items` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | — | `1.0` | — | A multiplier applied to the sell price of each item. Supports expressions. Example: `1 + %level% * 0.05` |
| `whitelist` | Item List | — | — | — | A list of item types that are allowed to be sold. If omitted, all sellable items are sold. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSellItems.kt`).

- **Source Description**: Sells sellable items from the drop trigger.
- **Categories**: `economy`, `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: sell_items
  args:
    multiplier: 0.5 # The price multiplier
    whitelist: [] # The only items allowed to be sold, if this is not present all items can be sold
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
