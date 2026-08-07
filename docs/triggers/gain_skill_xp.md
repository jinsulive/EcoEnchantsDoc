---
title: gain_skill_xp
titleZh: gain_skill_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoskills
outline: deep
---

# gain_skill_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoSkills" />

> Triggered when gaining skill experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_skill_xp` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The experience gained |
| Requires | EcoSkills |

## Configuration Example

```yaml
triggers:
  - gain_skill_xp
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
