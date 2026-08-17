---
title: has_skill_level
titleZh: has_skill_level
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_skill_level <Badge type="info" text="libreforge" />
> **Requires:** AuraSkills

> Passes when the player has reached at least the specified level in a given AuraSkills skill.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_skill_level` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `skill` | String | ✅ | — | — | The AuraSkills skill to check (e.g. FARMING, MINING). |
| `level` | Expression | ✅ | — | — | The minimum skill level the player must have. |

## Configuration Example

```yaml
- id: has_skill_level
  args:
    skill: combat # The skill ID
    level: 30 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
