---
title: quest_xp_multiplier
titleZh: quest_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# quest_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies quest xp gain

> **Requires:** EcoQuests

## Overview

| Property | Value |
|----------|-------|
| Type ID | `quest_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The experience multiplier |
| `quests` | The list of quests to multiply xp for. If removed, it will multiply all quests. |

## Configuration Example

```yaml
- id: quest_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    quests: # The list of quests to multiply xp for. If removed, it will multiply all quests.
      - daily_1
      - weekly_1
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
