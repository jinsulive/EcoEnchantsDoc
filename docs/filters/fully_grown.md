---
title: fully_grown
titleZh: fully_grown
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# fully_grown <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the block is (or is not) fully grown.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fully_grown` |
| Module | libreforge |
| Category | World |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  fully_grown: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_fully_grown`):

```yaml
filters:
  not_fully_grown: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterFullyGrown.kt`).

- **Source Description**: Matches when the block is (or is not) fully grown.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
