---
title: pyro_fish_hotspot
titleZh: pyro_fish_hotspot
category: filters
subcategory: pyrofishingpro
tags:
  - libreforge
outline: deep
---

# pyro_fish_hotspot <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the fishing catch is (or is not) from a hotspot.

> **Requires:** PyroFishingPro

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pyro_fish_hotspot` |
| Module | libreforge |
| Category | Player |
| Value Type | `BOOLEAN` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  pyro_fish_hotspot: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_pyro_fish_hotspot`):

```yaml
filters:
  not_pyro_fish_hotspot: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/pyrofishingpro/impl/FilterFishHotspot.kt`).

- **Source Description**: Matches when the fishing catch is (or is not) from a hotspot.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
