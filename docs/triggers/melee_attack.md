---
title: melee_attack
titleZh: melee_attack
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# melee_attack <Badge type="info" text="libreforge" /> 

> Triggered when injuring an entity with a melee attack

## Overview

| Property | Value |
|----------|-------|
| Type ID | `melee_attack` |
| Module | libreforge |
| Category | Internal |
| Value | The damage dealt |

## Configuration Example

```yaml
triggers:
  - melee_attack
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage dealt |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
