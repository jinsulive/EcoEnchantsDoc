---
title: custom_crop_stage
titleZh: custom_crop_stage
category: filters
subcategory: customcrops
tags:
  - libreforge
outline: deep
---

# custom_crop_stage <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the broken crop's stage item ID matches one of the given IDs.

> **Requires:** CustomCrops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `custom_crop_stage` |
| Module | libreforge |
| Category | World |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  custom_crop_stage: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_custom_crop_stage`):

```yaml
filters:
  not_custom_crop_stage: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/xiaomomiplugins/customcrops/impl/FilterCustomCropStage.kt`).

- **Source Description**: Matches when the broken crop's stage item ID matches one of the given IDs.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
