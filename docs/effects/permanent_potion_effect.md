---
title: permanent_potion_effect
titleZh: permanent_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# permanent_potion_effect <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives a permanent potion effect

## Overview

| Property | Value |
|----------|-------|
| Type ID | `permanent_potion_effect` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effect` | The effect to give |
| `level` | The effect level to give |
| `particles` | (Optional) If the effect should show particles |
| `icon` | (Optional) If the effect should show the icon in the top corner |

## Configuration Example

```yaml
- id: permanent_potion_effect
  args:
    effect: blindness # The effect to give
    level: 2 # The effect level to give
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
