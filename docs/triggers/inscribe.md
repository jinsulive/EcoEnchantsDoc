---
title: inscribe
titleZh: inscribe
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoscrolls
outline: deep
---

# inscribe <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoScrolls" />

> Triggered when inscribing a scroll

## Overview

| Property | Value |
|----------|-------|
| Type ID | `inscribe` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoScrolls |

## Configuration Example

```yaml
triggers:
  - inscribe
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
