---
title: is_expression_true
titleZh: is_expression_true
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_expression_true <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the given mathematical expression evaluates to a value greater than zero.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_expression_true` |
| Module | libreforge |
| Category | Meta |
| Value Type | `expression` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_expression_true: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_expression_true`):

```yaml
filters:
  not_is_expression_true: <value>
```

> **Value**: Mathematical expression — passes when > 0, e.g. `%level% > 2`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsExpressionTrue.kt`).

- **Source Description**: Matches when the given mathematical expression evaluates to a value greater than zero.

- **Categories**: `meta`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
