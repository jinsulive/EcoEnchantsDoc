---
title: npc
titleZh: npc
category: filters
subcategory: citizens
tags:
  - libreforge
outline: deep
---

# npc <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the Citizens NPC involved in the event has one of the given IDs.

> **Requires:** Citizens

## Overview

| Property | Value |
|----------|-------|
| Type ID | `npc` |
| Module | libreforge |
| Category | Entity |
| Value Type | `INT_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  npc: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_npc`):

```yaml
filters:
  not_npc: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/citizens/impl/FilterNPC.kt`).

- **Source Description**: Matches when the Citizens NPC involved in the event has one of the given IDs.

- **Categories**: `entity`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
