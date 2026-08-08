---
title: above_hunger_percent
titleZh: above_hunger_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# above_hunger_percent <Badge type="info" text="libreforge" />

> Requires a player to be above a certain % of their max hunger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_hunger_percent` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `percent` | Expression(数学表达式) | ✅ | — | — | The minimum hunger percentage (0–100). Example: `50 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveHungerPercent.kt`).

- **Source Description**: Passes when the player's hunger level is at or above the given percentage.
- **Categories**: `player`

## Configuration Example

```yaml
- id: above_hunger_percent
  args:
    percent: 50 # The minimum percent
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
