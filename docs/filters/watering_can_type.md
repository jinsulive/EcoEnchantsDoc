---
title: watering_can_type
titleZh: watering_can_type
category: filters
subcategory: customcrops
tags:
  - libreforge
outline: deep
---

# watering_can_type <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the watering can used matches one of the given watering can IDs.

> **Requires:** CustomCrops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `watering_can_type` |
| Module | libreforge |
| Category | World |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  watering_can_type: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_watering_can_type`):

```yaml
filters:
  not_watering_can_type: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/xiaomomiplugins/customcrops/impl/FilterWateringCanType.kt`).

- **Source Description**: Matches when the watering can used matches one of the given watering can IDs.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
