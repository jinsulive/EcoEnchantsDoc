---
title: bonus_health
titleZh: bonus_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# bonus_health <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Permanently increases the player's max health while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bonus_health` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `health` | Expression | ✅ | — | — | The amount of bonus max health to add. Supports expressions. Example: `%level% * 2` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBonusHealth.kt`).

- **Source Description**: Permanently increases the player's max health while the holder is active.
- **Categories**: `player`, `attribute`

## Configuration Example

```yaml
- id: bonus_health
  args:
    health: 4 # The amount of health to give, one heart is 2 HP
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
