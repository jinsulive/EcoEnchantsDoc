---
title: player_name
titleZh: player_name
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# player_name <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the player's name is in the given list.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `player_name` |
| Module | libreforge |
| Category | Player |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  player_name: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_player_name`):

```yaml
filters:
  not_player_name: <value>
```

> **Value**: Player name list (exact match).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterPlayerName.kt`).

- **Source Description**: Matches when the player's name is in the given list.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
