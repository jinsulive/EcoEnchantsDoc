---
title: add_luck
titleZh: add_luck
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_luck <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Permanently increases the player's luck attribute while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_luck` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The amount of luck to add. Supports expressions. Example: `%level% * 0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddLuck.kt`).

- **Source Description**: Permanently increases the player's luck attribute while the holder is active.
- **Categories**: `player`, `attribute`

## Configuration Example

```yaml
- id: add_luck
  args:
    amount: 1.5 # The amount of luck to add
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
