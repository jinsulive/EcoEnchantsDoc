---
title: pyro_catch_fish
titleZh: pyro_catch_fish
category: triggers
subcategory: external
tags:
  - libreforge
  - pyrofishingpro
outline: deep
---

# pyro_catch_fish <Badge type="info" text="libreforge" /> <Badge type="warning" text="PyroFishingPro" />

> Triggered when catching a fish

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pyro_catch_fish` |
| Module | libreforge |
| Category | External Integration |
| Value | The fish number |
| Requires | PyroFishingPro |

## Configuration Example

```yaml
triggers:
  - pyro_catch_fish
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The fish number |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
