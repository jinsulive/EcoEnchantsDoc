---
title: damage_item
titleZh: damage_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# damage_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Applies durability damage to the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression | ✅ | — | — | The amount of durability damage to apply to the item. Supports expressions. Inherited from the `DamageItemEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageItem.kt`).

- **Source Description**: Applies durability damage to the triggering item.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: damage_item
  args:
    damage: 2 # The durability to damage
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
