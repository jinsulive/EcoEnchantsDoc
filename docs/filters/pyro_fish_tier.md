---
title: pyro_fish_tier
titleZh: pyro_fish_tier
category: filters
subcategory: pyrofishingpro
tags:
  - libreforge
outline: deep
---

# pyro_fish_tier <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the caught fish tier matches one of the given tier names.

> **Requires:** PyroFishingPro

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pyro_fish_tier` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  pyro_fish_tier: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_pyro_fish_tier`):

```yaml
filters:
  not_pyro_fish_tier: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/pyrofishingpro/impl/FilterFishTier.kt`).

- **Source Description**: Matches when the caught fish tier matches one of the given tier names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
