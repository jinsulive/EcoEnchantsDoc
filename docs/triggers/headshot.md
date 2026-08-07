---
title: headshot
titleZh: headshot
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# headshot <Badge type="info" text="libreforge" /> 

> Triggered when hitting an enemy with a projectile in the head

## Overview

| Property | Value |
|----------|-------|
| Type ID | `headshot` |
| Module | libreforge |
| Category | Internal |
| Value | The damage dealt |

## Configuration Example

```yaml
triggers:
  - headshot
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
