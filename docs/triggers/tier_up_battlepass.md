---
title: tier_up_battlepass
titleZh: tier_up_battlepass
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
deprecated: true
---

# tier_up_battlepass <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when tiering up the battlepass

## Overview

| Property | Value |
|----------|-------|
| Type ID | `tier_up_battlepass` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The new level |
| Requires | EcoBattlepass |

## Configuration Example

```yaml
triggers:
  - tier_up_battlepass
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
