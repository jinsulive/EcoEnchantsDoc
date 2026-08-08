---
title: below_balance
titleZh: below_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_balance <Badge type="info" text="libreforge" />

> Requires a player to have below a certain amount of money

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_balance` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `balance` | Expression(数学表达式) | ✅ | — | — | The maximum amount of money \| Source: The balance threshold; the player must be below this amount. Example: `%level% * 500` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowBalance.kt`).

- **Source Description**: Passes when the player's economy balance is below the specified amount.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: below_balance
  args:
    balance: 150000.50 # The maximum amount of money
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
