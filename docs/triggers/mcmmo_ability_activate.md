---
title: mcmmo_ability_activate
titleZh: mcmmo_ability_activate
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# mcmmo_ability_activate <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />
> **Requires:** mcMMO

> Fires when the player activates a McMMO ability.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mcmmo_ability_activate` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | McMMO |

## Configuration Example

```yaml
triggers:
  - mcmmo_ability_activate
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
