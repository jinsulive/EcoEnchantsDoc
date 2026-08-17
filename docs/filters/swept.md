---
title: swept
titleZh: swept
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# swept <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the attack is (or is not) a sweep attack.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `swept` |
| Module | libreforge |
| Category | Combat |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  swept: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_swept`):

```yaml
filters:
  not_swept: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterSwept.kt`).

- **Source Description**: Matches when the attack is (or is not) a sweep attack.

- **Categories**: `combat`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
