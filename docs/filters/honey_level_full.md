---
title: honey_level_full
titleZh: honey_level_full
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# honey_level_full <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the beehive or bee nest block has a full honey level.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `honey_level_full` |
| Module | libreforge |
| Category | World |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  honey_level_full: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_honey_level_full`):

```yaml
filters:
  not_honey_level_full: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterHoneyLevelFull.kt`).

- **Source Description**: Matches when the beehive or bee nest block has a full honey level.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
