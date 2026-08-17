---
title: use_watering_can
titleZh: use_watering_can
category: triggers
subcategory: external
tags:
  - libreforge
  - customcrops
outline: deep
---

# use_watering_can <Badge type="info" text="libreforge" /> <Badge type="warning" text="CustomCrops" />
> **Requires:** CustomCrops

> Fires when the player uses a CustomCrops watering can.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `use_watering_can` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | CustomCrops |

## Configuration Example

```yaml
triggers:
  - use_watering_can
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
