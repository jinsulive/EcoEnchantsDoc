---
title: mine_block_cascade
titleZh: mine_block_cascade
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# mine_block_cascade <Badge type="info" text="libreforge" /> 

> Triggered for each block broken in a cascade (sugar cane, bamboo, cactus, kelp, vines, chorus plant/flower)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_block_cascade` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - mine_block_cascade
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
