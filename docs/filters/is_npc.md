---
title: is_npc
titleZh: is_npc
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# is_npc <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the victim is (or is not) an NPC.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_npc` |
| Module | libreforge |
| Category | Entity |
| Value Type | `boolean` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  is_npc: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_is_npc`):

```yaml
filters:
  not_is_npc: <value>
```

> **Value**: Boolean.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterIsNPC.kt`).

- **Source Description**: Matches when the victim is (or is not) an NPC.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
