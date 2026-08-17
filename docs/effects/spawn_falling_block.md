---
title: spawn_falling_block
titleZh: spawn_falling_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_falling_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a falling block entity above the trigger location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_falling_block` |
| Module | libreforge |
| Category | World, Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block material to spawn as a falling block. |
| `height` | Expression | — | `0` | — | The number of blocks above the trigger location to spawn the falling block. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnFallingBlock.kt`).

- **Source Description**: Spawns a falling block entity above the trigger location.

- **Categories**: `world, visual`

## Configuration Example

```yaml
- id: spawn_falling_block
  args:
    block: <value>
    height: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
