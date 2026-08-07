---
title: level_up_pet
titleZh: level_up_pet
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecopets
outline: deep
---

# level_up_pet <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoPets" />

> Triggered when levelling up a pet

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_pet` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The new level |
| Requires | EcoPets |

## Configuration Example

```yaml
triggers:
  - level_up_pet
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
