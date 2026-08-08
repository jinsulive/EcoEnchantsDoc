---
title: standing_on_block
titleZh: standing_on_block
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# standing_on_block <Badge type="info" text="libreforge" />

> Requires a player to be standing on a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `standing_on_block` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block type (material name) the player must be standing on. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionStandingOnBlock.kt`).

- **Source Description**: Passes when the player is standing on or inside the specified block type.
- **Categories**: `world`

## Configuration Example

```yaml
- id: standing_on_block
  args:
    block: diamond_ore # The block type
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
