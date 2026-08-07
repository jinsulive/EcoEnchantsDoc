---
title: bow_attack
titleZh: bow_attack
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# bow_attack <Badge type="info" text="libreforge" /> 

> Triggered when shooting an entity with a bow and arrow (or crossbow)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bow_attack` |
| Module | libreforge |
| Category | Internal |
| Value | The damage dealt |

## Configuration Example

```yaml
triggers:
  - bow_attack
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
