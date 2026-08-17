---
title: use_fertilizer
titleZh: use_fertilizer
category: triggers
subcategory: external
tags:
  - libreforge
  - customcrops
outline: deep
---

# use_fertilizer <Badge type="info" text="libreforge" /> <Badge type="warning" text="CustomCrops" />
> **Requires:** CustomCrops

> Fires when the player uses a CustomCrops fertilizer on a crop.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `use_fertilizer` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | CustomCrops |

## Configuration Example

```yaml
triggers:
  - use_fertilizer
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
