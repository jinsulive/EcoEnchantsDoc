---
title: kill
titleZh: kill
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# kill <Badge type="info" text="libreforge" /> 

> Triggered when a player kills a player or entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `kill` |
| Module | libreforge |
| Category | Internal |
| Value | The victim's max health |

## Configuration Example

```yaml
triggers:
  - kill
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The victim's max health |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
