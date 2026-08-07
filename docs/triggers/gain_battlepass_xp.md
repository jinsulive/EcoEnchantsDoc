---
title: gain_battlepass_xp
titleZh: gain_battlepass_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
---

# gain_battlepass_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />

> Triggered when gaining battlepass XP

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_battlepass_xp` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The experience gained |
| Requires | EcoBattlepass |

## Configuration Example

```yaml
triggers:
  - gain_battlepass_xp
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
