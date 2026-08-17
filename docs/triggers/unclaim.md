---
title: unclaim
titleZh: unclaim
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns-/-huskclaims-/-lands
outline: deep
---

# unclaim <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns / HuskClaims / Lands" />
> **Requires:** HuskClaims

> Fires when the player deletes a HuskClaims claim.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `unclaim` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns / HuskClaims / Lands |

## Configuration Example

```yaml
triggers:
  - unclaim
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
