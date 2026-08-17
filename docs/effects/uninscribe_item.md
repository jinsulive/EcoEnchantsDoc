---
title: uninscribe_item
titleZh: uninscribe_item
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# uninscribe_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Removes or decreases the level of a scroll inscribed on an item

> **Requires:** EcoScrolls

## Overview

| Property | Value |
|----------|-------|
| Type ID | `uninscribe_item` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `scroll` | The scroll ID to remove |
| `type` | (Optional) Use "remove" to remove the scroll entirely, "decrease" reduces level by 1 (removes at level 0). Defaults to "remove" |

## Configuration Example

```yaml
- id: uninscribe_item
  args:
    scroll: example_scroll # The scroll ID to remove
    type: remove # (Optional) Use "remove" to remove the scroll entirely, "decrease" reduces level by 1 (removes at level 0). Defaults to "remove"
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
