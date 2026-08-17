---
title: items
titleZh: items
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# items <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the held item matches one of the given item types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `items` |
| Module | libreforge |
| Category | Inventory |
| Value Type | `item[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  items: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_items`):

```yaml
filters:
  not_items: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums/material) for the full `Material` value list.

> **Value**: Item id/name list (eco Items resolution), e.g. `[DIAMOND_SWORD]` or `[minecraft:diamond_sword]`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItems.kt`).

- **Source Description**: Matches when the held item matches one of the given item types.

- **Categories**: `inventory`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
