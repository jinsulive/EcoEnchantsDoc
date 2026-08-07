---
title: give_skill_xp_naturally
titleZh: give_skill_xp_naturally
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_skill_xp_naturally <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives naturally-gained experience points for a certain skill. This will send a message to a player and will include multipliers.

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_skill_xp_naturally` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of xp to give |
| `skill` | The skill to give the xp for |

## Configuration Example

```yaml
- id: give_skill_xp_naturally
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
