---
title: give_mcmmo_xp
titleZh: give_mcmmo_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_mcmmo_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player raw XP in a specified McMMO skill.

> **Requires:** mcMMO

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_mcmmo_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The amount of raw XP to give. Supports expressions. |
| `skill` | String | ✅ | — | — | The McMMO skill name to give XP for, e.g. mining. |

## Configuration Example

```yaml
- id: give_mcmmo_xp
  args:
    amount: 100 # The amount of xp to give
    skill: exploration # The skill to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
