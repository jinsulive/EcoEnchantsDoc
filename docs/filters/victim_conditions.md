---
title: victim_conditions
titleZh: victim_conditions
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# victim_conditions <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim entity meets all of the given conditions.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_conditions` |
| Module | libreforge |
| Category | Entity |
| Value Type | `any` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  victim_conditions: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_victim_conditions`):

```yaml
filters:
  not_victim_conditions: <value>
```

> **Value**: Any — list of conditions.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterVictimConditions.kt`).

- **Source Description**: Matches when the victim entity meets all of the given conditions.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
