---
title: villager_trade
titleZh: villager_trade
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# villager_trade <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />
> **Requires:** Paper

> Fires when the player completes a trade with a villager.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `villager_trade` |
| Module | libreforge |
| Category | Internal |
| Value | The experience the villager gains |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - villager_trade
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience the villager gains |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
