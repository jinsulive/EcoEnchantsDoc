---
title: alt_value_above
titleZh: alt_value_above
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# alt_value_above <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the trigger's alt value is greater than or equal to the given amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `alt_value_above` |
| Module | libreforge |
| Category | Value |
| Value Type | `double` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  alt_value_above: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_alt_value_above`):

```yaml
filters:
  not_alt_value_above: <value>
```

> **Value**: Number (supports expressions) — compared against the trigger's ALT_VALUE.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterAltValueAbove.kt`).

- **Source Description**: Matches when the trigger's alt value is greater than or equal to the given amount.

- **Categories**: `value`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
