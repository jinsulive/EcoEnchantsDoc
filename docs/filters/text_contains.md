---
title: text_contains
titleZh: text_contains
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# text_contains <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the trigger text contains one of the given substrings.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `text_contains` |
| Module | libreforge |
| Category | Meta |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  text_contains: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_text_contains`):

```yaml
filters:
  not_text_contains: <value>
```

> **Value**: Substring list (contains match).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterTextContains.kt`).

- **Source Description**: Matches when the trigger text contains one of the given substrings.

- **Categories**: `meta`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
