---
title: scyther_auto_collect
titleZh: scyther_auto_collect
category: triggers
subcategory: external
tags:
  - libreforge
  - scyther
outline: deep
---

# scyther_auto_collect <Badge type="info" text="libreforge" /> <Badge type="warning" text="Scyther" />
> **Requires:** Scyther

> Fires when Scyther auto-collects a crop for the player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `scyther_auto_collect` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Scyther |

## Configuration Example

```yaml
triggers:
  - scyther_auto_collect
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
