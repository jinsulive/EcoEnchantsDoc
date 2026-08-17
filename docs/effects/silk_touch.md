---
title: silk_touch
titleZh: silk_touch
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# silk_touch <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Replaces a broken block's drops with the block itself, as if mined with Silk Touch.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `silk_touch` |
| Module | libreforge |
| Category | World, Inventory |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSilkTouch.kt`).

- **Source Description**: Replaces a broken block's drops with the block itself, as if mined with Silk Touch.

- **Categories**: `world, inventory`

## Configuration Example

```yaml
- id: silk_touch
  args:
    # This component takes no parameters
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
