---
title: break_block
titleZh: break_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# break_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Breaks a block instantly

## Overview

| Property | Value |
|----------|-------|
| Type ID | `break_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `prevent_trigger` | Boolean | — | `false` | — | If the mine_block trigger should not be called from this \| Source: If true, breaking this block will not fire further libreforge triggers. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBreakBlock.kt`).

- **Source Description**: Breaks the triggering block as if the player mined it.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: break_block
  args:
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
