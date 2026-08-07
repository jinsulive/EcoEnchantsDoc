---
title: complete_task
titleZh: complete_task
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
---

# complete_task <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />

> Triggered when completing a task

## Overview

| Property | Value |
|----------|-------|
| Type ID | `complete_task` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoQuests |

## Configuration Example

```yaml
triggers:
  - complete_task
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
