---
title: block_item_drop
titleZh: block_item_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# block_item_drop <Badge type="info" text="libreforge" /> 

> Triggered when a mined block drops loot

## Overview

| Property | Value |
|----------|-------|
| Type ID | `block_item_drop` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items dropped |

## Configuration Example

```yaml
triggers:
  - block_item_drop
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items dropped |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
