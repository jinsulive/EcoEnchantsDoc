---
title: cast_mythic_skill
titleZh: cast_mythic_skill
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# cast_mythic_skill <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Casts a MythicMobs skill on the target.

> **Requires:** MythicMobs

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cast_mythic_skill` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `skill` | The ID of the skill to cast |
| `victim_to_player` | For passive skill, set it to true. |

## Configuration Example

```yaml
- id: cast_mythic_skill
  args:
    skill: "skill ID" # The ID of the skill to cast
    victim_to_player: true # For passive skill, set it to true.
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
