---
title: mcmmo_ability
titleZh: mcmmo_ability
category: filters
subcategory: mcmmo
tags:
  - libreforge
outline: deep
---

# mcmmo_ability <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the McMMO ability involved in the event matches one of the given ability names.

> **Requires:** mcMMO

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mcmmo_ability` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  mcmmo_ability: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_mcmmo_ability`):

```yaml
filters:
  not_mcmmo_ability: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/mcmmo/impl/FilterMcMMOAbility.kt`).

- **Source Description**: Matches when the McMMO ability involved in the event matches one of the given ability names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
