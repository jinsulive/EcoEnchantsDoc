---
title: advancements
titleZh: advancements
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# advancements <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the advancement completed matches one of the given advancement keys.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `advancements` |
| Module | libreforge |
| Category | Player |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  advancements: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_advancements`):

```yaml
filters:
  not_advancements: <value>
```

> **Value**: Advancement key list (namespaced), e.g. `minecraft:story/mine_stone`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterAdvancements.kt`).

- **Source Description**: Matches when the advancement completed matches one of the given advancement keys.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
