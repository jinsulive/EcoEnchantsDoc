---
title: region
titleZh: region
category: filters
subcategory: worldguard
tags:
  - libreforge
outline: deep
---

# region <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the event occurs in one of the given WorldGuard region IDs.

> **Requires:** WorldGuard

## Overview

| Property | Value |
|----------|-------|
| Type ID | `region` |
| Module | libreforge |
| Category | World |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  region: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_region`):

```yaml
filters:
  not_region: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/worldguard/impl/FilterRegion.kt`).

- **Source Description**: Matches when the event occurs in one of the given WorldGuard region IDs.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
