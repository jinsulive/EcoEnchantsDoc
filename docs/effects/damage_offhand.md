---
title: damage_offhand
titleZh: damage_offhand
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_offhand <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage a victim's offhand item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_offhand` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Custom | — | — | — | The amount of damage to deal |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageOffhand.kt`).

- **Source Description**: Applies durability damage to the item in the victim's off hand.
- **Categories**: `combat`, `inventory`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: damage_offhand
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
