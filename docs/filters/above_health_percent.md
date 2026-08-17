---
title: above_health_percent
titleZh: above_health_percent
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# above_health_percent <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim's current health percentage is at or above the given value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_health_percent` |
| Module | libreforge |
| Category | Entity, Combat |
| Value Type | `double` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  above_health_percent: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_above_health_percent`):

```yaml
filters:
  not_above_health_percent: <value>
```

> **Value**: Percentage 0–100 (supports expressions).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterAboveHealthPercent.kt`).

- **Source Description**: Matches when the victim's current health percentage is at or above the given value.

- **Categories**: `entity, combat`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
