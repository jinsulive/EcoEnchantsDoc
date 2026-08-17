---
title: disband_town
titleZh: disband_town
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns
outline: deep
---

# disband_town <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns" />
> **Requires:** HuskTowns

> Fires when the player disbands their HuskTowns town.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `disband_town` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns |

## Configuration Example

```yaml
triggers:
  - disband_town
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
