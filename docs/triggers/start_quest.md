---
title: start_quest
titleZh: start_quest
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
deprecated: true
---

# start_quest <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when starting a quest

## Overview

| Property | Value |
|----------|-------|
| Type ID | `start_quest` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoQuests |

## Configuration Example

```yaml
triggers:
  - start_quest
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
