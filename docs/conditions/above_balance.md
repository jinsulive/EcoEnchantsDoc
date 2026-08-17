---
title: above_balance
titleZh: above_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_balance <Badge type="info" text="libreforge" />

> Passes when the player's economy balance is at or above the minimum.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_balance` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `balance` | Expression | ✅ | — | — | The minimum economy balance required. Example: `%level% * 500` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveBalance.kt`).

- **Source Description**: Passes when the player's economy balance is at or above the minimum.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: above_balance
  args:
    balance: 150000.50 # The minimum amount of money
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
