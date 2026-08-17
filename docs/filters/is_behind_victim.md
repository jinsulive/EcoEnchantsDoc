---
title: is_behind_victim
titleZh: is_behind_victim
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_behind_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the player is (or is not) behind the victim.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_behind_victim` |
| Module | libreforge |
| Category | Combat, Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_behind_victim: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_behind_victim`):

```yaml
filters:
  not_is_behind_victim: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsBehindVictim.kt`).

- **Source Description**: Matches when the player is (or is not) behind the victim.

- **Categories**: `combat, entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
