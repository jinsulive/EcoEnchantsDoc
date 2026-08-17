---
title: fertilizer_type
titleZh: fertilizer_type
category: filters
subcategory: customcrops
tags:
  - libreforge
outline: deep
---

# fertilizer_type <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the fertilizer used matches one of the given fertilizer IDs.

> **Requires:** CustomCrops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fertilizer_type` |
| Module | libreforge |
| Category | World |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  fertilizer_type: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_fertilizer_type`):

```yaml
filters:
  not_fertilizer_type: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/xiaomomiplugins/customcrops/impl/FilterFertilizerType.kt`).

- **Source Description**: Matches when the fertilizer used matches one of the given fertilizer IDs.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
