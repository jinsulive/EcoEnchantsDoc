---
title: mine_block
titleZh: mine_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# mine_block <Badge type="info" text="libreforge" /> 

> Triggered when mining a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_block` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - mine_block
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
