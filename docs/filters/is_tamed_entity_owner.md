---
title: is_tamed_entity_owner
titleZh: is_tamed_entity_owner
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_tamed_entity_owner <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the player is (or is not) the owner of the tamed victim entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_tamed_entity_owner` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_tamed_entity_owner: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_tamed_entity_owner`):

```yaml
filters:
  not_is_tamed_entity_owner: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsTamedEntityOwner.kt`).

- **Source Description**: Matches when the player is (or is not) the owner of the tamed victim entity.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
