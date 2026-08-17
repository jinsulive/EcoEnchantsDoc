---
title: town_role
titleZh: town_role
category: filters
subcategory: husktowns
tags:
  - libreforge
outline: deep
---

# town_role <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the player's new HuskTowns town role matches one of the given role names.

> **Requires:** HuskTowns

## Overview

| Property | Value |
|----------|-------|
| Type ID | `town_role` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  town_role: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_town_role`):

```yaml
filters:
  not_town_role: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/huskintegration/husktowns/impl/FilterTownRole.kt`).

- **Source Description**: Matches when the player's new HuskTowns town role matches one of the given role names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
