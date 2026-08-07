---
title: complete_quest
titleZh: complete_quest
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
---

# complete_quest <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />

> Triggered when completing a quest

## Overview

| Property | Value |
|----------|-------|
| Type ID | `complete_quest` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoQuests |

## Configuration Example

```yaml
triggers:
  - complete_quest
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
