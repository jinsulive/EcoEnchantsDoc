---
title: item_durability_below
titleZh: item_durability_below
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# item_durability_below <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the held item's remaining durability is at or below the given amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_durability_below` |
| Module | libreforge |
| Category | Inventory |
| Value Type | `int` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  item_durability_below: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_item_durability_below`):

```yaml
filters:
  not_item_durability_below: <value>
```

> **Value**: Integer (supports expressions).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItemDurabilityBelow.kt`).

- **Source Description**: Matches when the held item's remaining durability is at or below the given amount.

- **Categories**: `inventory`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
