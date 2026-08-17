---
title: gain_mcmmo_xp
titleZh: gain_mcmmo_xp
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# gain_mcmmo_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />
> **Requires:** mcMMO

> Fires when the player gains McMMO experience.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_mcmmo_xp` |
| Module | libreforge |
| Category | External Integration |
| Value | The xp gained |
| Requires | McMMO |

## Configuration Example

```yaml
triggers:
  - gain_mcmmo_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The xp gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
