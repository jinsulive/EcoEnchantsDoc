---
title: battlepass_task_xp_multiplier
titleZh: battlepass_task_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# battlepass_task_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies incoming battlepass task xp gain

> **Requires:** EcoBattlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `battlepass_task_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The xp multiplier |
| `battlepasses` | The list of battlepasses to apply to |

## Configuration Example

```yaml
- id: battlepass_task_xp_multiplier
  args:
    multiplier: 2.05 # The xp multiplier
    battlepasses:
      - battlepass
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
