---
title: envoy_type
titleZh: envoy_type
category: filters
subcategory: axenvoy
tags:
  - libreforge
outline: deep
---

# envoy_type <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the collected envoy crate type matches one of the given names.

> **Requires:** AxEnvoy

## Overview

| Property | Value |
|----------|-------|
| Type ID | `envoy_type` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  envoy_type: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_envoy_type`):

```yaml
filters:
  not_envoy_type: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/axplugins/axenvoy/impl/FilterEnvoyType.kt`).

- **Source Description**: Matches when the collected envoy crate type matches one of the given names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
