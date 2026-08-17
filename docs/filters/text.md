---
title: text
titleZh: text
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# text <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the trigger text exactly matches one of the given values.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `text` |
| Module | libreforge |
| Category | Meta |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  text: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_text`):

```yaml
filters:
  not_text: <value>
```

> **Value**: Text list (exact match against trigger text).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterText.kt`).

- **Source Description**: Matches when the trigger text exactly matches one of the given values.

- **Categories**: `meta`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
