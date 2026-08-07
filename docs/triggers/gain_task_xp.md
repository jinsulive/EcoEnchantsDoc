---
title: gain_task_xp
titleZh: gain_task_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
---

# gain_task_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />

> Triggered when gaining task XP

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_task_xp` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The experience gained |
| Requires | EcoQuests |

## Configuration Example

```yaml
triggers:
  - gain_task_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
