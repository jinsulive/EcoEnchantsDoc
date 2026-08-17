---
title: fully_charged
titleZh: fully_charged
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# fully_charged <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the attack or bow shot is (or is not) fully charged.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fully_charged` |
| Module | libreforge |
| Category | Combat |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  fully_charged: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_fully_charged`):

```yaml
filters:
  not_fully_charged: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterFullyCharged.kt`).

- **Source Description**: Matches when the attack or bow shot is (or is not) fully charged.

- **Categories**: `combat`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
