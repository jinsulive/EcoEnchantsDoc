---
title: below_xp_level
titleZh: below_xp_level
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_xp_level <Badge type="info" text="libreforge" />

> Requires a player to be below a certain XP level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_xp_level` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `level` | Expression(数学表达式) | ✅ | — | — | The maximum XP level \| Source: The XP level threshold; the player must be below this value. Example: `10 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowXPLevel.kt`).

- **Source Description**: Passes when the player's XP level is below the specified level.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: below_xp_level
  args:
    level: 50 # The maximum XP level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
