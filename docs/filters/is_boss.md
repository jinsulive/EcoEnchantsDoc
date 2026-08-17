---
title: is_boss
titleZh: is_boss
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_boss <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is (or is not) a boss entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_boss` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_boss: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_boss`):

```yaml
filters:
  not_is_boss: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsBoss.kt`).

- **Source Description**: Matches when the victim is (or is not) a boss entity.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
