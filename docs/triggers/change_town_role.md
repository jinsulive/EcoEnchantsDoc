---
title: change_town_role
titleZh: change_town_role
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns
outline: deep
---

# change_town_role <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns" />
> **Requires:** HuskTowns

> Fires when the player's role in their HuskTowns town changes.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `change_town_role` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns |

## Configuration Example

```yaml
triggers:
  - change_town_role
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
