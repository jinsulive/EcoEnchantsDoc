---
title: shield_block
titleZh: shield_block
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shield_block <Badge type="info" text="libreforge" /> 

> Triggered when blocking an attack with a shield

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shield_block` |
| Module | libreforge |
| Category | Internal |
| Value | The damage blocked |

## Configuration Example

```yaml
triggers:
  - shield_block
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage blocked |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
