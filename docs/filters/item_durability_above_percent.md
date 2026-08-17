---
title: item_durability_above_percent
titleZh: item_durability_above_percent
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# item_durability_above_percent <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the held item's remaining durability percentage is at or above the given value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_durability_above_percent` |
| Module | libreforge |
| Category | Inventory |
| Value Type | `double` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  item_durability_above_percent: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_item_durability_above_percent`):

```yaml
filters:
  not_item_durability_above_percent: <value>
```

> **Value**: Percentage 0–100 (supports expressions).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterItemDurabilityAbovePercent.kt`).

- **Source Description**: Matches when the held item's remaining durability percentage is at or above the given value.

- **Categories**: `inventory`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
