---
title: blocks
titleZh: blocks
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the block type is in the given list.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `blocks` |
| Module | libreforge |
| Category | World |
| Value Type | `block[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  blocks: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_blocks`):

```yaml
filters:
  not_blocks: <value>
```

::: warning ⚠️ Target Missing Behavior

This filter passes automatically when the target is missing from the trigger data (e.g. `entities` passes when there is no victim; `blocks` passes when there is no block). To match **only** a hit block, use a custom `hit_block` filter.

:::

> 💡 See the [Enum Quick Reference](../reference/enums#material) for the full `Material` value list.

> **Value**: Block list → `Material` enum, e.g. `[STONE, DIRT]`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterBlocks.kt`).

- **Source Description**: Matches when the block type is in the given list.

- **Categories**: `world`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
