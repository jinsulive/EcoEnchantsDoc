---
title: mcmmo_xp_multiplier
titleZh: mcmmo_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# mcmmo_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies McMMO XP gained for one or all skills while the holder is active.

> **Requires:** mcMMO

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mcmmo_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The XP multiplier. Supports expressions. |
| `skills` | String_list | — | — | — | List of McMMO skill names to apply the multiplier to. If omitted, applies to all skills. |

## Configuration Example

```yaml
- id: mcmmo_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
      - mining
      - combat
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
