---
title: plant_custom_crop
titleZh: plant_custom_crop
category: triggers
subcategory: external
tags:
  - libreforge
  - customcrops
outline: deep
---

# plant_custom_crop <Badge type="info" text="libreforge" /> <Badge type="warning" text="CustomCrops" />

> Triggered when planting a custom crop

## Overview

| Property | Value |
|----------|-------|
| Type ID | `plant_custom_crop` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | CustomCrops |

## Configuration Example

```yaml
triggers:
  - plant_custom_crop
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
