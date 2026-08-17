---
title: on_max_health
titleZh: on_max_health
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# on_max_health <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is (or is not) at maximum health.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `on_max_health` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  on_max_health: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_on_max_health`):

```yaml
filters:
  not_on_max_health: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterOnMaxHealth.kt`).

- **Source Description**: Matches when the victim is (or is not) at maximum health.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
