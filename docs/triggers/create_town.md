---
title: create_town
titleZh: create_town
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns
outline: deep
---

# create_town <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns" />
> **Requires:** HuskTowns

> Fires when the player creates a HuskTowns town.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_town` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns |

## Configuration Example

```yaml
triggers:
  - create_town
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
