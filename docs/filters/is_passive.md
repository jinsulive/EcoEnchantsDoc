---
title: is_passive
titleZh: is_passive
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_passive <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is (or is not) a passive creature.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_passive` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_passive: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_passive`):

```yaml
filters:
  not_is_passive: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsPassive.kt`).

- **Source Description**: Matches when the victim is (or is not) a passive creature.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
