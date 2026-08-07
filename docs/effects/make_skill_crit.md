---
title: make_skill_crit
titleZh: make_skill_crit
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# make_skill_crit <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Deal a crit hit

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `make_skill_crit` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | Multiplies attack damage as a crit |

## Configuration Example

```yaml
- id: make_skill_crit
  args:
    multiplier: 1.5 # Multiplies attack damage as a crit
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
