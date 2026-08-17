---
title: enchant
titleZh: enchant
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when one of the enchantments being applied matches one of the given enchantment IDs.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enchant` |
| Module | libreforge |
| Category | Inventory |
| Value Type | `enchantment[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  enchant: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_enchant`):

```yaml
filters:
  not_enchant: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#enchantment) for the full `Enchantment` value list.

> **Value**: Enchantment key list, e.g. `sharpness` (case-insensitive).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterEnchant.kt`).

- **Source Description**: Matches when one of the enchantments being applied matches one of the given enchantment IDs.

- **Categories**: `inventory`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
