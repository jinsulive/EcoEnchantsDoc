---
title: try_inscribe
titleZh: try_inscribe
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoscrolls
outline: deep
---

# try_inscribe <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoScrolls" />

> Triggered when attempting to inscribe a scroll

## Overview

| Property | Value |
|----------|-------|
| Type ID | `try_inscribe` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoScrolls |

## Configuration Example

```yaml
triggers:
  - try_inscribe
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
