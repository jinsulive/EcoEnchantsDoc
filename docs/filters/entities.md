---
title: entities
titleZh: entities
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# entities <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim entity type is in the given list.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entities` |
| Module | libreforge |
| Category | Entity |
| Value Type | `entity[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  entities: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_entities`):

```yaml
filters:
  not_entities: <value>
```

::: warning ⚠️ Target Missing Behavior

This filter passes automatically when the target is missing from the trigger data (e.g. `entities` passes when there is no victim; `blocks` passes when there is no block). To match **only** a hit block, use a custom `hit_block` filter.

:::

> 💡 See the [Enum Quick Reference](../reference/enums/entity_type) for the full `EntityType` value list.

> **Value**: Entity type list → `EntityType` enum, e.g. `[ZOMBIE, SKELETON]`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterEntities.kt`).

- **Source Description**: Matches when the victim entity type is in the given list.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
