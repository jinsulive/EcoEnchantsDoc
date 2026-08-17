---
title: consume_held_item
titleZh: consume_held_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# consume_held_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a number of items from the player's main hand.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `consume_held_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of items to remove from the main hand. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectConsumeHeldItem.kt`).

- **Source Description**: Removes a number of items from the player's main hand.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: consume_held_item
  args:
    amount: 1 # The amount of items to remove (i.e. 1 apple, 2 apples, etc)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
