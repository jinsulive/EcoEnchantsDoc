---
title: player_placed
titleZh: player_placed
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# player_placed <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the block was (or was not) placed by a player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `player_placed` |
| Module | libreforge |
| Category | World |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  player_placed: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_player_placed`):

```yaml
filters:
  not_player_placed: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterPlayerPlaced.kt`).

- **Source Description**: Matches when the block was (or was not) placed by a player.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
