---
title: only_non_bosses
titleZh: only_non_bosses
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# only_non_bosses <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is not a boss entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `only_non_bosses` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  only_non_bosses: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_only_non_bosses`):

```yaml
filters:
  not_only_non_bosses: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterOnlyNonBosses.kt`).

- **Source Description**: Matches when the victim is not a boss entity.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
