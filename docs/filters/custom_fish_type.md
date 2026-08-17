---
title: custom_fish_type
titleZh: custom_fish_type
category: filters
subcategory: customfishing
tags:
  - libreforge
outline: deep
---

# custom_fish_type <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the caught fish type matches one of the given IDs.

> **Requires:** CustomFishing

## Overview

| Property | Value |
|----------|-------|
| Type ID | `custom_fish_type` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  custom_fish_type: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_custom_fish_type`):

```yaml
filters:
  not_custom_fish_type: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/xiaomomiplugins/customfishing/impl/FilterCustomFishType.kt`).

- **Source Description**: Matches when the caught fish type matches one of the given IDs.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
