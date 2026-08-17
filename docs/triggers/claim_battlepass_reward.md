---
title: claim_battlepass_reward
titleZh: claim_battlepass_reward
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
deprecated: true
---

# claim_battlepass_reward <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when claiming a battlepass reward

## Overview

| Property | Value |
|----------|-------|
| Type ID | `claim_battlepass_reward` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoBattlepass |

## Configuration Example

```yaml
triggers:
  - claim_battlepass_reward
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
