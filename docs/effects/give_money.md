---
title: give_money
titleZh: give_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_money <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives a player money

> **Requires:** Vault

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_money` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of money to deposit into the player's balance. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveMoney.kt`).

- **Source Description**: Deposits money into the player's economy balance when triggered.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_money
  args:
    amount: 1000 # The amount of money to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
