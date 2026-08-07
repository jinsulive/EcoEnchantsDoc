---
title: mcmmo_ability_deactivate
titleZh: mcmmo_ability_deactivate
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# mcmmo_ability_deactivate <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />

> Triggered when an McMMO ability is deactivated

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mcmmo_ability_deactivate` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | McMMO |

## Configuration Example

```yaml
triggers:
  - mcmmo_ability_deactivate
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
