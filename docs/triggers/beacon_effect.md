---
title: beacon_effect
titleZh: beacon_effect
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# beacon_effect <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />
> **Requires:** Paper

> Fires when the player receives a potion effect from a beacon.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `beacon_effect` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - beacon_effect
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
