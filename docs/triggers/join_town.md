---
title: join_town
titleZh: join_town
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns
outline: deep
---

# join_town <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns" />
> **Requires:** HuskTowns

> Fires when the player joins a HuskTowns town.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `join_town` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns |

## Configuration Example

```yaml
triggers:
  - join_town
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
