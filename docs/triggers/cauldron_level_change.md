---
title: cauldron_level_change
titleZh: cauldron_level_change
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# cauldron_level_change <Badge type="info" text="libreforge" /> 

> Triggered when a cauldron's water level changes

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cauldron_level_change` |
| Module | libreforge |
| Category | Internal |
| Value | The new cauldron level |

## Configuration Example

```yaml
triggers:
  - cauldron_level_change
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new cauldron level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
