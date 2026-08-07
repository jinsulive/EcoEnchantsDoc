---
title: complete_battlepass_task
titleZh: complete_battlepass_task
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
---

# complete_battlepass_task <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />

> Triggered when completing a battlepass task

## Overview

| Property | Value |
|----------|-------|
| Type ID | `complete_battlepass_task` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoBattlepass |

## Configuration Example

```yaml
triggers:
  - complete_battlepass_task
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
