---
title: take_money
titleZh: take_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# take_money <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a specified amount of money from the player's balance.

> **Requires:** Vault

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_money` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The amount of money to remove from the player. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTakeMoney.kt`).

- **Source Description**: Removes a specified amount of money from the player's balance.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: take_money
  args:
    amount: 1000 # The amount of money to take
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
