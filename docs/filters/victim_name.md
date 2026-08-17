---
title: victim_name
titleZh: victim_name
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# victim_name <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim's name is in the given list.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_name` |
| Module | libreforge |
| Category | Entity |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  victim_name: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_victim_name`):

```yaml
filters:
  not_victim_name: <value>
```

> **Value**: Entity/player name list.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterVictimName.kt`).

- **Source Description**: Matches when the victim's name is in the given list.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
