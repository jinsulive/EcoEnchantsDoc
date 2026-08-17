---
title: tamed_entity
titleZh: tamed_entity
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# tamed_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is a tamed entity of one of the given types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `tamed_entity` |
| Module | libreforge |
| Category | Entity |
| Value Type | `entity[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  tamed_entity: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_tamed_entity`):

```yaml
filters:
  not_tamed_entity: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#entitytype) for the full `EntityType` value list.

> **Value**: Tamed entity type list → `EntityType` enum.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterTamedEntity.kt`).

- **Source Description**: Matches when the victim is a tamed entity of one of the given types.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
