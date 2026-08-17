---
title: from_spawner
titleZh: from_spawner
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# from_spawner <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim was (or was not) spawned by a mob spawner.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `from_spawner` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  from_spawner: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_from_spawner`):

```yaml
filters:
  not_from_spawner: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterFromSpawner.kt`).

- **Source Description**: Matches when the victim was (or was not) spawned by a mob spawner.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
