---
title: player_trade
titleZh: player_trade
category: triggers
subcategory: external
tags:
  - libreforge
  - axtrade
outline: deep
---

# player_trade <Badge type="info" text="libreforge" /> <Badge type="warning" text="AxTrade" />
> **Requires:** AxTrade

> Fires when an AxTrade trade between two players is completed.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `player_trade` |
| Module | libreforge |
| Category | External Integration |
| Value | The total amount of items traded (alt-value: currency traded) |
| Requires | AxTrade |

## Configuration Example

```yaml
triggers:
  - player_trade
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The total amount of items traded (alt-value: currency traded) |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
