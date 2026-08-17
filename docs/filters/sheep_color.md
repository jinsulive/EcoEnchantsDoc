---
title: sheep_color
titleZh: sheep_color
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# sheep_color <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim sheep's wool color matches one of the given colors.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sheep_color` |
| Module | libreforge |
| Category | Entity |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  sheep_color: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_sheep_color`):

```yaml
filters:
  not_sheep_color: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#dyecolor) for the full `DyeColor` value list.

> **Value**: Wool color list → `DyeColor` enum, e.g. `[RED, BLUE]`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterSheepColor.kt`).

- **Source Description**: Matches when the victim sheep's wool color matches one of the given colors.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
