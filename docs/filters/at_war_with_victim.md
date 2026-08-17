---
title: at_war_with_victim
titleZh: at_war_with_victim
category: filters
subcategory: lands
tags:
  - libreforge
outline: deep
---

# at_war_with_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the player and victim are (or are not) at war with each other in Lands.

> **Requires:** Lands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `at_war_with_victim` |
| Module | libreforge |
| Category | Combat, Player |
| Value Type | `BOOLEAN` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  at_war_with_victim: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_at_war_with_victim`):

```yaml
filters:
  not_at_war_with_victim: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/lands/impl/FilterAtWarWithVictim.kt`).

- **Source Description**: Matches when the player and victim are (or are not) at war with each other in Lands.

- **Categories**: `combat, player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
