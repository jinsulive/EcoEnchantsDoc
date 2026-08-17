---
title: potion_effect
titleZh: potion_effect
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the potion effect being applied matches one of the given effect types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `potion_effect` |
| Module | libreforge |
| Category | Player, Entity |
| Value Type | `potion_effect[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  potion_effect: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_potion_effect`):

```yaml
filters:
  not_potion_effect: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#potioneffecttype) for the full `PotionEffectType` value list.

> **Value**: Potion effect list → `PotionEffectType` key.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterPotionEffect.kt`).

- **Source Description**: Matches when the potion effect being applied matches one of the given effect types.

- **Categories**: `player, entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
