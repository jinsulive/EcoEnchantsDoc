---
title: in_gamemode
titleZh: in_gamemode
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_gamemode <Badge type="info" text="libreforge" />

> Passes when the player is in the specified gamemode.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_gamemode` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `gamemode` | String | ✅ | — | — | The gamemode name (e.g. SURVIVAL, CREATIVE, ADVENTURE, SPECTATOR). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInGamemode.kt`).

- **Source Description**: Passes when the player is in the specified gamemode.
- **Categories**: `player`

## Configuration Example

```yaml
- id: in_gamemode
  args:
    gamemode: survival
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
