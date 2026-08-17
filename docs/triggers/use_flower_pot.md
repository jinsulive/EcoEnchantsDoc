---
title: use_flower_pot
titleZh: use_flower_pot
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# use_flower_pot <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />
> **Requires:** Paper

> Fires when the player places or removes a plant from a flower pot.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `use_flower_pot` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - use_flower_pot
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
