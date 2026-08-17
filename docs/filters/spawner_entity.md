---
title: spawner_entity
titleZh: spawner_entity
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# spawner_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the block is a spawner and its spawn type matches one of the given entity types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawner_entity` |
| Module | libreforge |
| Category | World, Entity |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  spawner_entity: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_spawner_entity`):

```yaml
filters:
  not_spawner_entity: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#entitytype) for the full `EntityType` value list.

> **Value**: Spawner spawn type → `EntityType` enum.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterSpawnerEntity.kt`).

- **Source Description**: Matches when the block is a spawner and its spawn type matches one of the given entity types.

- **Categories**: `world, entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
