---
title: anvil_modify
titleZh: anvil_modify
category: triggers
subcategory: internal
tags:
  - libreforge
  - purpur
outline: deep
---

# anvil_modify <Badge type="info" text="libreforge" /> <Badge type="warning" text="Purpur" />

> Triggered when a player takes a modified item from an anvil

## Overview

| Property | Value |
|----------|-------|
| Type ID | `anvil_modify` |
| Module | libreforge |
| Category | Internal |
| Value | The experience cost |
| Requires | Purpur |

## Configuration Example

```yaml
triggers:
  - anvil_modify
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience cost |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
