---
title: infinite_bucket
titleZh: infinite_bucket
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# infinite_bucket <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Prevents the specified bucket types from being emptied, refilling them automatically.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `infinite_bucket` |
| Module | libreforge |
| Category | Player, World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` / `types` (either) | String List | ✅ | — | — | The bucket type(s) to make infinite. Use 'any' to apply to all bucket types. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectInfiniteBucket.kt`).

- **Source Description**: Prevents the specified bucket types from being emptied, refilling them automatically.

- **Categories**: `player, world`

## Configuration Example

```yaml
- id: infinite_bucket
  args:
    type: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
