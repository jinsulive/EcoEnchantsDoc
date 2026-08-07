---
title: lands_spawn_teleport
titleZh: lands_spawn_teleport
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# lands_spawn_teleport <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> Triggered when teleporting to Lands spawn

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_spawn_teleport` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Lands |

## Configuration Example

```yaml
triggers:
  - lands_spawn_teleport
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
