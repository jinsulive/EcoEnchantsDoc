---
title: take_mythic_damage
titleZh: take_mythic_damage
category: triggers
subcategory: external
tags:
  - libreforge
  - mythicmobs
outline: deep
---

# take_mythic_damage <Badge type="info" text="libreforge" /> <Badge type="warning" text="MythicMobs" />

> Triggered when taking MythicMobs damage

## Overview

| Property | Value |
|----------|-------|
| Type ID | `take_mythic_damage` |
| Module | libreforge |
| Category | External Integration |
| Value | The damage taken |
| Requires | MythicMobs |

## Configuration Example

```yaml
triggers:
  - take_mythic_damage
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage taken |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
