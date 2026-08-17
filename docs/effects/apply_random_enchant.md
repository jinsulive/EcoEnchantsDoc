---
title: apply_random_enchant
titleZh: apply_random_enchant
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# apply_random_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Applies a random enchantment to the triggering item,

## Overview

| Property | Value |
|----------|-------|
| Type ID | `apply_random_enchant` |
| Module | libreforge |
| Category | Inventory |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `types` | String List | — | `[]` | — | If not empty, only enchantments belonging to these enchantment types can be chosen. |
| `rarities` | String List | — | `[]` | — | If not empty, only enchantments with these rarities can be chosen. |
| `enchants` | Enchantment List | — | `[]` | — | If not empty, only enchantments with these IDs can be chosen. |
| `allow_unsafe` | Boolean | — | `false` | — | If true, enchantments that wouldn't normally be allowed on the item |

## 📝 Source Notes

> The following information is from the libreforge source code (`EcoEnchants/eco-core/core-plugin/src/main/kotlin/com/willfp/ecoenchants/libreforge/EffectApplyRandomEnchant.kt`).

- **Source Description**: Applies a random enchantment to the triggering item,

- **Categories**: `inventory`

## Configuration Example

```yaml
- id: apply_random_enchant
  args:
    types: <value>
    rarities: <value>
    enchants: <value>
    allow_unsafe: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
