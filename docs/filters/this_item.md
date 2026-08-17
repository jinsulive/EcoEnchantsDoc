---
title: this_item
titleZh: this_item
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# this_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the item that triggered the effect is the same item that holds this effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `this_item` |
| Module | libreforge |
| Category | Inventory, Meta |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  this_item: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_this_item`):

```yaml
filters:
  not_this_item: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterThisItem.kt`).

- **Source Description**: Matches when the item that triggered the effect is the same item that holds this effect.

- **Categories**: `inventory, meta`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
