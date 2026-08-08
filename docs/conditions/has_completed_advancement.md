---
title: has_completed_advancement
titleZh: has_completed_advancement
category: conditions
subcategory: permissions
tags:
  - libreforge
outline: deep
---

# has_completed_advancement <Badge type="info" text="libreforge" />

> Requires a player to have completed an advancement

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_completed_advancement` |
| Module | libreforge |
| Category | Permissions & Ranks |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `advancement` | String | ✅ | — | — | The advancement ID \| Source: The namespaced key of the advancement (e.g. minecraft:story/mine_stone). Example: `minecraft:story/mine_stone` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasCompletedAdvancement.kt`).

- **Source Description**: Passes when the player has completed the specified advancement.
- **Categories**: `player`

## Configuration Example

```yaml
- id: has_completed_advancement
  args:
    advancement: "minecraft:story/mine_stone" # The advancement ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
