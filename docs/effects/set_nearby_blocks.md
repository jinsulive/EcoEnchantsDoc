---
title: set_nearby_blocks
titleZh: set_nearby_blocks
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# set_nearby_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets every block within a cubic radius of the trigger location to a specified block type.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_nearby_blocks` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block type to fill the area with. |
| `radius` | Expression | ✅ | — | — | The radius of the cube around the trigger location. Example: `3 + %level% * 0.3` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetNearbyBlocks.kt`).

- **Source Description**: Sets every block within a cubic radius of the trigger location to a specified block type.

- **Categories**: `world`

## Configuration Example

```yaml
- id: set_nearby_blocks
  args:
    block: <value>
    radius: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
